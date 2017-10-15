/* eslint-disable flowtype/require-valid-file-annotation */

import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import Drawer from 'material-ui/Drawer';
import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import List from 'material-ui/List';
import Typography from 'material-ui/Typography';
import IconButton from 'material-ui/IconButton';
import Hidden from 'material-ui/Hidden';
import Divider from 'material-ui/Divider';
import MenuIcon from 'material-ui-icons/Menu';
import Paper from 'material-ui/Paper';
import Grid from 'material-ui/Grid';
import { mailFolderListItems, otherMailFolderListItems } from '../components/buttonMap';
import TitlebarGridList from '../components/gridImage';
import logoimg from './logo.png'



const drawerWidth = 240;

const styles = theme => ({
    root: {
        width: '100%',
        height: 1080,
        // height:'100%',
        marginTop: theme.spacing.unit * 3,
        zIndex: 1,
        overflow: 'hidden',
    },
    appFrame: {
        position: 'relative',
        display: 'flex',
        width: '100%',
        // height: 1080,
        // height: '100%',
        height: 'calc(100% - 64px)',
    },
    appBar: {
        position: 'absolute',
        marginLeft: drawerWidth,
        [theme.breakpoints.up('md')]: {
            width: `calc(100% - ${drawerWidth}px)`,
        },
    },
    navIconHide: {
        [theme.breakpoints.up('md')]: {
            display: 'none',
        },
    },
    drawerHeader: theme.mixins.toolbar,
    drawerPaper: {
        width: 250,
        [theme.breakpoints.up('md')]: {
            width: drawerWidth,
            position: 'relative',
            height: '1080px',
        },
    },
    content: {
        // backgroundColor: theme.palette.background.default,
        width: '100%',
        padding: theme.spacing.unit * 3,
        height: 'calc(100% - 56px)',
        marginTop: 56,
        [theme.breakpoints.up('sm')]: {
            height: 'calc(100% - 64px)',
            marginTop: 64,
        },
    },
});
 

class ResponsiveDrawer extends React.Component {
    constructor(props) {
        super(props);
        this.state = { height: props.height };
    }

    componentWillMount() {
        this.setState({ height: window.innerHeight + 'px' });
    }


    state = {
        mobileOpen: false,
    };
    
    handleDrawerToggle = () => {
        this.setState({ mobileOpen: !this.state.mobileOpen });
    };

    render() {
        const { classes, theme } = this.props;

        const drawer = (
            <div>
                <div className={classes.drawerHeader} >
   
                    <img src={logoimg} style={{ height: '120%', width: '120%'}}/>
                    
                    
                </div>
                <Divider />
                <List>{mailFolderListItems}</List>
                <Divider />
                <List>{otherMailFolderListItems}</List>
            </div>
        );

        return (
            <div className={classes.root}>
                <div className={classes.appFrame}>
                    <AppBar className={classes.appBar}>
                        <Toolbar>
                            <IconButton
                                color="contrast"
                                aria-label="open drawer"
                                onClick={this.handleDrawerToggle}
                                className={classes.navIconHide}
                            >
                                <MenuIcon />
                            </IconButton>
                            <Typography type="title" color="inherit" noWrap>
                                Responsive drawer
                            </Typography>
                        </Toolbar>
                    </AppBar>
                    <Hidden mdUp>
                        <Drawer
                            type="temporary"
                            anchor={theme.direction === 'rtl' ? 'right' : 'left'}
                            open={this.state.mobileOpen}
                            classes={{
                                paper: classes.drawerPaper,
                            }}
                            onRequestClose={this.handleDrawerToggle}
                            ModalProps={{
                                keepMounted: true, // Better open performance on mobile.
                            }}
                        >
                            {drawer}
                        </Drawer>
                    </Hidden>
                    <Hidden mdDown implementation="css">
                        <Drawer
                            type="permanent"
                            open
                            classes={{
                                paper: classes.drawerPaper,
                            }}
                        >
                            {drawer}
                        </Drawer>
                    </Hidden>
                    <main className={classes.content}>
                        {/* <Typography type="body1" noWrap> */}
                            <Grid container spacing={24}>
                                <Grid item xs>
                                    {/* <Paper className={classes.paper}>xs</Paper> */}
                                </Grid>
                                <Grid item xs={10}>
                                    <Paper className={classes.paper}>
                                    <TitlebarGridList>
                                    </TitlebarGridList>
                                    </Paper>
                                </Grid>
                                <Grid item xs>
                                    {/* <Paper className={classes.paper}>xs</Paper> */}
                                </Grid>
                            </Grid>
                        {/* </Typography> */}
                    </main>
                </div>
            </div>
        );
    }
}

ResponsiveDrawer.propTypes = {
    classes: PropTypes.object.isRequired,
    theme: PropTypes.object.isRequired,
    height: PropTypes.string,
};

ResponsiveDrawer.defaultProps = {
    height: '500px'
};
export default withStyles(styles, { withTheme: true })(ResponsiveDrawer);