import LogOutButton from '../LogOutButton/LogOutButton';
import { GoogleMap, useLoadScript, Marker, InfoWindow } from "@react-google-maps/api"
import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import CourseMap from '../CourseMap/CourseMap';
import CourseList from '../CourseList/CourseList';


//after create account take user to map page

function UserPage() {
  const user = useSelector((store) => store.user);
  const coords = useSelector((store) => store.coords);

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
