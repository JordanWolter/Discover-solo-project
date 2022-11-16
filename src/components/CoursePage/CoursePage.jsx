import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link, useHistory } from 'react-router-dom';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import './coursePage.css'

function CoursePage() {
    const dispatch = useDispatch();
    const courses = useSelector((store) => store.courses);
    const id = useSelector((store) => store.courseDetails);
    const images = useSelector((store) => store.courseImages);
    const holes = useSelector((store) => store.holes);

    console.log('IMAGES', images)

    useEffect(() => {

        dispatch({
            type: 'FETCH_COURSE_IMAGES',
            payload: id
        });

        dispatch({
            type: 'FETCH_HOLES',
            payload: id
        });

    }, []);

    const startRound = () => {

    }




    return (
        <>
            {courses.map(course => {
                console.log('course', course)
                if (course.course_id === id) {
                    return (
                        <>
                            <img className='coursePhoto' src={images.course_photo_url_medium} />
                            <h1>{course.name}</h1>
                            <h2>{course.street_addr === "" ? 'No address availible' : course.street_addr}</h2>
                            <h2>{course.city}, {course.state}</h2>
                            <h2>{course.paytoplay === "0" ? 'Free to play' : 'Pay to play'}</h2>
                            <Accordion>
                                <AccordionSummary
                                    expandIcon={<ExpandMoreIcon />}
                                    aria-controls="panel1a-content"
                                    id="panel1a-header"
                                >
                                    <Typography>{course.holes} Holes</Typography>
                                </AccordionSummary>
                                <AccordionDetails>
                                    <Typography>
                                        {holes.map(hole => (
                                            <>
                                                <p>Hole: {hole.hole_num}</p>
                                                <p>Length: {hole.tee_1_len === '0' ? 'Length unavailible' : hole.tee_1_len}</p>
                                            </>
                                        ))}
                                    </Typography>
                                </AccordionDetails>
                            </Accordion>



                            <Button onClick={startRound}>Start Round</Button>
                        </>

                    )
                }
            })}
        </>
    )
}

export default CoursePage;