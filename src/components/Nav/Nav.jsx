import React, { useEffect, useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import LogOutButton from '../LogOutButton/LogOutButton';
// import './Nav.css';
import Grid2 from '@mui/material/Unstable_Grid2';
import { useSelector, useDispatch } from 'react-redux';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import PopupState, { bindTrigger, bindMenu } from 'material-ui-popup-state';
import MenuIcon from '@mui/icons-material/Menu';
import Weather from '../Weather/Weather';
import { PrimaryMainTheme } from '../PrimaryMainTheme/PrimaryMainTheme';
import { ThemeProvider, Box } from '@mui/system';
// import logo from '../public/images/noun-frisbee-285749-12B0FB (1).svg'
// import { ReactComponent as Avatar1 } from './public/images/logo.svg';


function Nav() {
  const dispatch = useDispatch();
  const history = useHistory();
  const user = useSelector((store) => store.user);

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

  const profilePage = () => {
    history.push('/profile');
  }

  const homePage = () => {
    history.push('/user');
  }

  const bagPage = () => {
    history.push('/disc');
  }

  const historyPage = () => {
    history.push('/history');
  }


  return (
    <ThemeProvider theme={PrimaryMainTheme}>
      
      <Grid2 sx={{ backgroundColor: 'primary.main' }} container>
        <Grid2 xs='auto'>

          <Weather />

        </Grid2>

        <Grid2 xs={6}>
          <Box sx={{mt:2}}>
          <Link to="/home">
            <img className='logo' src='/images/DISCover-cropped.svg'/>
          </Link>
          </Box>
          
        </Grid2>


        {/* If no user is logged in, show these links
        {!user.id && (
          // If there's no user, show login/registration links
          // <Grid2 xs="auto">
          //   <Link className="navLink" to="/login">
          //     Login / Register
          //   </Link>
          // </Grid2>

        )} */}

        {/* If a user is logged in, show these links */}
        {user.id && (
          <Grid2 xs="auto">
            <PopupState variant="popover" popupId="demo-popup-menu" sx={{ pr: 0, }}>
              {(popupState) => (
                <React.Fragment>
                  <Button sx={{
                    ml: 1, mt: 2.5, mr: 1,
                    backgroundColor: 'primary.light'
                  }}
                    variant="contained" {...bindTrigger(popupState)}>
                    <MenuIcon />
                  </Button>
                  <Menu {...bindMenu(popupState)}>

                    <MenuItem onClick={profilePage}>
                      Profile
                    </MenuItem>

                    <MenuItem onClick={homePage}>
                      Home
                    </MenuItem>

                    <MenuItem onClick={bagPage}>
                      Disc
                    </MenuItem>

                    <MenuItem onClick={historyPage}>
                      Round
                    </MenuItem>

                    <MenuItem onClick={() => dispatch({ type: 'LOGOUT' })}>Logout</MenuItem>
                  </Menu>
                </React.Fragment>
              )}
            </PopupState>
          </Grid2>
        )}
      </Grid2>
      

    </ThemeProvider>

  )
}
export default Nav;
