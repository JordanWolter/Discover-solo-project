import LogOutButton from '../LogOutButton/LogOutButton';
import { GoogleMap, useLoadScript, Marker, InfoWindow } from "@react-google-maps/api"
import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link, useHistory } from 'react-router-dom';
import Course from '../Course/Course';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import SwipeableDrawer from '@mui/material/SwipeableDrawer';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';


import CoursePage from '../CoursePage/CoursePage';


function CourseList() {
    const history = useHistory();
    const dispatch = useDispatch();
    const courses = useSelector((store) => store.courses);
    // console.log('COURSES', courses);

    const [state, setState] = React.useState({
        top: false,
        left: false,
        bottom: false,
        right: false,
    });

    const toggleDrawer = (anchor, open) => (event) => {
        if (
            event &&
            event.type === 'keydown' &&
            (event.key === 'Tab' || event.key === 'Shift')
        ) {
            return;
        }

        setState({ ...state, [anchor]: open });
    };

    const coursePage = (id) => {

        // console.log('ID', id)

        dispatch({
            type: 'FETCH_COURSE_DETAILS',
            payload: id
        });

        history.push(`/coursePage/${id}`)
    }

    const list = (anchor) => (
        <Box
            sx={{ ml: 10, width: anchor === 'top' || anchor === 'Course List' ? 'auto' : 250 }}
            role="presentation"
            onClick={toggleDrawer(anchor, false)}
            onKeyDown={toggleDrawer(anchor, false)}
        >
            <List>
                {/* <Divider> */}
                {courses.map((course) => (
                    <>
                        <ListItem onClick={() => coursePage(course.course_id)} sx={{ ml: -8 }} key={course.course_id} disablePadding >
                            <ListItemButton variant="outlined">
                                <ListItemIcon >
                                    <svg width="20pt" height="20pt" version="1.1" viewBox="0 0 1200 1200" xmlns="http://www.w3.org/2000/svg">
                                        <g fill="#00449e" fillRule="evenodd">
                                            <path d="m40.164 934.28 129.41-129.41c9.1992-9.1992 9.1992-24.07 0-33.27-9.2031-9.2031-24.07-9.2031-33.273 0l-129.41 129.41c-9.1992 9.1992-9.1992 24.07 0 33.27 4.5859 4.5898 10.613 6.8945 16.637 6.8945s12.047-2.3047 16.633-6.8945" />
                                            <path d="m395.13 1030.4-129.41 129.41c-9.1992 9.1992-9.1992 24.07 0 33.27 4.5859 4.5898 10.609 6.8945 16.633 6.8945 6.0234 0 12.047-2.3047 16.637-6.8945l129.41-129.41c9.2031-9.2031 9.2031-24.07 0-33.273-9.1992-9.1992-24.07-9.1992-33.27 0" />
                                            <path d="m263.7 936.3c-9.2031-9.1992-24.07-9.1992-33.273 0l-200 200c-9.1992 9.2031-9.1992 24.07 0 33.273 4.5898 4.5859 10.613 6.8906 16.637 6.8906 6.0234 0 12.047-2.3047 16.637-6.8906l200-200c9.1992-9.2031 9.1992-24.07 0-33.273" />
                                            <path d="m1088.4 627.32c-4.5859 4.6133-10.609 6.918-16.633 6.918-6.0234 0-12.023-2.3047-16.637-6.918-9.1758-9.1758-9.1758-24.07 0-33.246l141.6-141.6c-11.719-111.2-59.883-219.27-144.92-304.3-82.707-82.684-189.2-133.04-304.19-145.04l-141.72 141.72c-4.5898 4.5859-10.613 6.8945-16.637 6.8945-6 0-12.023-2.3086-16.633-6.8945-9.1797-9.1992-9.1797-24.094 0-33.27l110.85-110.85c-131.27 2.7031-254.21 54.562-347.11 147.43-197.22 197.25-197.22 518.19 0 715.44 95.414 95.387 222.45 147.95 357.72 147.95 135.27 0 262.3-52.566 357.72-147.95 95.906-95.93 144.8-221.11 147.41-347.08zm-171.34 98.141c-59.977 60-140.28 91.648-221.65 91.648-45.645 0-91.621-9.9531-134.56-30.469-11.719-5.5781-16.684-19.625-11.082-31.367 5.5977-11.715 19.668-16.68 31.387-11.082 101.48 48.496 223.11 27.602 302.64-52 50.211-50.211 77.883-116.96 77.883-188 0-71.012-27.672-137.79-77.883-188s-116.99-77.883-188-77.883c-71.035 0-137.79 27.672-188.02 77.883-79.578 79.578-100.45 201.25-51.93 302.73 5.5977 11.719 0.63281 25.766-11.082 31.387-11.719 5.5312-25.766 0.63672-31.391-11.105-57.082-119.43-32.539-262.63 61.133-356.28 59.105-59.105 137.69-91.672 221.29-91.672 83.574 0 162.16 32.566 221.27 91.672s91.672 137.67 91.672 221.27c0 83.602-32.566 162.19-91.672 221.27z" />
                                        </g>
                                    </svg>
                                </ListItemIcon>
                                <ListItemText primary={course.name} secondary={course.address} />
                            </ListItemButton>
                        </ListItem>
                        <Divider />
                    </>
                ))}
                {/* </Divider> */}
            </List>
        </Box>
    );

    return (
        <>
            <div>
                {['Course List'].map((anchor) => (
                    <React.Fragment key={anchor}>
                        <Button sx={{ paddingLeft: 19 }} onClick={toggleDrawer(anchor, true)}>{anchor}</Button>
                        <SwipeableDrawer
                            anchor={'bottom'}
                            open={state[anchor]}
                            onClose={toggleDrawer(anchor, false)}
                            onOpen={toggleDrawer(anchor, true)}
                            sx={{}}
                        >
                            {list(anchor)}
                        </SwipeableDrawer>
                    </React.Fragment>
                ))}
            </div>
        </>
    )
}

export default CourseList;