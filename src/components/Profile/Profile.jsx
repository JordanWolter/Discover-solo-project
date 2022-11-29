import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link, useHistory } from 'react-router-dom';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import TextField from '@mui/material/TextField';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import StarIcon from '@mui/icons-material/Star';
import { ThemeProvider } from '@mui/system';
import { PrimaryMainTheme } from '../PrimaryMainTheme/PrimaryMainTheme';
// import SimpleModal from '../Modal/simple-modal.component'
// import AnimatedModal from "../Modal/animated-modal.component";
import Modal from '@mui/material/Modal';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Stack from '@mui/material/Stack';
import './Profile.css'

function Profile() {
    const dispatch = useDispatch();
    const history = useHistory();
    const user = useSelector(store => store.user);
    const bag = useSelector((store) => store.bag);
    const favorite = useSelector((store) => store.favorite);
    const [clicked, setClicked] = useState(true);
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    console.log('FAVORITEEEEEEE', favorite)

    useEffect(() => {
        dispatch({
            type: 'FETCH_USER_DISC',
            payload: user.id
        });

        dispatch({
            type: 'FETCH_FAVORITE_LIST',
            payload: user.id
        })
        //bag
    }, [])

    const [expanded, setExpanded] = React.useState(false);

    const handleChange = (panel) => (event, isExpanded) => {
        setExpanded(isExpanded ? panel : false);
    };

    const deleteDisc = (id) => {

        dispatch({
            type: 'DELETE_DISC',
            payload: id
        })
        dispatch({
            type: 'FETCH_USER_DISC',
            payload: user.id
        })
    }

    const editDisc = (disc) => {
        history.push(`/editDisc/${disc.id}`)
    }

    const roundHistory = () => {
        history.push('/history')
    }

    const deleteFavorite = (id) => {
        setClicked(!clicked)

        if (clicked === true) {
            dispatch({
                type: 'DELETE_FAVORITE',
                payload: {
                    course_id: id,
                }
            });
            // dispatch({
            //     type: 'FETCH_FAVORITE',
            //     payload: {
            //         course_id: id,
            //         course_name: name,
            //         user_id: userId
            //     }
            // });
        } else if (clicked === false) {


        }

    }

    const style = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 300,
        bgcolor: 'secondary.main',
        border: '2px solid #000',
        maxHeight: 650,
        overflow: 'scroll',
        boxShadow: 24,
        borderRadius: 3,
        p: 4,
    };

    const findDisc = () => {
        history.push('/disc');
    }

    return (
        <>
            <ThemeProvider theme={PrimaryMainTheme}>


                <Box sx={{ backgroundColor: 'primary.dark', minHeight: 656, padding: 1, mt: 2, margin: 2, borderRadius: 3 }}>


                    <Modal
                        open={open}
                        onClose={handleClose}
                        aria-labelledby="modal-modal-title"
                        aria-describedby="modal-modal-description"
                        overflow='scroll'


                    >
                        <Box sx={style}>
                            {bag.map(disc => (
                                <>
                                    <Card sx={{ maxWidth: 345, height: 520, mt: 3, backgroundColor: 'lightgrey', borderRadius: 3, boxShadow: 10 }}>
                                        <CardMedia
                                            component="img"
                                            // height="240"
                                            width="300"
                                            image={disc.flight_path}
                                            alt="disc flight path"
                                        // sx={{mb: 1, mr: 1,}}
                                        />
                                        <CardContent>
                                            <Typography gutterBottom variant="h5" component="div" sx={{}}>
                                                {disc.brand} {disc.name}
                                            </Typography>
                                            <Typography variant="body2" color="text.secondary">
                                                <TableContainer component={Paper}>
                                                    <Table sx={{ minWidth: 550 }} aria-label="simple table">
                                                        <TableHead>
                                                            <TableRow key={disc.dataId}>
                                                                <TableCell className='text' align="left">Type</TableCell>
                                                                <TableCell className='text' align="left">Speed</TableCell>
                                                                <TableCell className='text' align="left">Glide</TableCell>
                                                                <TableCell className='text' align="left">Fade</TableCell>
                                                                <TableCell className='text' align="left">Turn</TableCell>
                                                            </TableRow>
                                                        </TableHead>
                                                        <TableBody>
                                                            <TableRow
                                                                key={disc.dataId}
                                                                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                                            >
                                                                {/* <TableCell><img src= /></TableCell> */}
                                                                <TableCell className='text' align="left">{disc.flight_type}</TableCell>
                                                                <TableCell className='text' align="left">{disc.speed}</TableCell>
                                                                <TableCell className='text' align="left">{disc.glide}</TableCell>
                                                                <TableCell className='text' align="left">{disc.fade}</TableCell>
                                                                <TableCell className='text' align="left">{disc.turn}</TableCell>
                                                            </TableRow>
                                                        </TableBody>
                                                    </Table>
                                                </TableContainer>
                                            </Typography>
                                        </CardContent>
                                        <CardActions>

                                            <Button sx={{ ml: 1, mt: 'auto', mr: 14 }} onClick={() => deleteDisc(disc.id)} variant='contained'>delete</Button>

                                            <Button sx={{ ml: 'auto', mt: 'auto' }} onClick={() => editDisc(disc)} variant='contained'>edit</Button>

                                        </CardActions>
                                    </Card>
                                    <Box>

                                    </Box>

                                </>
                            ))}
                        </Box>
                    </Modal>

                    <Box sx={{ backgroundColor: 'white', borderRadius: 3, padding: .1, margin: 1 }}>
                        <h1 className='user'>{user.username}</h1>
                    </Box>
                    {/* <SimpleModal /> <br />
                <AnimatedModal /> */}
                    <Stack>
                        <Button onClick={roundHistory} variant='contained' sx={{ backgroundColor: 'secondary.light', color: 'black', mt: 1, ml: 2, mr: 2 }}> round history</Button>
                        <Button onClick={handleOpen} variant='contained' sx={{ backgroundColor: 'secondary.light', color: 'black', mt: 2, ml: 2, mr: 2 }}>Disc Bag</Button>
                        <Button onClick={findDisc} variant='contained' sx={{ backgroundColor: 'secondary.light', color: 'black', mt: 2, ml: 2, mr: 2 }}>Find New Discs</Button>
                    </Stack>

                    <Box sx={{ backgroundColor: 'primary.light', padding: 1, m: 1, mt: 3, pb: 2, borderRadius: 3 }}>
                        <Box sx={{ backgroundColor: 'white', borderRadius: 3, }}>
                            <Typography sx={{ m: 2, mt: 1, fontSize: 27 }}>FAVORITE COURSES</Typography>
                        </Box>

                        {favorite.map(course => (
                            <>
                                <Accordion sx={{ borderRadius: 3 }}>
                                    <AccordionSummary
                                        expandIcon={<ExpandMoreIcon />}
                                        aria-controls="panel1a-content"
                                        id="panel1a-header"
                                    >
                                        <StarIcon
                                            sx={{
                                                // color: clicked ? 'yellow' : 'black',
                                                // backgroundColor: clicked ? 'orange' : 'grey',
                                                color: 'yellow',
                                                backgroundColor: 'orange',
                                                mt: 1, mb: 1, mr: 1, boxShadow: 5,
                                                borderRadius: 2,
                                            }}
                                            fontSize='large'
                                            onClick={() => deleteFavorite(course.id)}
                                        >
                                        </StarIcon>
                                        <Typography sx={{ mt: 1, fontSize: 25 }}>{course.course_name}</Typography>
                                    </AccordionSummary>
                                    <AccordionDetails>
                                    <Button onClick={roundHistory} variant='contained' sx={{ backgroundColor: 'secondary.dark', color: 'white', mt: -2, ml: 9, mr: 2 }}>Course Page</Button>
                                    </AccordionDetails>
                                </Accordion>
                            </>

                        ))}
                        <Box></Box>
                    </Box>

                    <div>
                       


                    </div>

                </Box>

            </ThemeProvider>



        </>
    )
}
export default Profile;
