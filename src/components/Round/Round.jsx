import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link, useHistory } from 'react-router-dom';
import Button from '@mui/material/Button';
import { ThemeProvider } from '@mui/system';
import Grid from '@mui/system/Unstable_Grid';
import Paper from '@mui/material/Paper';
import { styled, Box, Stack } from '@mui/system';
import Grid2 from '@mui/material/Unstable_Grid2';
import { PrimaryMainTheme } from '../PrimaryMainTheme/PrimaryMainTheme';
import './Round.css'



function Round() {
    const dispatch = useDispatch();
    const history = useHistory();
    const [holeScore, setHoleScore] = useState(3);
    const [holeNum, setHole] = useState(0);
    let [par, setPar] = useState(0);
    let [conditional, setConditional] = useState(0)
    const score = useSelector((store) => store.holeScore.holeScore);
    const numHole = useSelector((store) => store.holeScore.holeNum);
    const roundScore = useSelector((store) => store.holeScore);
    const id = useSelector((store) => store.courseDetails);
    const holes = useSelector((store) => store.holes);
    const roundId = useSelector((store) => store.gameId);
    let [count, setCount] = useState(1)

    useEffect(() => {
        // holes.holes.shift()
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

        console.log('HOLE INFO', holeNum, roundId.id)

        dispatch({
            type: 'BACK_HOLE',
            payload: {
                holeNum: holeNum,
                roundId: roundId.id
            }
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
    {/* <Paper sx={{ padding: 2, display: 'flex', flexDirection: 'column', justifyContent: 'space-around', minHeight: 200}}></Paper>
</Paper> */}
    return (
        <>
            <ThemeProvider theme={PrimaryMainTheme}>
                <Box sx={{ minHeight: 712 }}>
                    <Grid2 container className="movies">
                        <Button onClick={subtractNum} variant='contained' sx={{
                            margin: 'auto', marginTop: 4.5, marginLeft: 2,
                            fontSize: 90, height: 60, boxShadow: 15,
                        }}><p id='minus'>-</p></Button>
                        <Box sx={{
                            textAlign: 'center',
                            backgroundColor: 'white',
                            width: 200,
                            height: 100,
                            margin: 'auto',
                            marginTop: 2,
                            borderRadius: 3,
                            fontSize: 50,
                            boxShadow: 15,

                        }}>
                            <h1 id='scoreTrack'>{holeScore}</h1>
                        </Box>
                        <Button onClick={addNum} variant='contained' sx={{
                            margin: 'auto', marginTop: 4.5, marginRight: 2,
                            fontSize: 80, height: 60, width: 70, boxShadow: 15,
                        }}><p id='plus'>+</p></Button>
                    </Grid2>



                    <Button onClick={addScore} variant='contained' sx={{ marginTop: 5, marginBottom: 5, marginLeft: 'auto', marginRight: 'auto' }}>Add Score</Button>
                    <Button onClick={backOne} variant='contained' sx={{ marginTop: 5, marginBottom: 5, marginLeft: 'auto', marginRight: 'auto' }}>Back</Button>
                    <Button onClick={clearScore} variant='contained' sx={{ marginTop: 5, marginBottom: 5, marginLeft: 'auto', marginRight: 'auto' }}>Clear</Button>
                    <Button onClick={submitScore} variant='contained' sx={{ marginTop: 5, marginBottom: 5, marginLeft: 'auto', marginRight: 'auto' }}>Submit</Button>

                    <Grid2 container className="movies">
                        {roundScore.map(hole => {
                            let color;
                            if (hole.par > hole.score) {
                                color = 'lightgreen'
                            } else if (hole.par < hole.score) {
                                color = '#f44336'
                            } else {
                                color = 'white'
                            }
                            return (<Grid2 xs={4} sm={1} md={1} lg={1}>
                                <Box xs={1} sm={1} md={1} lg={1} sx={{

                                    backgroundColor: color,
                                    color: 'black',
                                    width: 100,
                                    height: 125,
                                    padding: 1,
                                    margin: "auto",
                                    marginTop: -.5,
                                    marginBottom: 3,
                                    borderRadius: 3,
                                    boxShadow: 15,
                                    textAlign: 'right',
                                    fontSize: 25

                                }}>
                                    <p className='holeInfo'>Hole: {hole.hole_num}</p>
                                    <p className='holeInfo'>Par: {hole.par}</p>
                                    <p className='holeInfo'>Score: {hole.score}</p>
                                </Box>
                            </Grid2>
                            )
                        })}
                    </Grid2>
                </Box>
            </ThemeProvider>

        </>
    )
}

export default Round;