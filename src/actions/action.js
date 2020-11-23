export const CONSTANTS = {
    ADD_CARD: "ADD_CARD",
    ADD_LIST: "ADD_LIST",
    TOGGLE_CARD: "TOGGLE_CARD"
}

export const addCard= (listID, text) => {
    return {
        type: CONSTANTS.ADD_CARD,
        payload:{text,listID}
    };
};

export const addList = (title) => {
    return {
        type: CONSTANTS.ADD_LIST,
        payload:title
    };
};

export const toggleCard = (listID, cardID) =>{
    return{
        type: CONSTANTS.TOGGLE_CARD,
        payload: {listID,cardID}
    };
};