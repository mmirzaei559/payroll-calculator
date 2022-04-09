import React, {useEffect, useState} from 'react';
import {Pie} from 'react-chartjs-2';
import {Chart, ArcElement, Tooltip, Title, Legend} from 'chart.js';
Chart.register(ArcElement, Tooltip, Title, Legend);

const PieChart = (salaryData) => {
    const [customData, setCustomData] = useState([0,0])
    const calculateIncomePercentage = (data) => {
        const yearlyNetPercentage = Number((data.netIncomePerYear / (data.totalIncomePerYear / 100)).toFixed());
        const totalTaxPercentage = Number((data.totalTax / (data.totalIncomePerYear / 100)).toFixed());
        setCustomData([totalTaxPercentage, yearlyNetPercentage])
    }

    const state = {
        labels: ['Tax Percentage', 'Net Percentage'],
        datasets: [
            {
                label: 'Percentage Of Tax & Net Salary',
                data: customData,
                backgroundColor: [
                    'rgba(255, 99, 132, 1)',
                    'rgba(54, 162, 235, 1)',
                ]
            }
        ]
    }

    const options = {
        plugins: {
            legend: {
                display: true,
                position: 'bottom'
            }
        },
        title: {
            display: true,
            text: 'Salary Pie Chart'
        }
    }

    useEffect(() => {
        calculateIncomePercentage(salaryData)
    },[salaryData])

    return (
        <div>
            <Pie data={state} options={options}/>
        </div>
    )
}

export default PieChart;