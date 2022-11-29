import React from 'react';
import LoginForm from '../LoginForm/LoginForm';
import { useHistory } from 'react-router-dom';
import { ThemeProvider } from '@mui/system';
import { PrimaryMainTheme } from '../PrimaryMainTheme/PrimaryMainTheme';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';

function LoginPage() {
  const history = useHistory();

  return (
    <div>
      <ThemeProvider theme={PrimaryMainTheme}>
        <Box sx={{ minHeight: 685 }}>

        <LoginForm />

        <center>
          <Button
            variant='contained'
            className="btn btn_asLink"
            onClick={() => {
              history.push('/registration');
            }}
          >
            Register
          </Button>
        </center>
        </Box>

      </ThemeProvider>

    </div>
  );
}

export default LoginPage;
