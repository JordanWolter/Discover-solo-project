import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link, useHistory } from 'react-router-dom';
import Button from '@mui/material/Button';

function Round() {
    const dispatch = useDispatch();
    const history = useHistory();
    const [holeScore, setHoleScore] = useState(3);
    const [roundScore, setRoundScore] = useState([]);
    const [holeNum, setHole] = useState(1);
    const score = useSelector((store) => store.holeScore.holeScore);
    const numHole = useSelector((store) => store.holeScore.holeNum);
    const thisScore = useSelector((store) => store.holeScore);
    const id = useSelector((store) => store.courseDetails);

    const subtractNum = () => {

        if (holeScore > 1) {
            setHoleScore(holeScore - 1);
        };

    };

    const addNum = () => {

        setHoleScore(holeScore + 1);

    };

    const addScore = () => {

        dispatch({
            type: 'ADD_SCORE',
            payload: {
                holeNum: holeNum,
                holeScore: holeScore
            }
        });

        setHoleScore(3);

        setHole(holeNum + 1);

    };

    const backOne = () => {

        dispatch({
            type: 'BACK_HOLE',
        });
        
        if(holeNum > 1){
            setHole(holeNum - 1);
        };

        setHoleScore(3);
        

    };

    const clearScore = () => {

        dispatch({
            type: 'CLEAR_HOLE'
        })

        setHole(1);
    };

    const submitScore = () => {

        dispatch({
            type: 'POST_SCORE',
            payload: {
                user_id: user_id,
                course_id: course_id,
                game_id: game_id,
                time: time,
                hole: numHole,
                par: par,
                score: score,
            }
        });
    }




    const course = useSelector((store) => store.courses)
    return (
        <>
            {/* <p>{roundScore.map(round => (
                round
            ))}</p> */}
            {/* <p>{thisScore}</p> */}
            <h3>{holeNum}</h3>
            <h1>{holeScore}</h1>
            <Button onClick={subtractNum}>-</Button>
            <Button onClick={addNum}>+</Button>
            <Button onClick={addScore}>Add Score</Button>
            <Button onClick={backOne}>Back</Button>
            <Button onClick={clearScore}>Clear</Button>
            <Button onClick={submitScore}>Submit</Button>
        </>
    )
}

export default Round;