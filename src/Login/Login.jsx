import React from 'react';
import Paper from '@material-ui/core/Paper';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { useHistory } from 'react-router-dom';
import './Login.scss';
function Login() {
    const history = useHistory();
    const onLoginClick = () => {
        history.push('/dashboard');
    };
    return (
        <div className="Login">
            <Paper className="Login__Container">
                <h3>Login to {process.env.REACT_APP_WEBSITE_NAME}</h3>
                <TextField id="outlined-basic" label="User Name" variant="outlined" className="Login__UserName"/>
                <TextField
                id="filled-password-input"
                label="Password"
                type="password"
                autoComplete="current-password"
                variant="outlined"
                className="Login__Password"
                />
                <Button variant="contained" color="primary" className="Login__Button" onClick={onLoginClick}>
                    LOGIN
                </Button>
            </Paper>
        </div>
    )
}

export default Login
