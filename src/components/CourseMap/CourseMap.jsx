import LogOutButton from '../LogOutButton/LogOutButton';
import { GoogleMap, useLoadScript, Marker, InfoWindow } from "@react-google-maps/api"
import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import CourseMarker from '../CourseMarker/CourseMarker'
import './CourseMap.css'

function CourseMap() {

    const [coords, setCoords] = useState({});
    const [info, setInfo] = useState();
    const dispatch = useDispatch();
    const user = useSelector((store) => store.user);
   
    const discs = useSelector((store) => store.discs);
    const weather = useSelector((store) => store.weather);

    console.log('COURSES', courses);
    console.log('DISCS', discs);

    const { isLoaded } = useLoadScript({
        googleMapsApiKey: "AIzaSyCPVivR2fg0WCdypqe-fuaEoQXTTk38IwM"
    })

    useEffect(() => {
        navigator.geolocation.getCurrentPosition(success, error, options);

        if (!isLoaded) {
            return <div>Loading...</div>
        }

    }, []); //ref, map

    const options = {
        enableHighAccuracy: true,
        timeout: 5000,
        maximumAge: 0
    };

    function success(pos) {
        const crd = pos.coords;

        setCoords({
            lat: crd.latitude,
            long: crd.longitude
        })

        console.log('Your current position is:');
        console.log(`Latitude : ${crd.latitude}`);
        console.log(`Longitude: ${crd.longitude}`);
        console.log(`More or less ${crd.accuracy} meters.`);
    };

    function error(err) {
        console.warn(`ERROR(${err.code}): ${err.message}`);
    };

    if (!isLoaded) {
        return <div>Loading...</div>
    };

    if(!coords){
        return <h1>Loading...</h1>
    }

    return (
        <>
            <GoogleMap zoom={11} center={{ lat: coords.lat, lng: coords.long }} mapContainerClassName="map">
                <CourseMarker />
            </GoogleMap>
        </>
    )
}

export default CourseMap;