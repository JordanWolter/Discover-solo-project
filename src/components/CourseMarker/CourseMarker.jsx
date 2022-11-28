import LogOutButton from '../LogOutButton/LogOutButton';
import { GoogleMap, useLoadScript, Marker, InfoWindow } from "@react-google-maps/api"
import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link, useHistory } from 'react-router-dom';


function CourseMarker() {
    const history = useHistory();
    const courses = useSelector((store) => store.courses);
    const coords = useSelector((store) => store.coords);
    const [selected, setSelected] = useState(null)

    const dispatch = useDispatch();

    if (!coords) {
        return (
            <h1>Loading...</h1>
        )
    }

    useEffect(() => {

        if (!coords) {
            return <h1>Loading...</h1>
        } else {
            findCourses();
        }

    }, [coords]);

    const findCourses = () => {

        dispatch({
            type: 'FETCH_COURSES',
            payload: coords
        });

    };

    const coursePage = (id) =>{

        // console.log('ID', id)

        dispatch({
            type: 'FETCH_COURSE_DETAILS',
            payload: id
        });

        history.push(`/coursePage/${id}`)
    }

    return (
        <>
            {courses && courses.map(course => (
                <Marker
                    key={course.id}
                    position={{
                        lat: parseFloat(course.latitude),
                        lng: parseFloat(course.longitude)
                    }}
                    icon={{
                        url: "/images/noun-disc-golf-basket-301023-3B6BF9.svg",
                        //   fillOpacity: 0.9,
                        scale: 1,
                        //   strokeColor: "gold",
                        strokeWeight: 5,
                    }}
                    onClick={() => {
                        setSelected(course);
                        console.log('WHAT IS THIS SHIT????????', selected)
                    }}
                />
                 
            

            ))};
               {selected ? <InfoWindow 
               position={{lat: parseFloat(selected.latitude), lng: parseFloat(selected.longitude)}} 
               onCloseClick={() => {setSelected(null)}}>
                    
                            <p onClick={() => coursePage(selected.course_id)}>{selected.name}</p>
                        
                    </InfoWindow> : null}

        </>
    );
};

export default CourseMarker;