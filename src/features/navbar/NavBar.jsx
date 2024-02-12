import React from "react";
import { AppBar, Toolbar, Typography, Button, Box } from "@mui/material";

const NavBar = () => {
  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          Currency Tracker
        </Typography>
        <Box sx={{ display: 'flex', flexGrow: 1 }}>
          <Button color="inherit" href="#Home">Home</Button>
          <Button color="inherit" href="#Currency">Currency</Button>
          <Button color="inherit" href="#Essence">Essence</Button>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default NavBar;
