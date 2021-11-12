const reducer = (state, action) => {
    //recibe el type, lo evalua y asi sabe que hacer con el estado
    switch (action.type) {
        case 'LOGIN_REQUEST':
            return {
                ...state,
                user: action.payload,
            }
        case 'LOGOUT_REQUEST':
            return {
                ...state,
                user: action.payload,
            }
        case 'REGISTER_REQUEST':
            return {
                ...state,
                user: action.payload,
            }
        default:
            return state;
    }
}

export default reducer;