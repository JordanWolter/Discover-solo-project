import React from 'react';
import { Link } from 'react-router-dom';
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


function Nav() {
  const dispatch = useDispatch()
  const user = useSelector((store) => store.user);


  return (

    <Grid2 container>
      <Grid2 xs='auto'>
        <Weather />
      </Grid2>

      <Grid2 xs={6}>
        <Link to="/home">
          <h2 className="nav-title">DISCover</h2>
        </Link>
      </Grid2>


      {/* If no user is logged in, show these links */}
      {!user.id && (
        // If there's no user, show login/registration links
        <Grid2 xs="auto">
          <Link className="navLink" to="/login">
            Login / Register
          </Link>
        </Grid2>

      )}

      {/* If a user is logged in, show these links */}
      {user.id && (
        <Grid2 xs="auto">
          <PopupState variant="popover" popupId="demo-popup-menu">
            {(popupState) => (
              <React.Fragment>
                <Button variant="contained" {...bindTrigger(popupState)}>
                  <MenuIcon />
                </Button>
                <Menu {...bindMenu(popupState)}>
                  <MenuItem onClick={popupState.close}>
                    Profile
                  </MenuItem>
                  <Link to="/user">
                    <MenuItem>Home</MenuItem>
                  </Link>
                  <MenuItem onClick={() => dispatch({ type: 'LOGOUT' })}>Logout</MenuItem>
                </Menu>
              </React.Fragment>
            )}
          </PopupState>
        </Grid2>
      )}
    </Grid2>
  )
}
export default Nav;
