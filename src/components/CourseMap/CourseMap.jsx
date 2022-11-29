import LogOutButton from '../LogOutButton/LogOutButton';
import React, { useEffect, useState } from 'react';
import { GoogleMap, useLoadScript, Marker, InfoWindow } from "@react-google-maps/api";
import { useSelector, useDispatch } from 'react-redux';
import CourseMarker from '../CourseMarker/CourseMarker'
import UserMarker from '../UserMarker/UserMarker';
import './CourseMap.css'

function CourseMap() {

    const coords = useSelector((store) => store.coords);
   

    const { isLoaded } = useLoadScript({
        googleMapsApiKey: "AIzaSyCPVivR2fg0WCdypqe-fuaEoQXTTk38IwM"
    })

    if (!isLoaded) {
        return <div>Loading...</div>
    }

    const options = {
        disableDefaultUI: true
    }
    return (
        <>
            {coords && <GoogleMap zoom={11} center={{
                lat: parseFloat(coords.lat),
                lng: parseFloat(coords.lng),
            }}
                mapContainerClassName="map"
                options={options}>
                <CourseMarker />
                <UserMarker />
            </GoogleMap>}

        </>
    )

}

export default CourseMap;