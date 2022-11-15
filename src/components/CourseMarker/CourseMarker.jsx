import LogOutButton from '../LogOutButton/LogOutButton';
import { GoogleMap, useLoadScript, Marker, InfoWindow } from "@react-google-maps/api"
import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';

function CourseMarker() {
    const courses = useSelector((store) => store.courses);
    const coords = useSelector((store) => store.coords);

    const dispatch = useDispatch();
    console.log('COURSES', courses);

    useEffect(() => {

        if (!coords) {
            return <h1>Loading...</h1>
        } else {
            findCourses();
        }

    }, []);

    const findCourses = () => {

        console.log('coords', coords);

        dispatch({
            type: 'FETCH_COURSES',
            payload: coords
        });

    }

    console.log('coords', coords);
    console.log('courses', courses)

    return (
        <>
            {courses && courses.map(course => (
                <Marker
                    key={course.id} position={{ lat: parseFloat(course.latitude), lng: parseFloat(course.longitude) }}
                />
            ))};
        </>
    );
};

export default CourseMarker;