import { 
    GET_DOGS, 
    GET_DOG_DETAIL, 
    GET_TEMPERAMENTS, 
    FILTER_BY_TEMPERAMENT,
    FILTER_BY_NAME,
    GET_DOG_NAME,
    POST_DOG,
} from "../actions";

const initialState = {
    dogs: [],
    filteredDogs: [],
    dog: [],
    temperaments: []
};

const rootReducer = (state = initialState, action) => {
    switch(action.type) {
        case GET_DOGS:
            return {
                ...state,
                dogs: action.payload,
                filteredDogs: action.payload,
            }
        case GET_DOG_DETAIL: 
            return {
                ...state,
                dog: action.payload
            }
        case GET_TEMPERAMENTS: 
            return {
                ...state,
                temperaments: action.payload
            }
        case GET_DOG_NAME:
            return {
                ...state,
                dogs: action.payload
            }
        case POST_DOG:
            return {
                ...state,
            }
        case FILTER_BY_TEMPERAMENT:
            const dogsFilter = [...state.filteredDogs];
            let temperamentFiltered;
            let temperamentsDB;
            if(action.payload === 'tod') {
                temperamentFiltered = dogsFilter;   
            } else {
                temperamentsDB = dogsFilter.map(dog => dog.temperaments);
                if(dogsFilter.createdInDb) {
                    console.log(temperamentsDB.name)
                }
                temperamentFiltered = dogsFilter.filter(dog => dog.temperament?.includes(action.payload))
            }
            return {
                ...state,
                dogs: temperamentFiltered,
            }
        case FILTER_BY_NAME:
            let filteredDogsOrder = state.dogs;
            let allOrder;

            switch(action.payload) {
                case 'asc':
                    allOrder = filteredDogsOrder.sort((a,b) => {
                        if(a.name.toLowerCase() > b.name.toLowerCase()){
                            return 1;
                        }
                        if(a.name.toLowerCase() < b.name.toLowerCase()){
                            return -1;
                        }
                        return 0;
                    });
                break;
                case 'des':
                    allOrder = filteredDogsOrder.sort((a,b) => {
                        if(a.name.toLowerCase() < b.name.toLowerCase()){
                            return 1;
                        }
                        if(a.name.toLowerCase() > b.name.toLowerCase()){
                            return -1;
                        }
                        return 0;
                    });
                break;
                default:
                    allOrder = filteredDogsOrder;
                break;
            }
            return {
                ...state,
                dogs: allOrder,
            }
            
        default:
            return {
                ...state
            };
    };
};

export default rootReducer;