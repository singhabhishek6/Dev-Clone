export const initialState = {status : false};
export const reducer = (state = initialState, action) => {
    if (action.type === "LOGIN")
    {
        const user = action.payload;
        var newobj =  { ...state,status:action.status,user};
        return newobj;

    }
    return state;
};