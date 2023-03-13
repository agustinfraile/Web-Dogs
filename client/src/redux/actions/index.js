import axios from 'axios';

export const GET_DOGS = 'GET_DOGS';
export const GET_DOG_DETAIL = 'GET_DOG_DETAIL';
export const GET_TEMPERAMENTS = 'GET_TEMPERAMENTS'; 
export const FILTER_BY_TEMPERAMENT = 'FILTER_BY_TEMPERAMENT'; 
export const FILTER_BY_NAME = 'FILTER_BY_NAME'; 
export const RESET_FILTERS = 'RESET_FILTERS'; 
export const REMOVE_FILTER = 'REMOVE_FILTER';
export const GET_DOG_NAME = 'GET_DOG_NAME';
export const POST_DOG = 'POST_DOG';

export const getDogs = () => {
    return async function(dispatch) {
        try {
            const dogs = await axios.get("web-dogs-production.up.railway.app/dogs");
            return dispatch({
                type: GET_DOGS,
                payload: dogs.data
            });
        } catch (error) {
            throw new Error({error: 'No se pudo traer los dogs'});
        };
    };
};

export const getDogDetail = (id) => {
    return async function(dispatch) {
        try {
            const dog = await axios.get(`web-dogs-production.up.railway.app/dogs/${id}`);

            return dispatch({
                type: GET_DOG_DETAIL,
                payload: dog.data[0]
            });
        } catch (error) {
            return dispatch ({
                type: GET_DOG_DETAIL,
                payload: []
            });
        };
    };
};

export const getTemperaments = () => {
    return async function (dispatch) {
        try {
            const dogsTemperaments = await axios.get('web-dogs-production.up.railway.app/temperaments');

            return dispatch({
                type: GET_TEMPERAMENTS,
                payload: dogsTemperaments.data
            });
        } catch (error) {
            console.log(error);
        };
    };
};

export const filterDogsByTemperament = (payload) => {
    return {
        type: FILTER_BY_TEMPERAMENT,
        payload
    };
}; 

export const filterDogsByName = (payload) => {
    return {
        type: FILTER_BY_NAME,
        payload
    };
};

export const getNameDogs = (name) => {
    return async function (dispatch) {
        try {
            const { data } = await axios.get(`web-dogs-production.up.railway.app/dogs?name=${name}`);
            return dispatch({
                type: GET_DOG_NAME,
                payload: data
            });
        } catch (error) {
            console.log(error);
            return {
                type: GET_DOG_NAME,
                payload: []
            };
        };
    };
};

export const postDog = (payload) => {
    return async function (dispatch) { 
        const data = await axios.post(`web-dogs-production.up.railway.app/dogs`, payload);
        return data;
    };
};