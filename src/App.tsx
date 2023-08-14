import React, { useState, FormEvent, useEffect } from 'react';
import { TextField, Button, Paper, Typography } from '@mui/material';

import './App.css';

function App() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [loggedIn, setLoggedIn] = useState(false);

  const handleLogin = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    // Simulate authentication (store data locally)
    localStorage.setItem('username', username);
    localStorage.setItem('password', password);
    setLoggedIn(true);
  };

  useEffect(() => {
    const storedUsername = localStorage.getItem('username');
    const storedPassword = localStorage.getItem('password');

    if (storedUsername && storedPassword) {
      setUsername(storedUsername);
      setPassword(storedPassword);
      setLoggedIn(true);
    }
  }, []);

  const handleLogout = () => {
    setLoggedIn(false);
    setUsername('');
    setPassword('');
  };

  return (
    <div className="center-container">
      <Paper elevation={3} className="form-container">
        <Typography variant="h5" align="center">
          {loggedIn ? `Welcome, ${username}!` : ' Welcome to my page'}
        </Typography>
        {loggedIn ? (
          <>
            <Typography variant="body1" align="center">
              You have successfully logged in as {username}.
            </Typography>
            <Button
              variant="contained"
              color="primary"
              fullWidth
              className="logout-button"
              onClick={handleLogout}
            >
              Back to Login
            </Button>
          </>
        ) : (
          <form onSubmit={handleLogin} className="login-form">
            <TextField
              label="Username"
              variant="outlined"
              fullWidth
              margin="normal"
              value={username}
              onChange={(event) => setUsername(event.target.value)}
            />
            <TextField
              label="Password"
              type="password"
              variant="outlined"
              fullWidth
              margin="normal"
              value={password}
              onChange={(event) => setPassword(event.target.value)}
            />
            <Button
              type="submit"
              variant="contained"
              color="primary"
              fullWidth
              className="login-button"
            >
              Sign In
            </Button>
          </form>
        )}
      </Paper>
    </div>
  );
}

export default App;
