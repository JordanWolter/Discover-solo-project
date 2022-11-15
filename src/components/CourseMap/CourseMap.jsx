import LogOutButton from '../LogOutButton/LogOutButton';
import React, { useEffect, useState } from 'react';
import { GoogleMap, useLoadScript, Marker, InfoWindow } from "@react-google-maps/api";
import { useSelector, useDispatch } from 'react-redux';
import CourseMarker from '../CourseMarker/CourseMarker'
import UserMarker from '../UserMarker/UserMarker';
import './CourseMap.css'

function CourseMap() {

    const coords = useSelector((store) => store.coords);

    const dispatch = useDispatch();

    const user = useSelector((store) => store.user);
    const discs = useSelector((store) => store.discs);
    const weather = useSelector((store) => store.weather);

    const { isLoaded } = useLoadScript({
        googleMapsApiKey: "AIzaSyCPVivR2fg0WCdypqe-fuaEoQXTTk38IwM"
    })

    useEffect(() => {

        if (!isLoaded || !coords) {
            return <div>Loading...</div>
        }

    }, []); //ref, map

    if (!isLoaded) {
        return <div>Loading...</div>
    }
    return (
        <>
            <GoogleMap zoom={11} center={{
                lat: parseFloat(coords.payload && coords.payload.lat),
                lng: parseFloat(coords.payload && coords.payload.lng),
            }}
                mapContainerClassName="map">
                <CourseMarker />
                <UserMarker />
            </GoogleMap>
        </>
    )
}

export default CourseMap;