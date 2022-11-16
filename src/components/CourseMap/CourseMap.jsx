import LogOutButton from '../LogOutButton/LogOutButton';
import React, { useEffect, useState } from 'react';
import { GoogleMap, useLoadScript, Marker, InfoWindow } from "@react-google-maps/api";
import { useSelector, useDispatch } from 'react-redux';
import CourseMarker from '../CourseMarker/CourseMarker'
import UserMarker from '../UserMarker/UserMarker';
import './CourseMap.css'

function CourseMap() {

    const coords = useSelector((store) => store.coords);

    // console.log('>>>>>>>>>>>>>>>>',coords.lat, coords.lng)
    

    // const user = useSelector((store) => store.user);
    // const discs = useSelector((store) => store.discs);
    // const weather = useSelector((store) => store.weather);

    const { isLoaded } = useLoadScript({
        googleMapsApiKey: "AIzaSyCPVivR2fg0WCdypqe-fuaEoQXTTk38IwM"
    })

    if (!isLoaded) {
        return <div>Loading...</div>
    }

    // useEffect(() => {


    // }, [coords]); //ref, map
    return (
        <>
        {coords&& <GoogleMap zoom={11} center={{
                lat: parseFloat(coords.lat),
                lng: parseFloat(coords.lng),
            }}
                mapContainerClassName="map">
                <CourseMarker />
                <UserMarker />
            </GoogleMap>}
            
        </>
    )
    
}

export default CourseMap;