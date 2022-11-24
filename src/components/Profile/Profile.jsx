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

function Profile() {
    const dispatch = useDispatch();
    const history = useHistory();
    const user = useSelector(store => store.user)
    const bag = useSelector((store) => store.bag)

    useEffect(() => {
        dispatch({
            type: 'FETCH_USER_DISC',
            payload: user.id
        })
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

    return (
        <>
            <h1>{user.username}</h1>
            <h2>favorite courses</h2>
            <h3>round history</h3>
            <div>
                {bag.map(disc => (
                    <>
                        <Accordion>
                            <AccordionSummary
                                expandIcon={<ExpandMoreIcon />}
                                aria-controls="panel1a-content"
                                id="panel1a-header"
                            >

                                <Typography>{disc.brand} {disc.name}</Typography>
                            </AccordionSummary>
                            <AccordionDetails>
                                {/* <Typography> */}
                                <TableContainer component={Paper}>
                                    <Table sx={{ minWidth: 550 }} aria-label="simple table">
                                        <TableHead>
                                            <TableRow key={disc.dataId}>
                                                <Button sx={{ ml: 5, mt: 2 }} onClick={() => deleteDisc(disc.id)}>delete</Button>
                                                <Button sx={{ ml: 5, mt: 2 }} onClick={() => editDisc(disc)}>edit</Button>
                                                <TableCell align="left">Type</TableCell>
                                                <TableCell align="left">Speed</TableCell>
                                                <TableCell align="left">Glide</TableCell>
                                                <TableCell align="left">Fade</TableCell>
                                                <TableCell align="left">Turn</TableCell>
                                            </TableRow>
                                        </TableHead>
                                        <TableBody>
                                            <TableRow
                                                key={disc.dataId}
                                                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                            >
                                                <TableCell><img src={disc.flight_path} /></TableCell>
                                                <TableCell align="left">{disc.flight_type}</TableCell>
                                                <TableCell align="left">{disc.speed}</TableCell>
                                                <TableCell align="left">{disc.glide}</TableCell>
                                                <TableCell align="left">{disc.fade}</TableCell>
                                                <TableCell align="left">{disc.turn}</TableCell>
                                            </TableRow>
                                        </TableBody>
                                    </Table>
                                </TableContainer>
                                {/* </Typography> */}
                            </AccordionDetails>
                        </Accordion>

                    </>

                ))}
            </div>

        </>
    )
}
export default Profile;
