export const ADD_ITEM_TO_CART = "ADD_ITEM_TO_CART";
export const REMOVE_ITEM_FROM_CART = "REMOVE_ITEM_FROM_CART";
export const EMPTY_CART = "EMPTY_CART";
export const REMOVE_SPECTACLE = "REMOVE_SPECTACLE";
export const ADD_SPECTACLE = "ADD_SPECTACLE";
export const EDIT_SPECTACLE = "EDIT_SPECTACLE";
export const LOGIN = "LOGIN";

export const addItemToCart = (title, image, price, amount) => {
    const getId = () => `_${Math.random().toString(36).substr(2, 9)}`;
    return {
        type: ADD_ITEM_TO_CART,
        payload: {
            id: getId(),
            title,
            image,
            price,
            amount,
        },
    };
};

export const removeItemFromCart = (id) => {
    return {
        type: REMOVE_ITEM_FROM_CART,
        payload: {
            id,
        },
    };
};

export const emptyCart = () => ({
    type: EMPTY_CART,
});

export const removeSpectacle = (id) => ({
    type: REMOVE_SPECTACLE,
    payload: {
        id,
    },
});

export const addSpectacle = (title, image, director, description, price) => {
    const getId = () => `_${Math.random().toString(36).substr(2, 9)}`;
    return {
        type: ADD_SPECTACLE,
        payload: {
            id: getId(),
            title,
            image,
            director,
            description,
            price,
        },
    };
};

export const editSpectacle = (id, title, image, description, director, price) => ({
    type: EDIT_SPECTACLE,
    payload: {
        id,
        title,
        image,
        description,
        director,
        price,
    },
});

export const login = () => ({
    type: LOGIN,
});
