import React from 'react';
import { Link } from 'react-router-dom';
import LogOutButton from '../LogOutButton/LogOutButton';
// import './Nav.css';
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
    <div className="nav">
      <Weather />
      <Link to="/home">
        {/* possibly image logo */}
        <h2 className="nav-title">DISCover</h2>
      </Link>
      <div>
        {/* If no user is logged in, show these links */}
        {!user.id && (
          // If there's no user, show login/registration links
          <Link className="navLink" to="/login">
            Login / Register
          </Link>
        )}

        {/* If a user is logged in, show these links */}
        {user.id && (
          <>
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
          </>
        )}
      </div>
    </div>
  );
}

export default Nav;
