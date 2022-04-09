import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {setResult} from "../../redux/actions";
import {Container, InputsContainer, CalculatorButton} from "./style";
import {totalTaxAndIncomeCalculator} from "../../globals/Calculator";
import MockData from "../../mockData/MockData.json";
import staticData from "../../globals/StaticData";
import DropDown from "../DropDown/DropDown";
import Select from "../Select/Select";
import Result from "../Result/Result";

export default function Form() {
    const dispatch = useDispatch();

    // calculate button clicked state
    const [calculatorButtonClicked, setCalculatorButtonClicked] = useState(false)

    // components (inputs) validation state
    const [errorsValidation, setErrorsValidation] = useState({
        experience: false,
        profession: false,
        location: false,
        incomeYear: false,
    })

    // final result of calculations in store
    const resultFromState = useSelector((state) => state.result);

    // value of each parameter in state
    const experienceFromState = useSelector((state) => state.experience);
    const professionFromState = useSelector((state) => state.profession);
    const locationFromState = useSelector((state) => state.location);
    const incomeYearFromState = useSelector((state) => state.incomeYear);

    // mock data from JSON file
    const experience = MockData[0];
    const profession = MockData[1];
    const cities = MockData[2];
    const incomeYear = MockData[3];

    // starting calculation process if all parameters have value
    const startCalculating = async () => {
        if (experienceFromState && professionFromState && locationFromState && incomeYearFromState) {
            const result = totalTaxAndIncomeCalculator(
                experienceFromState,
                professionFromState,
                locationFromState,
                incomeYearFromState,
                staticData)
            await dispatch(setResult(result))
        } else {
            setCalculatorButtonClicked(true)
            checkFormValidation()
        }
    }

    // find components (inputs) without value
    const checkFormValidation = () => {
        if (!experienceFromState) {
            setErrorsValidation(previousErrors => ({...previousErrors, experience: true}))
        } else {
            setErrorsValidation(previousErrors => ({...previousErrors, experience: false}))
        }
        if (!professionFromState) {
            setErrorsValidation(previousErrors => ({...previousErrors, profession: true}))
        } else {
            setErrorsValidation(previousErrors => ({...previousErrors, profession: false}))
        }
        if (!locationFromState) {
            setErrorsValidation(previousErrors => ({...previousErrors, location: true}))
        } else {
            setErrorsValidation(previousErrors => ({...previousErrors, location: false}))
        }
        if (!incomeYearFromState) {
            setErrorsValidation(previousErrors => ({...previousErrors, incomeYear: true}))
        } else {
            setErrorsValidation(previousErrors => ({...previousErrors, incomeYear: false}))
        }
    }


    useEffect(() => {
        if (calculatorButtonClicked) checkFormValidation()
    }, [experienceFromState, professionFromState, locationFromState, incomeYearFromState])

    return (
        <Container>
            <div className="wrapper">
                <InputsContainer>
                    <DropDown data={profession} error={errorsValidation}/>
                    <Select data={experience} error={errorsValidation}/>
                    <DropDown data={cities} error={errorsValidation}/>
                    <Select data={incomeYear} error={errorsValidation}/>
                </InputsContainer>
                {resultFromState?.totalIncomePerYear && <Result/>}
            </div>
            <CalculatorButton onClick={startCalculating}>Calculate</CalculatorButton>
        </Container>
    )
}