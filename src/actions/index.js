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
