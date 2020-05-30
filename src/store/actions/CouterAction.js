// Action
const addNumber = (addVal) => {
    return {
        type: 'ADD_NUMBER',
        value: addVal
    }
}

const subNumber = (subVal) => {
    return {
        type: 'SUB_NUMBER',
        value: subVal
    }
}

export {addNumber, subNumber}
