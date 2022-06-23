import * as React from "react";
import { AppBar, Toolbar, Typography, Box, Button } from "@mui/material";
import { Logout } from "@mui/icons-material";
import { useNavigate } from "react-router-dom";

const NavApp = () => {
  const navigate = useNavigate();

  function actionLogout() {
    navigate("/login");
  }

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Ders Kayıt Proje Öğrenci Paneli
          </Typography>
          <Button onClick={() => actionLogout()} color="inherit">
            Logout
            <Logout />
          </Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default NavApp;
