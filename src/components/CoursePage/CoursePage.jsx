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
import { ThemeProvider } from '@mui/system';
import { PrimaryMainTheme } from '../PrimaryMainTheme/PrimaryMainTheme';
import './coursePage.css'

function CoursePage() {
    const dispatch = useDispatch();
    const history = useHistory();
    let [courseName, setCourseName] = useState('')
    const courses = useSelector((store) => store.courses);
    const id = useSelector((store) => store.courseDetails);
    const images = useSelector((store) => store.courseImages);
    const holes = useSelector((store) => store.holes);
    const userId = useSelector((store) => store.user.id)

    console.log('IMAGES', courses)

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

        courses.map(course => {
            if (course.course_id === id) {

                setCourseName(courseName = course.name);

            }
        })


        const month = new Date().getMonth() + 1
        const day = new Date().getDate()
        const year = new Date().getFullYear()
        const hour = new Date().getHours()
        const minute = new Date().getMinutes()
        const second = new Date().getSeconds()
        const timeUni = new Date().getTime()

        const yearString = year.toString()
        const monthString = month.toString()
        const daySting = day.toString()
        const hourString = hour.toString()
        const minuteString = minute.toString()
        const secondString = second.toString()
        // const uniTime = 

        // second < 10 && '0' + secondString

        console.log('yearString', yearString)
        console.log('monthString', monthString)
        console.log('dayString', daySting)
        console.log('hourString', hourString)
        console.log('minuteString', minuteString)
        console.log('secondString', secondString)



        const date = monthString + '-' + daySting + '-' + yearString
        // const time = hourString + ':' + minuteString + ':' + secondString
        const time = timeUni

        console.log('DATE', date, 'TIME', time)

        dispatch({
            type: 'FETCH_GAME_ID',
            payload: {
                user_id: userId,
                course_id: id,
                course_name: courseName,
                date: date,
                time: time
            }
        });

        history.push(`/round/${id}`);

    }


    holes.shift()

    return (
        <>
            <ThemeProvider theme={PrimaryMainTheme}>
                {courses.map(course => {
                    // console.log('course', course)
                    if (course.course_id === id) {
                        return (
                            <>
                                {console.log(course)}
                                <Box sx={{ boxShadow: 20, borderRadius: 2, height: 350, width: 350, mt: 2, ml: 1, padding: 1.5, backgroundColor: 'primary.dark' }}>
                                    <img className='coursePhoto' src={images.course_photo_url_medium} />
                                </Box>

                                <Button onClick={startRound}>Start Round</Button>
                                <Box sx={{
                                    boxShadow: 20,
                                    borderRadius: 2,
                                    height: 250,
                                    width: 357,
                                    mt: 1, ml: 1, mb: 2,
                                    padding: 1,
                                    color: 'white',
                                    backgroundColor: 'primary.dark'
                                }}>
                                    <Box sx={{
                                    boxShadow: 20,
                                    borderRadius: 2,
                                    height: 35,
                                    width: 340,
                                    // mt: 1, ml: 1, mb: 2,
                                    padding: 1,
                                    paddingTop: -2,
                                    color: 'black',
                                    backgroundColor: 'white'
                                }}>
                                        <h1 id='title'>{course.name}</h1>
                                    </Box>

                                    <h2>{course.street_addr === "" ? 'No address availible' : course.street_addr + ' ' + course.zipcode}</h2>
                                    <h2>{course.city}, {course.state}</h2>
                                    <h2>{course.paytoplay === "0" ? 'Free to play' : 'Pay to play'}</h2>
                                </Box>

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
                                                    <p>Par: {hole.tee_1_par}, Length: {hole.tee_1_len === '0' ? 'Length unavailible' : hole.tee_1_len + 'ft'}</p>
                                                </>
                                            ))}
                                        </Typography>
                                    </AccordionDetails>
                                </Accordion>

                            </>
                        )
                    }
                })}
            </ThemeProvider>

        </>
    )
}

export default CoursePage;