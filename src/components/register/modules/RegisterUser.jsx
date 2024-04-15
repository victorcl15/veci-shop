import {
  Button,
  TextField,
  Typography,
  Container,
  CssBaseline,
  FormGroup,
  FormControlLabel,
  Switch,
} from "@mui/material";
import { styled } from "@mui/system";

const MyContainer = styled(Container)({
  marginTop: "theme.spacing(8)",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
});

const MyForm = styled("form")({
  width: "100%", // Fix IE 11 issue.
  marginTop: "theme.spacing(1)",
});

const MyButton = styled(Button)({
  margin: "theme.spacing(3, 0, 2)",
});

const useStyles = () => {
  return {
    paper: {
      marginTop: "theme.spacing(8)",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
    },
    form: {
      width: "100%", // Fix IE 11 issue.
      marginTop: "theme.spacing(1)",
    },
    submit: {
      margin: "theme.spacing(3, 0, 2)",
    },
  };
};

const stylesPanelRegister = {
  marginTop: "1rem",
  display: "flex",
  justifyContent: "space-between",
};

const RegisterUser = ({ handleInputChange, handleSubmit, handleInputChangeSwitch }) => {
  const classes = useStyles();

  return (
    <MyContainer component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Typography component="h1" variant="h5">
          Registro
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
            onChange={handleInputChange}
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="nombre"
            label="Nombre"
            type="text"
            id="name"
            autoComplete="current-name"
            onChange={handleInputChange}
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="contrasena"
            label="Contraseña"
            type="password"
            id="password"
            autoComplete="current-password"
            onChange={handleInputChange}
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="direccion"
            label="Dirección"
            type="text"
            id="direccion"
            autoComplete="current-name"
            onChange={handleInputChange}
          />
          <FormGroup>
            <FormControlLabel
              control={<Switch />}
              label="Quieres privilegios de vendedor?"
              name="esVendedor"
              onChange={handleInputChangeSwitch}
            />
          </FormGroup>
          <MyButton
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
          >
            Enviar
          </MyButton>
        </MyForm>
        <section className="panel-register" style={stylesPanelRegister}>
          <span>
            <Typography>¿Ya tienes cuenta?</Typography>
          </span>
          <span>
            <Typography component="a" href="/login">
              Inicia Sesión
            </Typography>
          </span>
        </section>
      </div>
    </MyContainer>
  );
};

export default RegisterUser;
