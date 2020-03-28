import React, { useState, useEffect } from 'react';
import { StyleSheet } from 'react-dom';
import { fade, makeStyles, withStyles } from '@material-ui/core/styles';
// import Menu from '@material-ui/core/Menu';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import InputBase from '@material-ui/core/InputBase';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Checkbox from '@material-ui/core/Checkbox';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';
import ArrowDropDownCircleIcon from '@material-ui/icons/ArrowDropDownCircle';
import AppleIcon from '@material-ui/icons/Apple';
import axios from 'axios';


const StyledMenu = withStyles({
  paper: {
    border: '1px solid #d3d4d5',
  },
})(props => (
  <Menu
    elevation={0}
    getContentAnchorEl={null}
    anchorOrigin={{
      vertical: 'bottom',
      horizontal: 'center',
    }}
    transformOrigin={{
      vertical: 'top',
      horizontal: 'center',
    }}
    style={{ height: 600 }}
    {...props}
  />
));

const StyledMenuItem = withStyles(theme => ({
  root: {
    '&:focus': {
      backgroundColor: theme.palette.primary.main,
      '& .MuiListItemIcon-root, & .MuiListItemText-primary': {
        color: theme.palette.common.white,
      },
    },
  },
}))(MenuItem);


const Navbar = () => {
    const classes = useStyles();

    const [anchorEl, setAnchorEl] = useState(null);
    const [sources, setSources] = useState([]);
    const handleClick = event => {
      setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
      setAnchorEl(null);
    };

    useEffect(() => {
      axios.get(
        "https://newsapi.org/v2/sources?apiKey=8238274e2c804ba7846c193f425ee6d3",
      ).then(res => {
        console.log(res.data.sources);
        setSources(res.data.sources);
      }).catch(err => {
        console.log(err);
      })
    }, [])


    const listitems = [];

    for(var i = 0; i < sources.length ; i++) {
                  listitems.push(<StyledMenuItem key={sources[i].id}><Checkbox value={sources[i].id} /><ListItemText primary={sources[i].name} /></StyledMenuItem>)
                }

    return (
        <div className={classes.root}>
            <AppBar position="static">
                <Toolbar>

                <Typography className={classes.title} variant="h6" noWrap>
                    SocialEgg
                </Typography>
                <div className={classes.search}>
                    <div className={classes.searchIcon}>
                    <SearchIcon />
                    </div>
                    <InputBase
                    placeholder="Search…"
                    classes={{
                        root: classes.inputRoot,
                        input: classes.inputInput,
                    }}
                    inputProps={{ 'aria-label': 'search' }}
                    />
                </div>
                <IconButton
                    aria-controls="customized-menu"
                    aria-haspopup="true"
                    variant="contained"
                    color="primary"
                    onClick={handleClick}
                    edge="start"
                    className={classes.menuButton}
                    color="inherit"
                    aria-label="open drawer"
                    style={ { marginLeft : 0, flex: 0 } }
                >
                    <ArrowDropDownCircleIcon />
                </IconButton>
                <StyledMenu
                  id="customized-menu"
                  anchorEl={anchorEl}
                  keepMounted
                  open={Boolean(anchorEl)}
                  onClose={handleClose}
                >
                
                  {listitems}
                  
                </StyledMenu>
                
                <IconButton
                    edge="start"
                    className={classes.menuButton}
                    color="inherit"
                    aria-label="open drawer"
                    // style={{ textAlign: 'right', float: 'right' }}
                >
                    <AppleIcon style={{ float: 'right' }} />
                </IconButton>
                </Toolbar>
            </AppBar>
        </div>
    )
}

const useStyles = makeStyles(theme => ({
   root: {
    flexGrow: 1,
  },
  menuButton: {
    flex: 1,
    display: 'flex',
    // marginLeft: 'auto',
    float: 'right',
    textAlign: 'right',
    marginRight: 0,
    // textAlign: 'right',
    // alignContent: 'right',
  },
  title: {
    // flexGrow: 1,
    flex: 1,
    // textAlign: "center",
    display: 'none',
    [theme.breakpoints.up('sm')]: {
      display: 'block',
    },
  },
  search: {
    position: 'relative',
    textAlign: 'center',
    flex: 1,
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: fade(theme.palette.common.white, 0.25),
    },
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(1),
      width: 'auto',
    },
  },
  searchIcon: {
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputRoot: {
    color: 'inherit',
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      width: '12ch',
      '&:focus': {
        width: '20ch',
      },
    },
  },
}));

export default Navbar;