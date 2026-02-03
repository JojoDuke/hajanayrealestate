export const FETCH_HOUSES = "FETCH_HOUSES";
export const FETCH_PAGES = "FETCH_PAGES";

export const FETCH_STRUCTURE = "FETCH_STRUCTURE";


export const backendDataReducer = (state, action) => {

    switch (action.type) {

        // GET ALL THE DATA
        
        case FETCH_HOUSES:
            return {
                ...state,
                houses: action.houses,
            }
        
        case FETCH_PAGES:
            return {
                ...state,
                pages: action.pages,
            }
        
        case FETCH_STRUCTURE:
            return {
                ...action.config
            }
        
        default:
            return state;
    }
}