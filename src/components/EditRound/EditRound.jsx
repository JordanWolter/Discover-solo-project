import { useParams } from 'react-router-dom';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Grid from '@mui/system/Unstable_Grid';
import Paper from '@mui/material/Paper';
import { styled, Stack } from '@mui/system';
import Grid2 from '@mui/material/Unstable_Grid2';
import { PrimaryMainTheme } from '../PrimaryMainTheme/PrimaryMainTheme';
import { ThemeProvider } from '@mui/system';
import './EditRound.css'

function EditRound() {
    const dispatch = useDispatch();
    const params = useParams();

    const editRound = useSelector(store => store.editRound);

    console.log('EDIT ROUND??????', editRound)

    useEffect(() => {

        console.log('params', params)

        if (params.id) {
            dispatch({
                type: 'FETCH_EDIT_ROUND',
                payload: params.id
            });
        }
    }, [params.id]);
    // 👆 re-run the fn every time the :id changes


    const onSubmit = (evt) => {
        evt.preventDefault();
        dispatch({
            type: 'SAVE_EDIT_ROUND',
            payload: editRound
        })
    };

    return (
        <>
            <ThemeProvider theme={PrimaryMainTheme}>
                <Box sx={{ minHeight: 712 }}>
                    <Grid2 container className="movies">
                        {editRound && editRound.map(hole => {
                            let color;
                            if (hole.par > hole.score) {
                                color = 'lightgreen'
                            } else if (hole.par < hole.score) {
                                color = '#e57373'
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
                                    marginTop: 5,
                                    marginBottom: 3,
                                    borderRadius: 3,
                                    boxShadow: 15,
                                    textAlign: 'right',
                                    fontSize: 25

                                }}>
                                    <p className='holeInfo'>Hole: {hole.hole_num}</p>
                                    <p className='holeInfo'>Par: {hole.par}</p>
                                    <TextField inputProps={{ inputMode: 'numeric', pattern: '[0-9]*' }} value={hole.score}
                                    size='small'
                                        onChange={(evt) => dispatch({
                                            type: 'UPDATE_EDIT_ROUND',
                                            payload: { score: evt.target.value }
                                        })} id="outlined-basic" label="Score" variant="outlined" focused />
                                    {/* <p className='holeInfo'>Score: {hole.score}</p> */}
                                </Box>
                                <Button onClick={onSubmit}>Submit</Button>
                            </Grid2>
                            )
                        })}
                    </Grid2>
                </Box>
            </ThemeProvider>

            {/* <h1>{params.id && 'Edit'} Brand: {editDisc.brand}</h1>
            <form onSubmit={onSubmit}>

                <Box
                    component="form"
                    sx={{
                        '& > :not(style)': { m: 1, width: '25ch' },
                    }}
                    noValidate
                    autoComplete="off"
                >
                    <TextField value={editDisc.brand}
                        onChange={(evt) => dispatch({
                            type: 'UPDATE_EDIT_DISC',
                            payload: { brand: evt.target.value }
                        })} id="outlined-basic" label="Brand"  variant="outlined" focused/>

                    <TextField value={editDisc.name}
                        onChange={(evt) => dispatch({
                            type: 'UPDATE_EDIT_DISC',
                            payload: { name: evt.target.value }
                        })} id="outlined-basic" label="Name" variant="outlined" focused/>

                    <TextField value={editDisc.flight_type}
                        onChange={(evt) => dispatch({
                            type: 'UPDATE_EDIT_DISC',
                            payload: { flight_type: evt.target.value }
                        })} id="outlined-basic" label="Type" variant="outlined" focused/>

                    <TextField value={editDisc.speed}
                        onChange={(evt) => dispatch({
                            type: 'UPDATE_EDIT_DISC',
                            payload: { speed: evt.target.value }
                        })} id="outlined-basic" label="Speed" variant="outlined" focused/>

                        <TextField value={editDisc.turn}
                        onChange={(evt) => dispatch({
                            type: 'UPDATE_EDIT_DISC',
                            payload: { turn: evt.target.value }
                        })} id="outlined-basic" label="Turn" variant="outlined" focused/>

                        <TextField value={editDisc.glide}
                        onChange={(evt) => dispatch({
                            type: 'UPDATE_EDIT_DISC',
                            payload: { glide: evt.target.value }
                        })} id="outlined-basic" label="Glide" variant="outlined" focused/>

                        <TextField value={editDisc.fade}
                        onChange={(evt) => dispatch({
                            type: 'UPDATE_EDIT_DISC',
                            payload: { fade: evt.target.value }
                        })} id="outlined-basic" label="Fade" variant="outlined" focused/>

                        <Button onClick={onSubmit}>Submit</Button>

                </Box>
            </form> */}
        </>
    )
}

export default EditRound;