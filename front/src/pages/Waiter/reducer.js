const initialState = {
    menu: []
};

export default function waiterReducer(state = initialState, action) {
    switch (action.type) {
        case "FETCH_MENU_DATA":
            return {...state, menu: {...action.payload} };
        default:
            return state
    }
}
