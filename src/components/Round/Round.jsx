import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link, useHistory } from 'react-router-dom';
import Button from '@mui/material/Button';

function Round() {
    const dispatch = useDispatch();
    const history = useHistory();
    const [holeScore, setHoleScore] = useState(3);
    const [holeNum, setHole] = useState(0);
    let [par, setPar] = useState(0)
    const score = useSelector((store) => store.holeScore.holeScore);
    const numHole = useSelector((store) => store.holeScore.holeNum);
    const roundScore = useSelector((store) => store.holeScore);
    const id = useSelector((store) => store.courseDetails);
    const holes = useSelector((store) => store.holes);
    const roundId = useSelector((store) => store.gameId);
    let [count, setCount] = useState(1)

    useEffect(() => {
        holes.shift()
        parSetter()

    }, []);

    const parSetter = () => {

        holes[holeNum].tee_1_par === undefined ? holes.shift() :
            holes[holeNum].tee_1_par !== '0' ? setPar(holes[holeNum].tee_1_par) :
                holes[holeNum].tee_2_par !== '0' ? setPar(holes[holeNum].tee_2_par) :
                    holes[holeNum].tee_3_par !== '0' ? setPar(holes[holeNum].tee_3_par) :
                        setPar(0);
    }

    const subtractNum = () => {

        if (holeScore > 1) {
            setHoleScore(holeScore - 1);
        };

    };

    const addNum = () => {

        setHoleScore(holeScore + 1);

    };

    const addScore = () => {

        parSetter();

        dispatch({
            type: 'ADD_SCORE',
            payload: {
                roundId: roundId.id,
                holeNum: holes[holeNum].hole_num,
                holePar: par,
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

        if (holeNum > 1) {
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

        history.push('/history')

        // dispatch({
        //     type: 'POST_SCORE',
        //     payload: {
        //         round_id: roundId,
        //         hole_num: numHole,
        //         par: par,
        //         score: score
        //     }
        // });
    }


    return (
        <>
            <table>
                <thead>
                    <tr>
                        {roundScore.map(hole => (
                            <td>{hole.hole_num}</td>
                        ))}
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        {roundScore.map(par => (
                            <td>{par.par}</td>
                        ))}
                    </tr>
                    <tr>
                        {roundScore.map(score => (
                            <td>{score.score}</td>
                        ))}

                    </tr>
                </tbody>
            </table>
            <h1>{holeScore}</h1>
            <Button onClick={subtractNum}>-</Button>
            <Button onClick={addNum}>+</Button>
            <Button onClick={addScore}>Add Score</Button>
            <Button onClick={backOne}>Back</Button>
            <Button onClick={clearScore}>Clear</Button>
            <Button onClick={submitScore}>Review</Button>
        </>
    )
}

export default Round;