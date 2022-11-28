import React from 'react';
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


function Nav() {
  const dispatch = useDispatch();
  const history = useHistory();
  const user = useSelector((store) => store.user);

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
            <PopupState variant="popover" popupId="demo-popup-menu" sx={{pr: 0,}}>
              {(popupState) => (
                <React.Fragment>
                  <Button sx={{ ml: 1, mt: 2.5, mr: 1,
                    backgroundColor: 'primary.light'}} 
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
