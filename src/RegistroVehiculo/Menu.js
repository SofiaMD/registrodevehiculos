import React,{useState} from "react";
import clsx from "clsx";
import { makeStyles } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import List from "@material-ui/core/List";
import { useNavigate } from "react-router-dom";


import Divider from "@material-ui/core/Divider";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";


//iconos
import AirportShuttle from '@material-ui/icons/AirportShuttle';
import ListOutlined from '@material-ui/icons/ListOutlined';
import AddBoxOutlined from '@material-ui/icons/AddBoxOutlined';

import Collapse from '@material-ui/core/Collapse';
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';
import { Typography , Toolbar ,AppBar, CssBaseline, } from '@material-ui/core'



//rutas
import Router2 from '../Router/Route2'

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    marginRight: 36,
  },
  hide: {
    display: "none",
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: "nowrap",
  },
  drawerOpen: {
    width: drawerWidth,
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  drawerClose: {
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    overflowX: "hidden",
    width: theme.spacing(7) + 1,
    [theme.breakpoints.up("sm")]: {
      width: theme.spacing(9) + 1,
    },
  },
  toolbar: {
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-end",
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
  nested: {
    paddingLeft: theme.spacing(4),
  },
}));

export default function Menu() {
  
  const classes = useStyles();
  const [open, setOpen] = useState(false);
  const [open2, setOpen2] = useState(false);

  const navigate = useNavigate();

  const handleDrawerOpen = () => {
    setOpen(!open);
  };

  

  return (
    <div className={classes.root}>
       <CssBaseline />
      <AppBar
        position="fixed"
        className={clsx(classes.appBar, {
          [classes.appBarShift]: open,
        })}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            className={clsx(classes.menuButton, {
              [classes.hide]: open,
            })}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap>

          </Typography>
        </Toolbar>
      </AppBar>
      
      <Drawer
        variant="permanent"
        className={clsx(classes.drawer, {
          [classes.drawerOpen]: open,
          [classes.drawerClose]: !open,
        })}
        classes={{
          paper: clsx({
            [classes.drawerOpen]: open,
            [classes.drawerClose]: !open,
          }),
        }}
      >
        <div className={classes.toolbar}>
          <IconButton onClick={handleDrawerOpen}>
            {open ? (
              <ChevronLeftIcon className="coloricons" />
            ) : (
              <MenuIcon className="coloricons" />
            )}
          </IconButton>
        </div>
        <Divider />
        <List>
        <ListItem button onClick={() => {navigate('/Home')}} className={classes.nested}>
                <ListItemIcon >
                
                </ListItemIcon>
                <ListItemText primary="Home" />
              </ListItem>
          <ListItem button onClick={() => {setOpen2(!open2)}}>
          <ListItemIcon>
          <AirportShuttle></AirportShuttle>
          </ListItemIcon>
          <ListItemText primary="Registro de Vehiculos" />
          {open2 ? <ExpandLess /> : <ExpandMore />}
        </ListItem>
          <Collapse in={open2} timeout="auto" unmountOnExit>
            <List component="div" disablePadding>
              <ListItem button onClick={() => {navigate('/RegistrodeVehiculo')}} className={classes.nested}>
                <ListItemIcon >
                  <AddBoxOutlined></AddBoxOutlined>
                </ListItemIcon>
                <ListItemText primary="Nuevo Registro" />
              </ListItem>

              <ListItem button onClick={() => {navigate('/ListadodeVehiculo')}} className={classes.nested}>
                <ListItemIcon >
                  <ListOutlined></ListOutlined>
                </ListItemIcon>
                <ListItemText primary="Lista de Vehiculos" />
              </ListItem>

              <ListItem button onClick={() => {navigate('/RegistrodeEntrada')}} className={classes.nested}>
                <ListItemIcon >
                  <AddBoxOutlined></AddBoxOutlined>
                </ListItemIcon>
                <ListItemText primary="Nueva Entrada" />
              </ListItem>

              <ListItem button onClick={() => {navigate('/RegistrodeSalida')}} className={classes.nested}>
                <ListItemIcon >
                  <AddBoxOutlined></AddBoxOutlined>
                </ListItemIcon>
                <ListItemText primary="Nueva Salida" />
              </ListItem>

              <ListItem button onClick={() => {navigate('/ListadoEntradaSalida')}} className={classes.nested}>
                <ListItemIcon >
                  <ListOutlined></ListOutlined>
                </ListItemIcon>
                <ListItemText primary="Listado de Entrada/Salida" />
              </ListItem>
              
              {/* <ListItem >
                <ListItemIcon >
                  <ListOutlined></ListOutlined>
                </ListItemIcon>
                <ListItemText primary="Lista de Salida" />
              </ListItem> */}

            </List>
          </Collapse>
        </List>
        <Divider className="bot" />
        <div>
          <List>
            <ListItem button key={"text3"}>
              <ListItemIcon>
               
              </ListItemIcon>
              <ListItemText primary={"Cerra Sesion"} className="colortext" />
            </ListItem>
          </List>
        </div>
      </Drawer>
      <main className={classes.content}>
        <div className={classes.toolbar} />
        <Router2></Router2>
      </main>
    </div>
  );
}