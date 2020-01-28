import React, { useReducer, useEffect } from "react";
import { Link, withRouter, Redirect } from "react-router-dom";

import {
  Avatar,
  Button,
  CssBaseline,
  TextField,
  FormControlLabel,
  Checkbox,
  Paper,
  Box,
  Grid,
  Typography
} from "@material-ui/core";

import { makeStyles } from "@material-ui/core/styles";
import { Copyright } from "components";
// import reducerLogin from "data/redux/reducers/login";

import api from "services/api";
import { getToken, getUser, setToken } from "utils/auth";
export const AuthContext = React.createContext();

const useStyles = makeStyles(theme => ({
  root: {
    height: "100vh"
  },
  image: {
    backgroundImage:
      "url(http://www.labonline.com.br/wp-content/uploads/2018/06/sala.jpg)",
    backgroundRepeat: "no-repeat",
    backgroundColor:
      theme.palette.type === "dark"
        ? theme.palette.grey[900]
        : theme.palette.grey[50],
    backgroundSize: "cover",
    backgroundPosition: "center"
  },
  paper: {
    margin: theme.spacing(8, 4),
    display: "flex",
    flexDirection: "column",
    alignItems: "center"
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(1)
  },
  submit: {
    margin: theme.spacing(3, 0, 2)
  }
}));

const initialState = {
  isAuthenticated: false,
  user: null,
  token: null
};
const SignIn = () => {
  const classes = useStyles();
  const [state, dispatch] = useReducer();

  useEffect(() => {
    const user = JSON.parse(getUser() || null);
    const token = JSON.parse(getToken() || null);

    if (user && token) {
      dispatch({
        type: "LOGIN",
        payload: {
          user,
          token
        }
      });
    }
  }, []);

  const handleSignIn = async e => {
    e.preventDefault();
    setToken('teste');
    
    // const { login, password } = state;
    // console.log(state, state);
    // if (!login || !password) {
      // setState({ error: "Preencha e-mail e senha para continuar!" });
    // } else {
    //   try {
        // const response = await api.post("/login", { login, password });
        // setToken(response.data.token);
        // loginSuccess = true;
        // props.history.push("/");
      //   window.redirect("/");
      // } catch (err) {
        // setState({
        //   error:
        //     "Houve um problema com o login, verifique suas credenciais. T.T"
        // });
    //   }
    // }
  };

  // const changeLogin = e => setState({ login: e.target.value });
  // const changePassword = e => setState({ password: e.target.value });

  return (
    <Grid container component="main" className={classes.root}>
      <CssBaseline />
      <Grid item xs={false} sm={4} md={7} className={classes.image} />
      <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
        <div className={classes.paper}>
          <Avatar className={classes.avatar}>
            {/* <LockOutlinedIcon /> */}
          </Avatar>
          <Typography component="h1" variant="h5">
            Login
          </Typography>
          <form
            className={classes.form}
            noValidate
            onSubmit={() => handleSignIn()}
          >
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="login"
              label="Email ou Login"
              name="login"
              autoComplete="off"
              autoFocus
              // onChange={e => changeLogin(e)}
              // value={state.login}
            />
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              name="password"
              label="Senha"
              type="password"
              id="password"
              autoComplete="current-password"
              // onChange={e => changePassword(e)}
              // value={state.password}
            />
            <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="Lembrar-me"
            />
            <Link to="/home">
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              className={classes.submit}
            >
              Entrar
            </Button>
            </Link>
            <Grid container>
              <Grid item xs>
                <Link to="/signin">Esqueceu a senha?</Link>
              </Grid>
            
              <Grid item>
                <Link to="/signup">Não possui conta? Cadastrar</Link>
              </Grid>
            </Grid>
            <Box mt={5}>
              <Copyright />
            </Box>
          </form>
        </div>
      </Grid>
    </Grid>
  );
};

export default withRouter(SignIn);
