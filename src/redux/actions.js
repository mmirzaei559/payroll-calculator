export const callActions = (value) => {
    switch (value.category) {
        case "experience": {
            return {type: "SET_EXPERIENCE", payload: value};
        }
        case "profession": {
            return {type: "SET_PROFESSION", payload: value};
        }
        case "location": {
            return {type: "SET_LOCATION", payload: value};
        }
        case "incomeYear": {
            return {type: "SET_INCOME_YEAR", payload: value};
        }
        default:
            return null
    }
}
export const setResult = (value) => {
    return {type: "SET_RESULT", payload: value};
}