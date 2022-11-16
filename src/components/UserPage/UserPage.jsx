import LogOutButton from '../LogOutButton/LogOutButton';
import { GoogleMap, useLoadScript, Marker, InfoWindow } from "@react-google-maps/api"
import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import CourseMap from '../CourseMap/CourseMap';
import CourseList from '../CourseList/CourseList';


//after create account take user to map page

function UserPage() {
  const dispatch = useDispatch();
  const user = useSelector((store) => store.user);
  const coords = useSelector((store) => store.coords);
  const options = {

    enableHighAccuracy: true,
    timeout: 10000,
    maximumAge: 0
  
  };

  useEffect(() => {

    navigator.geolocation.getCurrentPosition(success, error, options);

}, []);

function success(pos) {

  const crd = pos.coords;

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

  if(!coords){
    return (
      <h1>Loading...</h1>
    )
  };

  return (
    <div>
      <CourseMap />
      <CourseList />
    </div>
  );
};

// this allows us to use <App /> in index.js
export default UserPage;
