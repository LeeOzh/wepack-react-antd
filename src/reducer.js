
const sta ={
    count: 0,
    a: 'b'
}

export default (state = {
    count: 1,
}, action) => {
    switch(action.type) {
        case "increment":
            return state = {
                count: state.count + 1
            }
        case "decrement":
            return state - 1;
        default:
            return state;
    }
}