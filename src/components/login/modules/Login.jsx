import React, { useEffect, useState } from "react";
import { useLogin } from "../../../context";
import Avatar from '@mui/material/Avatar';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { Button, TextField, Typography, Container, CssBaseline } from "@mui/material";
import { styled } from "@mui/system";
import { getLogin } from "../services/loginService";

// Definir un tema personalizado con la fuente deseada
const theme = createTheme({
  typography: {
    fontFamily: [
      'Arial', // Cambia 'Arial' por la fuente que desees usar
      'sans-serif',
    ].join(','),
  },
});

const MyContainer = styled(Container)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
}));

const MyForm = styled("form")(({ theme }) => ({
  width: "100%",
  marginTop: theme.spacing(1),
}));

const MyButton = styled(Button)(({ theme }) => ({
  margin: theme.spacing(3, 0, 2),
}));

const useStyles = () => {
  const theme = createTheme();
  return {
    paper: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
    },
    form: {
      width: "100%",
      marginTop: theme.spacing(1),
    },
    submit: {
      margin: theme.spacing(3, 0, 2),
    },
    image: {
      backgroundImage: 'url(https://source.unsplash.com/random?wallpapers)',
      backgroundRepeat: 'no-repeat',
      backgroundColor: theme.palette.grey[50],
      backgroundSize: 'cover',
      backgroundPosition: 'center',
    },
  };
};

const stylesPanelRegister = {
  marginTop: "1rem",
  display: "flex",
  justifyContent: "space-between"
}

const Login = ({ handleIrHome }) => {
  const { usuario, login } = useLogin();
  const classes = useStyles();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [userResponse, setUserResponse] = useState(null);

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    const user_data = { email, contrasena: password };
    const response = await getLogin(user_data);
    setUserResponse(response);

    if (response.success) {
      login(response.data);
    }
  };

  useEffect(() => {
    if (usuario && usuario !== "" && userResponse?.success !== false) {
      handleIrHome();
    }
  }, [usuario]);

  return (
    // Aplicar el tema personalizado al contenedor principal
    <ThemeProvider theme={theme}>
      <Grid container component="main" style={{ height: '100vh' }}>
        <CssBaseline />

        <Grid item xs={false} sm={4} md={7} 
          sx={{
            backgroundImage: 'url(https://i.pinimg.com/736x/71/68/1e/71681e2852ec0a7b12fc7305be6dd4c1.jpg)',
            backgroundRepeat: 'no-repeat',
            backgroundColor: (t) =>
              t.palette.mode === 'light' ? t.palette.grey[50] : t.palette.grey[900],
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
          
        />


        <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square style={{ 
          backgroundImage: 'url(https://img.freepik.com/free-vector/abstract-geometric-background-orange-light-blue-tones_1095-253.jpg)', // Cambia la URL por la textura deseada
          backgroundColor: '#000',
          backgroundSize: '100% 100%', // Esta línea ajustará la imagen al cuadro sin repetirla
        }}>
          <MyContainer component="div">
            <div className={classes.paper}>
              <Avatar>
                <LockOutlinedIcon />
              </Avatar>
              {/* Aplicar la fuente personalizada a los componentes de texto */}
              <Typography component="h1" variant="h5" style={{ fontFamily: 'Arial' }}> {/* Cambia 'Arial' por la fuente deseada */}
                Iniciar sesión
              </Typography>
              <MyForm className={classes.form} onSubmit={handleSubmit}>
                <TextField
                  variant="outlined"
                  margin="normal"
                  required
                  fullWidth
                  id="email"
                  label="Correo electrónico"
                  name="email"
                  autoComplete="email"
                  autoFocus
                  value={email}
                  onChange={handleEmailChange}
                />
                <TextField
                  variant="outlined"
                  margin="normal"
                  required
                  fullWidth
                  name="password"
                  label="Contraseña"
                  type="password"
                  id="password"
                  autoComplete="current-password"
                  value={password}
                  onChange={handlePasswordChange}
                />
                <MyButton
                  type="submit"
                  fullWidth
                  variant="contained"
                  color="primary"
                  className={classes.submit}
                >
                  Iniciar sesión
                </MyButton>
              </MyForm>
              <section className="panel-register" style={stylesPanelRegister}>
                <span>
                  <Typography style={{ fontFamily: 'Arial' }}>¿No tienes cuenta?</Typography> {/* Cambia 'Arial' por la fuente deseada */}
                </span>
                <span>
                  <Typography component="a" href="/register" style={{ fontFamily: 'Arial' }}>Regístrate</Typography> {/* Cambia 'Arial' por la fuente deseada */}
                </span>
              </section>
            </div>
          </MyContainer>
        </Grid>
      </Grid>
    </ThemeProvider>
  );
};

export default Login;