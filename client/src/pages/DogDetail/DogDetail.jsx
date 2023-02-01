import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { getDogDetail } from '../../redux/actions';

const DogDetail = () => {

    const dispatch = useDispatch();
    let dogDetail = useSelector(state => state.dog);
    const { id } = useParams();

    useEffect(() => {
        dispatch(getDogDetail(id));
    }, [dispatch, id]);

    return (
        <div>
            <h1>{dogDetail.name}</h1>
            <img src={dogDetail.image} alt={dogDetail.name} />
            <h3>{dogDetail.weight}kg</h3>
            <h3>{dogDetail.height}cm</h3>
            <h3>
                {
                    dogDetail.createdInDb 
                    ?
                        dogDetail.temperaments
                        ? dogDetail.temperament.name.join(" | ")
                        : ""
                    :
                        dogDetail.temperament
                        ? dogDetail.temperament.join(" | ")
                        : "" 
                    
                }
            </h3>
            <h4>id:{dogDetail.id}</h4>
        </div>
    )
}

export default DogDetail;