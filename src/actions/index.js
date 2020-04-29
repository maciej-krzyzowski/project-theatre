export const filteredList = (text) => {
    return {
        type: "FILTERED_LIST",
        payload: {
            text,
        },
    };
};
