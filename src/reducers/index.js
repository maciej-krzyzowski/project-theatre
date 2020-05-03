import { spectacles } from "../data/spectacles";

const initialState = { spectacles };

const rootReducer = (state = initialState, action) => {
    switch (action.type) {
        case "FILTERED_LIST":
            let newList = spectacles;
            if (action.payload.text.length >= 2) {
                newList = state.spectacles.filter((spectacle) =>
                    spectacle.title.toLowerCase().includes(action.payload.text.toLowerCase())
                );
            }
            return {
                ...state,
                spectacles: [...newList],
            };
        default:
            return state;
    }
};

export default rootReducer;
