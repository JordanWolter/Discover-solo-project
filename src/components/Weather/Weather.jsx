import LogOutButton from '../LogOutButton/LogOutButton';
import { GoogleMap, useLoadScript, Marker, InfoWindow } from "@react-google-maps/api"
import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import { styled } from '@mui/material/styles';

function Weather() {
    const dispatch = useDispatch();
    const weather = useSelector((store) => store.weather);
    const coords = useSelector((store) => store.coords);

    if(!coords){
        return(
            <h1>Loading...</h1>
        )
    }
    useEffect(() => {
        dispatch({
            type: 'FETCH_WEATHER',
            payload: coords
        });
    }, [coords])

    return (
        <>
            <img src={weather.current && weather.current.condition.icon} />
            <Box>
            <Stack>
            <p>{weather.current && weather.current.temp_f}°</p>
            <p>Wind: {weather.current && weather.current.wind_mph} mph</p>
            </Stack>
            </Box>
           
            
        </>
    )
}

export default Weather;