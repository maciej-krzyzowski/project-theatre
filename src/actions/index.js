export const filteredList = (text) => {
    return {
        type: "FILTERED_LIST",
        payload: {
            text,
        },
    };
};

export const addItemToCart = (title, image, price, amount) => {
    const getId = () => `_${Math.random().toString(36).substr(2, 9)}`;
    return {
        type: "ADD_ITEM_TO_CART",
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
        type: "REMOVE_ITEM_FROM_CART",
        payload: {
            id,
        },
    };
};

export const clearCart = () => {
    return {
        type: "CLEARE_CART",
    };
};

export const removeSpectacle = (id) => {
    return {
        type: "REMOVE_SPECTACLE",
        payload: {
            id,
        },
    };
};

export const addSpectacle = (title, image, director, description, price) => {
    const getId = () => `_${Math.random().toString(36).substr(2, 9)}`;
    return {
        type: "ADD_SPECTACLE",
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

export const editSpectacle = (id, title, image, description, director, price) => {
    return {
        type: "EDIT_SPECTACLE",
        payload: {
            id,
            title,
            image,
            description,
            director,
            price,
        },
    };
};
