import LogOutButton from '../LogOutButton/LogOutButton';
import { GoogleMap, useLoadScript, Marker, InfoWindow } from "@react-google-maps/api"
import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';

function UserMarker() {
    const coords = useSelector((store) => store.coords);

    const dispatch = useDispatch();

    if(!coords){
        return(
            <h1>Loading...</h1>
        )
    }

    return (
        <>
            <Marker
                position={{
                    lat: parseFloat(coords.lat),
                    lng: parseFloat(coords.lng)
                }}
                icon={{
                    url: '/images/noun-frisbee-871431.svg',
                    scale: 1,
                    strokeWeight: 2,
                }}
            />
        </>
    );

}
    

export default UserMarker;