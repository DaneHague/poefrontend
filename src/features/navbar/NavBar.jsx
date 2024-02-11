import React from "react";
import { AppBar, Toolbar, Typography, Button, Box } from "@mui/material";

const NavBar = () => {
  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          My Application
        </Typography>
        <Box sx={{ display: 'flex', flexDirection: 'row-reverse', flexGrow: 1 }}>
          <Button color="inherit" href="#Home">Home</Button>
          <Button color="inherit" href="#Currency">Currency</Button>
          <Button color="inherit" href="#contact">Contact</Button>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default NavBar;
