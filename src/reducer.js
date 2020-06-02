const initialState = {
    counter: 0,
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case "INC":
            return {
                ...state,
                counter: state.counter + action.payload,
            };
        case "DEC":
            return {
                ...state,
                counter: state.counter - action.payload,
            };  
        case "RND":
            return {
                 ...state,
                 counter: action.payload,
            }; 
        default:
            return {
                ...state,
            }            
    }
};

export default reducer;