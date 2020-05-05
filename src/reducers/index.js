import { data } from "../data/data";

const initialState = { ...data };

const rootReducer = (state = initialState, action) => {
    switch (action.type) {
        case "FILTERED_LIST":
            let newList = data.spectacles;
            if (action.payload.text.length >= 2) {
                newList = state.spectacles.filter((spectacle) =>
                    spectacle.title.toLowerCase().includes(action.payload.text.toLowerCase())
                );
            }
            return {
                ...state,
                spectacles: [...newList],
            };

        case "ADD_ITEM_TO_CART":
            return {
                ...state,
                cart: [...state.cart, action.payload],
            };

        case "REMOVE_ITEM_FROM_CART":
            return {
                ...state,
                cart: [...state.cart.filter((item) => item.id !== action.payload.id)],
            };
        case "CLEARE_CART":
            return {
                ...state,
                cart: [],
            };
        default:
            return state;
    }
};

export default rootReducer;
