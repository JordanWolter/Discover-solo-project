import LogOutButton from '../LogOutButton/LogOutButton';
import { GoogleMap, useLoadScript, Marker, InfoWindow } from "@react-google-maps/api"
import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';

function Course (course) {

    // console.log('course', course)

    return(
        <>
            <div>
                <li>{course.course.name}
                {course.course.street_addr ? course.course.street_addr : ' No Address '}
                {course.course.city}
                {course.course.state}</li>
            </div>
        </>
    )
}

export default Course;