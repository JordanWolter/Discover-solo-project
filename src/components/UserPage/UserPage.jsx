import LogOutButton from '../LogOutButton/LogOutButton';
import { GoogleMap, useLoadScript, Marker, InfoWindow } from "@react-google-maps/api"
import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import CourseMap from '../CourseMap/CourseMap';


//after create account take user to map page

function UserPage() {
  const user = useSelector((store) => store.user);
  return (
    <div className="container">
      <CourseMap />

    </div>
  );
}

// this allows us to use <App /> in index.js
export default UserPage;
