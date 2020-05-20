import { spectacles } from "../data/spectacles";
import {
    ADD_ITEM_TO_CART,
    REMOVE_ITEM_FROM_CART,
    EMPTY_CART,
    REMOVE_SPECTACLE,
    ADD_SPECTACLE,
    EDIT_SPECTACLE,
    LOGIN,
} from "../actions/index";

const initialState = { spectacles, cart: [], isLogged: false };

const rootReducer = (state = initialState, action) => {
    const { payload, type } = action;
    switch (type) {
        case ADD_ITEM_TO_CART:
            return {
                ...state,
                cart: [...state.cart, payload],
            };
        case REMOVE_ITEM_FROM_CART:
            return {
                ...state,
                cart: state.cart.filter((item) => item.id !== payload.id),
            };
        case EMPTY_CART:
            return {
                ...state,
                cart: [],
            };
        case REMOVE_SPECTACLE:
            return {
                ...state,
                spectacles: state.spectacles.filter((item) => item.id !== payload.id),
            };
        case ADD_SPECTACLE:
            return {
                ...state,
                spectacles: [payload, ...state.spectacles],
            };
        case EDIT_SPECTACLE:
            return {
                ...state,
                spectacles: state.spectacles.map((spectacle) => {
                    if (spectacle.id === payload.id) return payload;
                    return spectacle;
                }),
            };
        case LOGIN:
            return {
                ...state,
                isLogged: !state.isLogged,
            };
        default:
            return state;
    }
};

export default rootReducer;
