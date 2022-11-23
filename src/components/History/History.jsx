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
    const params = useParams()
    const dispatch = useDispatch()
    const userId = useSelector(store => store.user.id);
    const roundHistory = useSelector(store => store.roundHistory);
    const scoreHistory = useSelector(store => store.scoreHistory);

    // params({

    // })


    useEffect(() => {
        dispatch({
            type: 'FETCH_ROUND_HISTORY',
            payload: userId
        })
        dispatch({
            type: 'FETCH_SCORE_HISTORY',
            payload: userId
        })

        calcHandicap()

    }, [userId]);

    const calcHandicap = () => {
        for(let i = 0; i < 20; i++){
            console.log(i)
        }
    }

    const Item = styled(Paper)(({ theme }) => ({
        backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
        ...theme.typography.body2,
        padding: theme.spacing(1),
        textAlign: 'center',
        color: theme.palette.text.secondary,
    }));


    return (
        <>
        <Stack direction={'row'} spacing={4}>
        <Button sx={{margin: 2, padding: 2}} onClick={calcHandicap}>View Map</Button>
        <Button sx={{margin: 2, padding: 2}}>View Profile</Button>
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
                                           
                                            <TableCell align="left">Total Score</TableCell>
                                            <TableCell align="left">Best Score</TableCell>
                                            <TableCell align="left">Worst Score</TableCell>
                                            <Button sx={{ mt: 1}} /*onClick={() => addToBag(disc)}*/>Delete</Button>
                                        </TableRow>
                                    </TableHead>
                                    <TableBody>
                                        <TableRow
                                            key={round.id}
                                            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                        >
                                            <TableCell align="left">Score Sum</TableCell>
                                            <TableCell align="left">Score Min</TableCell>
                                            <TableCell align="left">Score Max</TableCell>
                                            <Button sx={{ mt: 1}} /*onClick={() => addToBag(disc)}*/>Edit</Button>
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