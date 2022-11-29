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
    }, [roundHistory]);


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

    const viewMap = () => {
        history.push(`/user`);
    }

    const viewProfile = () => {
        history.push(`/profile`);
    } 


    return (
        <>
            <Stack direction={'row'}>
                
                <Button sx={{ margin: 2, ml:6, padding: 2, }} onClick={viewMap} variant='contained'>View Map</Button>
                <Button sx={{ margin: 2, ml:5, padding: 2,  }} onClick={viewProfile} variant='contained'>View Profile</Button>

            </Stack>

            {roundHistory.map(round => (
                <>
                    <Accordion sx={{backgroundColor: 'lightgrey', borderRadius: 3, mt:1, ml:1, mr:1}}>
                        <AccordionSummary
                            expandIcon={<ExpandMoreIcon />}
                            aria-controls="panel1a-content"
                            id="panel1a-header"
                        >
                            <Box sx={{backgroundColor: 'white', padding:2, borderRadius: 3}}>
                            <Typography>{round.course_name} {round.date}</Typography>
                            </Box>
                            
                        </AccordionSummary>
                        <AccordionDetails>
                            {/* <Typography> */}
                            <TableContainer component={Paper}>
                                <Table sx={{ minWidth: 450, width:500, padding:1}} aria-label="simple table">

                                    <TableHead>
                                        <TableRow key={round.id}>
                                            <TableCell sx={{fontSize:24 }} align="left">Hole#</TableCell>
                                            {scoreHistory.map(score => {

                                                if (round.id === score.round_id) {
                                                    // setTotal(total.push(score))
                                                    return (<>
                                                        <TableCell sx={{fontSize:24 }} align="left">{score.hole_num}</TableCell>
                                                    </>)
                                                }
                                            })}
                                            <Button sx={{ mt: 1.5, ml:-1, mr:3 }} onClick={() => deleteRound(round.id)} variant='outlined'>delete</Button>
                                        </TableRow>
                                    </TableHead>
                                    <TableBody>
                                        <TableRow
                                            // key={score.id}
                                            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                        >
                                            <TableCell sx={{fontSize:24 }} align="left">Par</TableCell>
                                            {scoreHistory.map(score => {

                                                if (round.id === score.round_id) {
                                                    // setTotal(total.push(score))
                                                    return (<>
                                                        <TableCell sx={{fontSize:24 }} align="left">{score.par}</TableCell>
                                                    </>)
                                                }
                                            })}


                                        </TableRow>
                                        <TableRow
                                            // key={score.id}
                                            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                        >
                                            <TableCell sx={{fontSize:24 }} align="left">Score</TableCell>
                                            {scoreHistory.map(score => {

                                                if (round.id === score.round_id) {
                                                    // setTotal(total.push(score))
                                                    return (<>
                                                        <TableCell sx={{fontSize:24 }} align="left">{score.score}</TableCell>
                                                    </>)
                                                }
                                            })}


                                        </TableRow>
                                        <TableRow
                                            // key={score.id}
                                            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                        >
                                            <TableCell sx={{fontSize:24 }} align="left">Total</TableCell>
                                            {scoreHistory.map(score => {

                                                if (round.id === score.round_id) {
                                                    let sum = parseInt(score.score);

                                                    total += sum;
                                                    return (<>
                                                        <TableCell sx={{fontSize:24 }} align="left">{total}</TableCell>
                                                    </>)
                                                }
                                                total = 0
                                            })}
                                                
                                            <Button sx={{ mt: 1, mr: 1, ml:2, mb: -5 }} onClick={() => editRound(round)} variant='outlined'>edit</Button>
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