import { 
    GET_DOGS, 
    GET_DOG_DETAIL, 
    GET_TEMPERAMENTS 
} from "../actions";

const initialState = {
    allDogs: [],
    dogs: [],
    dog: [],
    temperaments: []
};

const rootReducer = (state = initialState, action) => {
    switch(action.type) {
        case GET_DOGS:
            return {
                ...state,
                allDogs: action.payload,
                dogs: action.payload
            }
        default:
            return {
                ...state
            };
    };
};

export default rootReducer;