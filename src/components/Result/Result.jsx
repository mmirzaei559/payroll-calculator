import React from 'react';
import {Container} from './style';
import PieChart from "../../charts/PieChart";
import {useSelector} from "react-redux";

export default function Result() {
    const result = useSelector((state) => state.result);

    return (
        <Container>
            <div>
                <span>Gross Salary:</span>
                <span>{result.totalIncomePerYear?.toLocaleString()} SEK</span>
            </div>
            <div>
                <span>Total Tax:</span>
                <span>{result.totalTax?.toLocaleString()} SEK</span>
            </div>
            <div>
                <span>Yearly Net:</span>
                <span>{result.netIncomePerYear?.toLocaleString()} SEK</span>
            </div>
            <PieChart {...result} />
        </Container>
    )
}