import LogOutButton from '../LogOutButton/LogOutButton';
import { GoogleMap, useLoadScript, Marker, InfoWindow } from "@react-google-maps/api"
import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';


function CourseMarker() {
    const courses = useSelector((store) => store.courses);
    const coords = useSelector((store) => store.coords);

    const dispatch = useDispatch();

    if(!coords){
        return(
            <h1>Loading...</h1>
        )
    }

    useEffect(() => {

        if (!coords) {
            return <h1>Loading...</h1>
        } else {
            findCourses();
        }

    }, [coords]);

    const findCourses = () => {

        dispatch({
            type: 'FETCH_COURSES',
            payload: coords
        });

    };

    return (
        <>
            {courses && courses.map(course => (
                <Marker
                    key={course.id}
                    position={{
                        lat: parseFloat(course.latitude),
                        lng: parseFloat(course.longitude)
                    }}
                    icon={{
                        url:"/images/noun-disc-golf-basket-301023-3B6BF9.svg",
                    //   fillOpacity: 0.9,
                      scale: 1,
                    //   strokeColor: "gold",
                      strokeWeight: 5,
                    }}
                />
            ))};
        </>
    );
};

export default CourseMarker;