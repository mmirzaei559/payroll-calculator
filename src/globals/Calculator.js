let staticData = {};


// Gross Income Function
export const grossIncome = (profession, experience) => {
    switch (profession) {
        case "developer": {
            switch (experience) {
                case "junior":
                    return (staticData.developerBaseSalary += staticData.developerBaseSalary * staticData.salaryIncreaseJunior);
                case "middle":
                    return (staticData.developerBaseSalary += staticData.developerBaseSalary * staticData.salaryIncreaseMiddle);
                case "senior":
                    return (staticData.developerBaseSalary += staticData.developerBaseSalary * staticData.salaryIncreaseSenior);
                case "lead":
                    return (staticData.developerBaseSalary += staticData.developerBaseSalary * staticData.salaryIncreaseLead);
                default:
                    return null
            }
        }
        case "teacher": {
            switch (experience) {
                case "junior":
                    return (staticData.teacherBaseSalary += staticData.teacherBaseSalary * staticData.salaryIncreaseJunior);
                case "middle":
                    return (staticData.teacherBaseSalary += staticData.teacherBaseSalary * staticData.salaryIncreaseMiddle);
                case "senior":
                    return (staticData.teacherBaseSalary += staticData.teacherBaseSalary * staticData.salaryIncreaseSenior);
                case "lead":
                    return (staticData.teacherBaseSalary += staticData.teacherBaseSalary * staticData.salaryIncreaseLead);
                default:
                    return null
            }
        }
        case "cashier": {
            switch (experience) {
                case "junior":
                    return (staticData.cashierBaseSalary += staticData.cashierBaseSalary * staticData.salaryIncreaseJunior);
                case "middle":
                    return (staticData.cashierBaseSalary += staticData.cashierBaseSalary * staticData.salaryIncreaseMiddle);
                case "senior":
                    return (staticData.cashierBaseSalary += staticData.cashierBaseSalary * staticData.salaryIncreaseSenior);
                case "lead":
                    return (staticData.cashierBaseSalary += staticData.cashierBaseSalary * staticData.salaryIncreaseLead);
                default:
                    return null
            }
        }
        default:
            return null
    }
}


// Tax Base On Location And IncomeYear
export const taxBaseOnLocationAndIncomeYear = (location, incomeYear) => {
    switch (location) {
        case "stockholm": {
            switch (incomeYear) {
                case "2019":
                    return staticData.stockholmTaxPercent2019;
                case "2020":
                    return staticData.stockholmTaxPercent2020;
                default:
                    return null
            }
        }
        case "gothenburg": {
            switch (incomeYear) {
                case "2019":
                    return staticData.gothenburgTaxPercent2019;
                case "2020":
                    return staticData.gothenburgTaxPercent2020;
                default:
                    return null
            }
        }
        default:
            return null
    }
}


// Total Tax And Income Calculator Function
export const totalTaxAndIncomeCalculator = (experience, profession, location, incomeYear, constantData) => {
    staticData = Object.assign({}, constantData);

    let baseTax
    let taxOverThirtySix
    let taxOverFortyFive
    let totalTax
    let netIncomePerYear
    let totalIncomePerYear = grossIncome(profession, experience);
    const baseRate = taxBaseOnLocationAndIncomeYear(location, incomeYear);

    if (totalIncomePerYear <= staticData.maximumBaseIncome) {
        baseTax = totalIncomePerYear * baseRate
        taxOverThirtySix = 0
        taxOverFortyFive = 0
    } else if (totalIncomePerYear > staticData.maximumBaseIncome && totalIncomePerYear < staticData.maximumAverageIncome) {
        baseTax = (staticData.maximumBaseIncome * baseRate)
        taxOverThirtySix = (totalIncomePerYear - staticData.maximumBaseIncome) * staticData.taxRateOverThirtySix
        taxOverFortyFive = 0
    } else if (totalIncomePerYear > staticData.maximumAverageIncome) {
        baseTax = (staticData.maximumBaseIncome * baseRate)
        taxOverThirtySix = (staticData.maximumAverageIncome - staticData.maximumBaseIncome) * staticData.taxRateOverThirtySix
        taxOverFortyFive = (totalIncomePerYear - staticData.maximumAverageIncome) * staticData.taxRateOverFortyFive
    }

    totalTax = baseTax + taxOverThirtySix + taxOverFortyFive
    netIncomePerYear = totalIncomePerYear - totalTax

    return {totalIncomePerYear, totalTax, netIncomePerYear}
}