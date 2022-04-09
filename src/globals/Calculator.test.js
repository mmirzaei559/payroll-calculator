import {totalTaxAndIncomeCalculator} from './Calculator'

describe('Calculator file', () => {
    test('properly calculate Gross Salary, Total Tax and Net Salary ', () => {
        const experience = 'lead';
        const profession = 'teacher';
        const location = 'stockholm';
        const incomeYear = '2020';
        const staticData = {
            maximumBaseIncome: 36000,
            maximumAverageIncome: 45000,
            developerBaseSalary: 30000,
            teacherBaseSalary: 27000,
            cashierBaseSalary: 25000,
            salaryIncreaseJunior: 0,
            salaryIncreaseMiddle: 0.2,
            salaryIncreaseSenior: 0.4,
            salaryIncreaseLead: 0.6,
            taxRateOverThirtySix: 0.5,
            taxRateOverFortyFive: 0.7,
            stockholmTaxPercent2019: 0.3,
            stockholmTaxPercent2020: 0.29,
            gothenburgTaxPercent2019: 0.25,
            gothenburgTaxPercent2020: 0.22,
        }

        const totalResult = totalTaxAndIncomeCalculator(experience,profession,location,incomeYear,staticData)
        const grossSalary = totalResult.totalIncomePerYear;
        const totalTax = totalResult.totalTax;
        const netSalary = totalResult.netIncomePerYear;

        expect(grossSalary).toBe(43200)
        expect(totalTax).toBe(14040)
        expect(netSalary).toBe(29160)
    })
})