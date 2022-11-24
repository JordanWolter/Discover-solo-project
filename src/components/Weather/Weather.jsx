import LogOutButton from '../LogOutButton/LogOutButton';
import { GoogleMap, useLoadScript, Marker, InfoWindow } from "@react-google-maps/api"
import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import { styled } from '@mui/material/styles';
import Grid2 from '@mui/material/Unstable_Grid2';
import AirIcon from '@mui/icons-material/Air';
import './Weather.css'

function Weather() {
    const dispatch = useDispatch();
    const weather = useSelector((store) => store.weather);
    const coords = useSelector((store) => store.coords);

    if (!coords) {
        return (
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
        <Grid2 container>
            <Stack>
                <img id='weatherImg' src={weather.current && weather.current.condition.icon} />
                <Box>
                    <Stack direction='row' spacing={.5}>
                        <AirIcon id='weatherIcon' />
                        <p id='speed'>{weather.current && weather.current.wind_mph}</p>
                    </Stack>
                </Box>
            </Stack>
            <Stack spacing={.01}>
                <p id='temp'>{weather.current && parseInt(weather.current.temp_f)}°</p>
                <p id='mph'>mph</p>
            </Stack>
        </Grid2>
    )
}

export default Weather;