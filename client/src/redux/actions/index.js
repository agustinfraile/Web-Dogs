import axios from 'axios';

export const GET_DOGS = 'GET_DOGS';
export const GET_DOG_DETAIL = 'GET_DOG_DETAIL';
export const GET_TEMPERAMENTS = 'GET_TEMPERAMENTS'; 

export const getDogs = () => {
    return async function(dispatch) {
        try {
            const dogs = await axios.get("http://localhost:3001/dogs");
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
            const dog = await axios.get(`http://localhost:3001/dogs/${id}`);

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