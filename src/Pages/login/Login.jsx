import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import { useState } from "react";
import React from "react";
import Avatar from "@mui/material/Avatar";
import { LockOutlined } from "@mui/icons-material";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import "./login.scss";

export const LoginPage = ({ adminUser, studentUser, error, setError }) => {
  const [refs, setRefs] = useState({ pwd: "", username: "" });
  const [successAdmin, setSuccessAdmin] = useState(false);
  const [successStudent, setSuccessStudent] = useState(false);

  const AdminLogin = (values) => {
    if (
      values.username === adminUser[0].username &&
      values.pwd === adminUser[0].pwd
    ) {
      setSuccessAdmin(true);
    } else {
      setError("Giriş bilgileriniz yanlış");
    }
  };

  const StudentLogin = (values) => {
    if (
      values.username === studentUser[0].username &&
      values.pwd === studentUser[0].pwd
    ) {
      setSuccessStudent(true);
    }
    setError("Giriş bilgileri yanlış");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    AdminLogin(refs);
    StudentLogin(refs);
  };

  return (
    <Container component="main" maxWidth="xs">
      <Box
        sx={{
          marginTop: 8,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        {successAdmin ? (
          <section
            style={{
              marginTop: "5rem",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              flexDirection: "column",
            }}
          >
            <h1>Başarı ile giriş yaptınız!</h1>
            <br />
            <Button variant="contained" color="success" href="/">
              Admin Paneline Git
            </Button>
          </section>
        ) : (
          <>
            <Avatar sx={{ m: 1, bgcolor: "primary.main" }}>
              <LockOutlined />
            </Avatar>
            <Typography component="h1" variant="h5">
              Giriş Yap
            </Typography>
            {/* Alttaki error fonksiyonu sorabilir bir yere not al silersin sonra eklersin sorarsa  */}
            {/* {error !== "" ? <div className="error">{error}</div> : ""} */}
            <Box component="form" onSubmit={handleSubmit} sx={{ mt: 1 }}>
              <TextField
                margin="normal"
                required
                fullWidth
                id="username"
                label="Kullanıcı Adı"
                name="name"
                autoComplete="off"
                autoFocus
                onChange={(e) => setRefs({ ...refs, username: e.target.value })}
                value={refs.username}
              />
              <TextField
                margin="normal"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                onChange={(e) => setRefs({ ...refs, pwd: e.target.value })}
                value={refs.pwd}
              />
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
              >
                Giriş Yap
              </Button>
            </Box>
          </>
        )}
        {successStudent ? (
          <section
            style={{
              marginTop: "5rem",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              flexDirection: "column",
            }}
          >
            <h1>Başarı ile giriş yaptınız!</h1>
            <br />
            <Button variant="contained" color="success" href="/ogrenci">
              Öğrenci Paneline Git
            </Button>
          </section>
        ) : (
          ""
        )}
      </Box>
    </Container>
  );
};
