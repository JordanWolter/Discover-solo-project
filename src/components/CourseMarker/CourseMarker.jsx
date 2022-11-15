import LogOutButton from '../LogOutButton/LogOutButton';
import { GoogleMap, useLoadScript, Marker, InfoWindow } from "@react-google-maps/api"
import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';

function CourseMarker() {
    const courses = useSelector((store) => store.courses);
    return (
        <>
            {courses && courses.map(course => (
                <Marker
                    key={course.id} position={{ lat: parseFloat(course.latitude), lng: parseFloat(course.longitude) }}
                />
            ))}
        </>
    )
}

export default CourseMarker;