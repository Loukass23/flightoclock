import React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import { withStyles } from '@material-ui/core/styles';
import MenuIcon from '@material-ui/icons/Menu';
import GroupIcon from '@material-ui/icons/Group';
import HomeIcon from '@material-ui/icons/Home';
import AccountCircle from '@material-ui/icons/AccountCircle';
import MapIcon from '@material-ui/icons/Map';
import MoreIcon from '@material-ui/icons/MoreVert';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import PhotoIcon from '@material-ui/icons/Photo';
import Logo1 from '../images/logo/flight 1 of 3.png'
import Logo2 from '../images/logo/flight 2 of 3.png'
import Logo3 from '../images/logo/flight 3 of 3.png'
import { Link } from 'react-router-dom'
import SignIn from '../components/auth/SignIn'
import Icon from '@material-ui/core/Icon';
import classNames from 'classnames';




const styles = theme => ({
    root: {
        width: '100%',
    },
    grow: {
        flexGrow: 1,
    },
    menuButton: {
        marginLeft: -12,
        marginRight: 20,
    },
    title: {
        display: 'none',
        [theme.breakpoints.up('sm')]: {
            display: 'block',
        },
    },
    logo: {
        // width: theme.spacing.unit * 9,
        // height: '100%',
        // position: 'absolute',
        // pointerEvents: 'none',
        display: 'flex',
        flexGrow: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    inputRoot: {
        color: 'inherit',
        width: '100%',
    },
    inputInput: {
        paddingTop: theme.spacing.unit,
        paddingRight: theme.spacing.unit,
        paddingBottom: theme.spacing.unit,
        paddingLeft: theme.spacing.unit * 10,
        transition: theme.transitions.create('width'),
        width: '100%',
        [theme.breakpoints.up('md')]: {
            width: 200,
        },
    },
    sectionDesktop: {
        display: 'none',
        [theme.breakpoints.up('md')]: {
            display: 'flex',
        },
    },
    sectionMobile: {
        display: 'flex',
        [theme.breakpoints.up('md')]: {
            display: 'none',
        },
    },
    icon: {
        // margin: theme.spacing.unit * 2,
    },
    // iconHover: {
    //     margin: theme.spacing.unit * 2,
    //     '&:hover': {
    //          color: red[800],
    //     },
    // },
});


class Navbar extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            anchorEl: null,
            mobileMoreAnchorEl: null,
            mobileOpen: false,

        }
    }

    handleDrawerToggle = () => {
        this.setState(state => ({ mobileOpen: !state.mobileOpen }));
    };
    handleProfileMenuOpen = event => {
        this.setState({ anchorEl: event.currentTarget });
    };

    handleMenuClose = () => {
        this.setState({ anchorEl: null });
        this.handleMobileMenuClose();
    };

    handleMobileMenuOpen = event => {
        this.setState({ mobileMoreAnchorEl: event.currentTarget });
    };

    handleMobileMenuClose = () => {
        this.setState({ mobileMoreAnchorEl: null });
    };


    render() {
        const { anchorEl, mobileMoreAnchorEl, } = this.state;
        const { classes } = this.props;
        const isMenuOpen = Boolean(anchorEl);
        const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);
        const renderDrawer = (
            <Drawer
                container={this.props.container}
                variant="temporary"
                open={this.state.mobileOpen}
                onClose={this.handleDrawerToggle}
                classes={{
                    paper: classes.drawerPaper,
                }}
            >
                <Divider />
                <List onClick={this.handleDrawerToggle}>
                    <ListItem component={Link} to="/" button >
                        <ListItemIcon ><HomeIcon color="primary" /></ListItemIcon>
                        <ListItemText primary='Home' />
                    </ListItem>
                    <ListItem component={Link} to="/about" button >
                        <ListItemIcon ><GroupIcon color="primary" /></ListItemIcon>
                        <ListItemText primary='About Us' />
                    </ListItem>


                    <ListItem component={Link} to="/photos" button >
                        <ListItemIcon ><PhotoIcon color="primary" /></ListItemIcon>
                        <ListItemText primary='Photos' />
                    </ListItem>


                    <ListItem component={Link} to="/ig" button >
                        <ListItemIcon ><Icon className={classNames(classes.icon, 'fab fa-instagram')} color="primary" />
                        </ListItemIcon>
                        <ListItemText primary='Instagram' />
                    </ListItem>

                    <ListItem color="primary" component={Link} to="/map" button >
                        <ListItemIcon ><MapIcon color="primary" /></ListItemIcon>
                        <ListItemText primary='Map' />
                    </ListItem>
                    <ListItem component={Link} to="/posts" button >
                        <ListItemIcon ><Icon className={classNames(classes.icon, 'fas fa-newspaper')} color="primary" />
                        </ListItemIcon>
                        <ListItemText primary='Posts' />
                    </ListItem>

                    {/* {['About us', 'Photos', 'Instagram', 'Map'].map((text, index) => (
                        <ListItem button key={text}>
                            <ListItemIcon color={red}>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
                            <ListItemText primary={text} />
                        </ListItem>
                    ))} */}
                </List>

            </Drawer>
        );
        const renderMenu = (
            <Menu
                anchorEl={anchorEl}
                anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
                transformOrigin={{ vertical: 'top', horizontal: 'right' }}
                open={isMenuOpen}
                onClose={this.handleMenuClose}
            >
                <MenuItem onClick={this.handleMenuClose}>Profile</MenuItem>
                <MenuItem onClick={this.handleMenuClose}>My account</MenuItem>
            </Menu>
        );

        const renderMobileMenu = (
            <Menu
                anchorEl={mobileMoreAnchorEl}
                anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
                transformOrigin={{ vertical: 'top', horizontal: 'right' }}
                open={isMobileMenuOpen}
                onClose={this.handleMenuClose}
            >

                <MenuItem onClick={this.handleProfileMenuOpen}>
                    <IconButton color="inherit">
                        <AccountCircle />
                    </IconButton>
                    <p>Log In</p>
                </MenuItem>

            </Menu>
        );

        return (
            <div className={classes.root}>
                <AppBar position="static"  >
                    <Toolbar >
                        <IconButton
                            color="inherit"
                            aria-label="Open drawer"
                            onClick={this.handleDrawerToggle}
                            className={classes.menuButton}
                        >
                            <MenuIcon />
                        </IconButton>
                        {/* <Typography className={classes.title} variant="h6" color="inherit" noWrap>
                            Flightoclock
                         </Typography> */}

                        <div className={classes.logo}>
                            <Link to="/">
                                <img src={Logo1} height={50} alt="" />
                                <img id="logo-icon" src={Logo2} height={50} alt="" />
                                <img src={Logo3} height={50} alt="" />
                            </Link>
                        </div>

                        {/* <div className={classes.grow} /> */}
                        <div className={classes.sectionDesktop}>

                            <IconButton
                                aria-owns={isMenuOpen ? 'material-appbar' : undefined}
                                aria-haspopup="true"
                                onClick={this.handleProfileMenuOpen}
                                color="inherit"
                            >
                                <AccountCircle />
                            </IconButton>
                        </div>
                        <div className={classes.sectionMobile}>
                            <IconButton aria-haspopup="true" onClick={this.handleMobileMenuOpen} color="inherit">
                                <MoreIcon />
                            </IconButton>
                        </div>
                    </Toolbar>
                </AppBar>
                {renderMenu}
                {renderMobileMenu}
                {renderDrawer}
            </div>
        );
    }
}

Navbar.propTypes = {
    classes: PropTypes.object.isRequired,
    container: PropTypes.object,
};

export default withStyles(styles)(Navbar);
