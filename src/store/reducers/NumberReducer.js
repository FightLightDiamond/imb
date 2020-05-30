const numberReducer = (state = {number: 1}, action) => {
    // alert(action.type)
    switch (action.type) {
        case 'ADD_NUMBER':
            return {...state, number: state.number + 1}
        case 'SUB_NUMBER':
            return {...state, number: state.number - 1}
    }

    return state
}

export default numberReducer
