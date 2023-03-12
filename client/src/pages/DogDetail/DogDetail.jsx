import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { getDogDetail } from '../../redux/actions';
import { Icon } from '@iconify/react';

import './DogDetail.css';

const DogDetail = () => {

    const dispatch = useDispatch();
    let dogDetail = useSelector(state => state.dog);
    const { id } = useParams();

    useEffect(() => {
        dispatch(getDogDetail(id));
    }, [dispatch, id]);

    return (
        <>
            <div className='detail'>
                <div className='detail-image'>
                    <img 
                        src={dogDetail.image} 
                        alt={dogDetail.name} 
                    />

                    <div className='button-back'>
                        <button
                            onClick={() => window.history.back()}
                        >
                            Volver
                        </button>
                    </div>
                </div>

                <div className='detail-container'>
                        <div className='detail-container_title'>
                            <h1>{dogDetail.name}</h1>
                        </div>
                    <div className='detail-container--info'>

                        <div className='detail-container_weight'>
                            <h3>
                                <Icon icon="mdi:weight-kilogram" />
                                {dogDetail.weight}kg
                            </h3>
                        </div>

                        <div className='detail-container_height'>
                            <h3>
                                <Icon icon="gg:format-line-height" />
                                {dogDetail.height}cm
                            </h3>
                        </div>

                        <div 
                            className='detail-container_temperament'
                        >
                            <h3>
                            <Icon icon="bxs:dog" />
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
                        </div>

                        {/* <div className='detail-container_id'>
                            <h4>id:{dogDetail.id}</h4>
                        </div> */}
                    </div>
                </div>
            </div>


        </>
    )
}

export default DogDetail;