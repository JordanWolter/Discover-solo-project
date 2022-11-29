import { useHistory, useParams } from 'react-router-dom';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { ThemeProvider } from '@mui/system';
import { PrimaryMainTheme } from '../PrimaryMainTheme/PrimaryMainTheme';

function EditDisc() {
    const history = useHistory();
    const dispatch = useDispatch();
    const params = useParams();
    console.log('params', params);

    const editDisc = useSelector(store => store.editDisc);

    console.log('EDITDISC', editDisc)

    useEffect(() => {

        if (params.id) {
            dispatch({
                type: 'FETCH_EDIT_DISC',
                payload: params.id
            });
        }
    }, [params.id]);
    // 👆 re-run the fn every time the :id changes


    const onSubmit = (evt) => {
        evt.preventDefault();
        dispatch({
            type: 'SAVE_DISC',
            payload: editDisc
        });

        history.push('/profile');

    };

    return (
        <>
            <ThemeProvider theme={PrimaryMainTheme}>
            <Box sx={{backgroundColor:'primary.dark', minHeight: 683, mt:2,ml:2,mr:2,pt:.5, mb:1, borderRadius:3, boxShadow:10 }}>

            
            <Box sx={{backgroundColor: 'white', mt:1, mr:2, ml:2, pl:2, borderRadius:3}}>
            <h1>{params.id && 'Edit Disc'}</h1>
            </Box>
            
            <Box sx={{backgroundColor:'secondary.light', ml:2, mr:2,mt:2,mb:2, pt:2, pl:1.5, borderRadius:3}}>
            <form onSubmit={onSubmit}>

                <Box
                    component="form"
                    sx={{
                        '& > :not(style)': { m: 1, ml: 5, width: '25ch', },

                    }}
                    noValidate
                    autoComplete="off"
                >
                    {/* <Box sx={{ backgroundColor: 'white'}}> */}
                    <TextField value={editDisc.brand}
                        onChange={(evt) => dispatch({
                            type: 'UPDATE_EDIT_DISC',
                            payload: { brand: evt.target.value }
                        })} id="outlined-basic" label="Brand" variant="outlined" focused />

                    <TextField value={editDisc.name}
                        onChange={(evt) => dispatch({
                            type: 'UPDATE_EDIT_DISC',
                            payload: { name: evt.target.value }
                        })} id="outlined-basic" label="Name" variant="outlined" focused />

                    <TextField value={editDisc.flight_type}
                        onChange={(evt) => dispatch({
                            type: 'UPDATE_EDIT_DISC',
                            payload: { flight_type: evt.target.value }
                        })} id="outlined-basic" label="Type" variant="outlined" focused />

                    <TextField value={editDisc.speed}
                        onChange={(evt) => dispatch({
                            type: 'UPDATE_EDIT_DISC',
                            payload: { speed: evt.target.value }
                        })} id="outlined-basic" label="Speed" variant="outlined" focused />

                    <TextField value={editDisc.turn}
                        onChange={(evt) => dispatch({
                            type: 'UPDATE_EDIT_DISC',
                            payload: { turn: evt.target.value }
                        })} id="outlined-basic" label="Turn" variant="outlined" focused />

                    <TextField value={editDisc.glide}
                        onChange={(evt) => dispatch({
                            type: 'UPDATE_EDIT_DISC',
                            payload: { glide: evt.target.value }
                        })} id="outlined-basic" label="Glide" variant="outlined" focused />

                    <TextField value={editDisc.fade}
                        onChange={(evt) => dispatch({
                            type: 'UPDATE_EDIT_DISC',
                            payload: { fade: evt.target.value }
                        })} id="outlined-basic" label="Fade" variant="outlined" focused />

                    <Button onClick={onSubmit} variant='contained'>Submit</Button>
                    {/* </Box> */}
                    

                </Box>
            </form>
            </Box>
            </Box>
            </ThemeProvider>
            
        </>
    )
}

export default EditDisc;