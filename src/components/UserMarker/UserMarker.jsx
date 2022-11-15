import LogOutButton from '../LogOutButton/LogOutButton';
import { GoogleMap, useLoadScript, Marker, InfoWindow } from "@react-google-maps/api"
import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';

function UserMarker() {
    const coords = useSelector((store) => store.coords);

    const dispatch = useDispatch();

    useEffect(() => {

        navigator.geolocation.getCurrentPosition(success, error, options);

    }, []);

    const options = {

        enableHighAccuracy: true,
        timeout: 5000,
        maximumAge: 0

    };

    function success(pos) {

        const crd = pos.coords;

        console.log('CRD', crd.latitude)

        dispatch({
            type: 'FETCH_COORDS',
            payload: {
                lat: crd.latitude,
                lng: crd.longitude
            }
        });

        console.log('Your current position is:');
        console.log(`Latitude : ${crd.latitude}`);
        console.log(`Longitude: ${crd.longitude}`);
        console.log(`More or less ${crd.accuracy} meters.`);
    };

    function error(err) {

        console.warn(`ERROR(${err.code}): ${err.message}`);

    };

    return (
        <>
            <Marker
                position={{
                    lat: parseFloat(coords.payload && coords.payload.lat),
                    lng: parseFloat(coords.payload && coords.payload.lng)
                }}
                icon={{
                    url: '/images/noun-frisbee-871431.svg',
                    scale: 1,
                    strokeWeight: 2,
                }}
            />
        </>
    );
};

export default UserMarker;