const initialState = {
    experience: '',
    profession: '',
    location: '',
    incomeYear: '',
    result: ''
}

export const formReducer = (state = initialState, action) => {
    switch (action.type) {
        case "SET_EXPERIENCE": {
            // return {...state, answers: [...state.answers, action.payload]}
            return {...state, experience: action.payload.value};
        }
        case "SET_PROFESSION": {
            return {...state, profession: action.payload.value};
        }
        case "SET_LOCATION": {
            return {...state, location: action.payload.value};
        }
        case "SET_INCOME_YEAR": {
            return {...state, incomeYear: action.payload.value};
        }
        case "SET_RESULT": {
            return {...state, result: action.payload};
        }
        default:
            return state
    }
}