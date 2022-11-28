import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link, useHistory, useParams } from 'react-router-dom';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import { styled } from '@mui/material/styles';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';

function History() {
    const params = useParams();
    const dispatch = useDispatch();
    const history = useHistory();
    let [total, setTotal] = useState(0);
    const userId = useSelector(store => store.user.id);
    const roundHistory = useSelector(store => store.roundHistory);
    const scoreHistory = useSelector(store => store.scoreHistory);


    useEffect(() => {
        dispatch({
            type: 'FETCH_ROUND_HISTORY',
            payload: userId
        })
        dispatch({
            type: 'FETCH_SCORE_HISTORY',
            payload: userId
        })

        console.log('SCOREHISTORY!!!!!!!', scoreHistory)

        // roundHistory
    }, []);


    const points = () => {

    }


    const Item = styled(Paper)(({ theme }) => ({
        backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
        ...theme.typography.body2,
        padding: theme.spacing(1),
        textAlign: 'center',
        color: theme.palette.text.secondary,
    }));

    const deleteRound = (id) => {

        dispatch({
            type: 'DELETE_ROUND',
            payload: id
        })
        // dispatch({
        //     type: 'FETCH_ROUND_HISTORY',
        //     payload: userId
        // })
    }

    const editRound = (round) => {
        history.push(`/editRound/${round.id}`)
    }


    return (
        <>
            <Stack direction={'row'} spacing={4}>
                <Button sx={{ margin: 2, padding: 2 }}>View Map</Button>
                <Button sx={{ margin: 2, padding: 2 }}>View Profile</Button>
            </Stack>

            {roundHistory.map(round => (
                <>
                    <Accordion>
                        <AccordionSummary
                            expandIcon={<ExpandMoreIcon />}
                            aria-controls="panel1a-content"
                            id="panel1a-header"
                        >

                            <Typography>{round.course_name} {round.date}</Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            {/* <Typography> */}
                            <TableContainer component={Paper}>
                                <Table sx={{ minWidth: 450 }} aria-label="simple table">

                                    <TableHead>
                                        <TableRow key={round.id}>
                                            <TableCell align="left">Hole#</TableCell>
                                            {scoreHistory.map(score => {

                                                if (round.id === score.round_id) {
                                                    // setTotal(total.push(score))
                                                    return (<>
                                                        <TableCell align="left">{score.hole_num}</TableCell>
                                                    </>)}})}
                                            <Button sx={{ mt: 1 }} onClick={() => deleteRound(round.id)}>delete</Button>
                                        </TableRow>
                                    </TableHead>
                                    <TableBody>
                                        <TableRow
                                            // key={score.id}
                                            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                        >
                                            <TableCell align="left">Par</TableCell>
                                            {scoreHistory.map(score => {

                                                if (round.id === score.round_id) {
                                                    // setTotal(total.push(score))
                                                    return (<>
                                                        <TableCell align="left">{score.par}</TableCell>
                                                    </>)}})}

                                            
                                        </TableRow>
                                        <TableRow
                                            // key={score.id}
                                            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                        >
                                            <TableCell align="left">Score</TableCell>
                                            {scoreHistory.map(score => {

                                                if (round.id === score.round_id) {
                                                    // setTotal(total.push(score))
                                                    return (<>
                                                        <TableCell align="left">{score.score}</TableCell>
                                                    </>)}})}

                                           
                                        </TableRow>
                                        <TableRow
                                            // key={score.id}
                                            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                        >
                                            <TableCell align="left">Total</TableCell>
                                            {scoreHistory.map(score => {

                                                if (round.id === score.round_id) {
                                                    let sum = parseInt(score.score);
                                                    
                                                    total += sum;
                                                    return (<>
                                                        <TableCell align="left">{total}</TableCell>
                                                    </>)}})}

                                            <Button sx={{ mt: 1 }} onClick={() => editRound(round)}>edit</Button>
                                        </TableRow>
                                    </TableBody>
                                </Table>
                            </TableContainer>
                            {/* </Typography> */}
                        </AccordionDetails>
                    </Accordion>
                </>
            ))}
        </>
    )
}

export default History