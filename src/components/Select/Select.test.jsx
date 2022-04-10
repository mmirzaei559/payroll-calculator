import React from "react";
import {render, screen} from "@testing-library/react";
import Select from "./Select";
import {Provider} from "react-redux";
import {store} from "../../redux/store";
import MockData from "../../mockData/MockData.json";

describe("Select component", () => {
    test("select-tag should exist and onFocus show array of  option tag", () => {
        const experience = MockData[0];
        const errorValidationProfession = false;
        const {getByRole, getByText} = render(
            <Provider store={store}>
                <Select data={experience} error={errorValidationProfession}/>
            </Provider>
        );
        const selectElement = screen.getByTestId('select-tag');
        expect(selectElement).toBeInTheDocument();
        selectElement.focus();
        const optionTags = screen.getAllByTestId('option-tag');
        expect(optionTags[0]).toBeInTheDocument()
    })
})