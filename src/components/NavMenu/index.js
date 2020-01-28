import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useQuery } from 'react-apollo-hooks';
import clsx from "clsx";
import { makeStyles } from "@material-ui/core/styles";
import {
  AppBar,
  Toolbar,
  Typography,
  IconButton,
  Badge,
  Drawer,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  TextField
} from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import NotificationsIcon from "@material-ui/icons/Notifications";
import ExitToApp from "@material-ui/icons/ExitToApp";
import { styled } from "@material-ui/styles";
import PropTypes from "prop-types";
import {Loading} from "components";
import {GET_MENU} from 'data/graphql'
import {setLogout} from 'utils/auth'
import i18next from 'i18next';
import './styles.css';

const useStyles = makeStyles(theme => ({
  toolbar: {
    paddingRight: 24 // keep right padding when drawer closed
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen
    })
  },
  appBarShift: {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen
    })
  },
  menuButton: {
    marginRight: 36
  },
  menuButtonHidden: {
    display: "none"
  },
  title: {
    flexGrow: 1
  },
  toolbarIcon: {
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-end",
    padding: "0 8px",
    ...theme.mixins.toolbar
  },
  drawerPaper: {
    position: "relative",
    whiteSpace: "nowrap",
    width: drawerWidth,
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen
    })
  },
  drawerPaperClose: {
    overflowX: "hidden",
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen
    }),
    width: theme.spacing(7),
    [theme.breakpoints.up("sm")]: {
      width: theme.spacing(9)
    }
  }
}));

const drawerWidth = 240;
const Anchor = styled(({ theme, ...other }) => <a {...other} />)({
  display: "block",
  // color: props => (props.theme.text ? props.theme.text : "black"),
  color: "black",
  textDecoration: "none",
  margin: "auto",
  padding: "0px",
  height: "100%",
  "@media (max-width: 768px)": {
    width: "100%"
  }
});
const LinkAnchor = props => {
  const { title, href, theme, icon } = props;
  return (
    <Anchor href={href} alt={title} theme={theme}>
      <ListItem button>
        {icon ? <ListItemIcon>{icon}</ListItemIcon> : null}
        <ListItemText primary={title} />
      </ListItem>
    </Anchor>
  );
};

const MenuItens = props => {
  const { icon, primary, to } = props;

  const themes = "black";
  return (
    <li>
      <LinkAnchor key={1} href={to} title={primary} theme={themes} icon={icon}></LinkAnchor>
    </li>
  );
};

const RenderMenu = props => {
  if(props.allGeralMenus !== undefined && props.allGeralMenus.nodes !== undefined) {
  return(
      props.allGeralMenus.nodes.map(men => {
        if(men.geralMenuDropsByDrop.nodes.length > 0) {
          return (
            men.geralMenuDropsByDrop.nodes.map(dr => (
              <MenuItens
                to={dr.link}
                primary={dr.subtitle}
              />
            ))
          )
        } else {
          return(
            <MenuItens
              to={men.link}
              primary={men.title}
              icon={<NotificationsIcon />}
            />
          )
        }
      })
    )
  }
}

MenuItens.propTypes = {
  icon: PropTypes.element,
  primary: PropTypes.string.isRequired,
  to: PropTypes.string.isRequired
};

const links = [{ route: "/", label: "Home" }];

const NavMenu = () => {
  const classes = useStyles();
  const { data, loading } = useQuery(GET_MENU);
  const [open, setOpen] = useState(true);
  const [state, setState] = useState(
    {lng: i18next.language}
    )

  const handleDrawerOpen = () => {
    setOpen(true);
  };
  const handleDrawerClose = () => {
    setOpen(false);
  };
  const renderLink = () => {
    return links.map(link => (
      <LinkAnchor key={link.route} className="nav-link" to={link.route}>
        {link.label}
      </LinkAnchor>
    ));
  };

  const changeLanguage = (e) => {
    setState({ lng: e.target.value })
    i18next.changeLanguage(e.target.value);
  }

  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="collapse navbar-collapse" id="navbarNav">
          <AppBar
            position="absolute"
            className={clsx(classes.appBar, open && classes.appBarShift)}
          >
            <Toolbar className={classes.toolbar}>
              <IconButton
                edge="start"
                color="inherit"
                aria-label="open drawer"
                onClick={handleDrawerOpen}
                className={clsx(
                  classes.menuButton,
                  open && classes.menuButtonHidden
                )}
              >
                <MenuIcon />
              </IconButton>
              <Typography
                component="h1"
                variant="h6"
                color="black"
                noWrap
                className={classes.title}
              >
                <ul className="navbar-nav">{renderLink()}</ul>
              </Typography>
              
              <div className='language'>
                <button
                  className={state.lng === 'pt' ? 'pt active' : 'pt'}
                  onClick={e => changeLanguage(e)}
                  value='pt' />
                <button
                  className={state.lng === 'en' ? 'en active' : 'en'}
                  onClick={e => changeLanguage(e)}
                  value='en' />
              </div>
              
              <IconButton color="inherit">
                <Badge badgeContent={0} color="secondary">
                  <NotificationsIcon />
                </Badge>
              </IconButton>
              
              <IconButton color="inherit" onClick={() => setLogout()}>
                <Link to={'/signin'} >
                  <ExitToApp />
                </Link>
              </IconButton>
            </Toolbar>

          </AppBar>
        </div>
      </nav>
      <Drawer
        variant="permanent"
        classes={{
          paper: clsx(classes.drawerPaper, !open && classes.drawerPaperClose)
        }}
        open={open}
      >
        <div className={classes.toolbarIcon}>
          <IconButton onClick={handleDrawerClose}>
            <ChevronLeftIcon />
          </IconButton>
        </div>
        <List aria-label="main mailbox folders">
          {loading ? <Loading /> : <RenderMenu {...data}/> }
        </List>
      </Drawer>
    </>
  );
};

export default NavMenu;
