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
import StarIcon from '@mui/icons-material/Star';
import './coursePage.css'

function CoursePage() {
    const dispatch = useDispatch();
    const history = useHistory();
    let [courseName, setCourseName] = useState('');
    const [value, setValue] = useState(2);
    const courses = useSelector((store) => store.courses);
    const id = useSelector((store) => store.courseDetails);
    const images = useSelector((store) => store.courseImages);
    const holes = useSelector((store) => store.holes);
    const userId = useSelector((store) => store.user.id);

    const [clicked, setClicked] = useState(true);

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

        const date = monthString + '-' + daySting + '-' + yearString
        // const time = hourString + ':' + minuteString + ':' + secondString
        const time = timeUni

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

    const mapPage = () => {
        history.push('/user')
    }

    const favorite = (name) => {
        setClicked(!clicked)
    
        if(clicked === true){
            dispatch({
                type: 'FETCH_FAVORITE',
                payload: {
                    course_id: id,
                    course_name: name,
                    user_id: userId
                }
            });
        } else if(clicked === false){
            dispatch({
                type: 'DELETE_FAVORITE',
                payload: {
                    course_id: id,
                    course_name: name,
                    user_id: userId
                }
            });

        }
        
    }

    if(!courses){
        return(<h1>Loading..</h1>)
    }

    return (
        <>
            <ThemeProvider theme={PrimaryMainTheme}>
                {courses.map(course => {
                    // console.log('course', course)
                    if (course.course_id === id) {
                        return (
                            <>
                                <Box sx={{ boxShadow: 20, borderRadius: 2, border:'2px solid black', height: 350, width: 350, mt: 2, ml: .75, padding: 1.5, backgroundColor: 'primary.dark' }}>
                                    <img className='coursePhoto' src={images.course_photo_url_medium} />
                                </Box>

                                <Button onClick={mapPage} variant='contained' sx={{
                                    ml: 3, mt: -4.5, mb: 1, boxShadow: 20,
                                    borderRadius: 2,
                                }}>Back to Map</Button>
                                <StarIcon 
                                    sx={{
                                        color: clicked ? 'black' : 'yellow',
                                        backgroundColor: clicked ? 'grey' : 'orange',
                                        ml: 3, mt: 2, mb: 1, boxShadow: 20,
                                        borderRadius: 2,
                                    }}  
                                    fontSize = 'large'
                                    onClick={() => favorite(course.name)}
                                >
                                </StarIcon>
                                <Button onClick={startRound} variant='contained' sx={{
                                    ml: 3, mt: -4.5, mr: 'auto', mb: 1, boxShadow: 20,
                                    borderRadius: 2,
                                }}>Start Round</Button>

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
                                        <h2 id='title'>{course.name}</h2>
                                    </Box>

                                    <h2 className='info'>{course.street_addr === "" ? 'No address availible' : course.street_addr + ' ' + course.zipcode}</h2>
                                    <h2 className='info'>{course.city}, {course.state}</h2>
                                    <h2 className='info'>{course.paytoplay === "0" ? 'Free to play' : 'Pay to play'}</h2>
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