import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link, useHistory } from 'react-router-dom';
import Button from '@mui/material/Button';

function History() {
    const dispatch = useDispatch()
    const userId = useSelector(store => store.user.id);
    const roundHistory = useSelector(store => store.roundHistory);
    const historyId = useSelector(store => store.historyId);


    useEffect(() => {
        dispatch({
            type: 'FETCH_ROUND_HISTORY',
            payload: userId
        })
        dispatch({
            type: 'FETCH_HISTORY_ID',
            payload: userId
        })

    }, []);



    return (
        <>
            {/* {roundHistory.map((round, index, arr) => {
                const prevRound = arr[index - 1]
                if(prevRound?.round_id === round.round_id ){
                    return(
                        <>
                        <p>id:{round.round_id} hole:{round.hole_num} score:{round.score} </p>
                        </>
                    )
                }else{
                    return(
                        <>
                        <p>new table</p>
                        </>
                    )
                }
            })} */}
            {roundHistory.map(round => {
                historyId.map(id => {
                    if(round.round_id === id){
                        return (
                            <p>id:{round.round_id} hole:{round.hole_num} score:{round.score} </p>
                        )
                    }
                })
            })}
            <p>{userId}</p>

        </>
    )
}

export default History