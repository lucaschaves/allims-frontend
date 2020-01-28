import React from "react";
import { BrowserRouter, Redirect, Switch, Route } from "react-router-dom";
import { Container, Grid, Box } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { NavMenu, Copyright } from "components";
import { SignIn, SignUp, Home, EntriesAdd, EntriesList, Studio, NotFound } from "pages";
import { isAuthenticated } from "utils/auth";

const useStyles = makeStyles(theme => ({
  root: {
    display: "flex"
  },
  appBarSpacer: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
    height: "98vh",
    overflow: "auto"
  },
  container: {
    paddingTop: theme.spacing(4),
    paddingBottom: theme.spacing(4)
  }
}));

const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={props =>
      isAuthenticated() ? (
        <Component {...props} />
      ) : (
        <Redirect to={{ pathname: "/signin" }} />
      )
    }
  />
);

const Routes = () => {
  const classes = useStyles();
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/signin" component={SignIn} />
        <Route exact path="/signup" component={SignUp} />
        <div className={classes.root}>
          <NavMenu />
          <main className={classes.content}>
            <div className={classes.appBarSpacer} />
            <Container maxWidth="lg" className={classes.container}>
            <Grid container spacing={3}>
                <Route exact path="/home" component={Home} />
                <Route exact path="/entries/add" component={EntriesAdd} />
                <Route exact path="/entries" component={EntriesList} />
                <Route exact path="/studio" component={Studio} />
                {/* <PrivateRoute exact path="*" component={NotFound} /> */}
              </Grid>
              <Box pt={4}>
                {/* <Copyright /> */}
              </Box>
            </Container>
          </main>
        </div>
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;
