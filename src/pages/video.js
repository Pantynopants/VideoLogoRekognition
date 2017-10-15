/* eslint-disable flowtype/require-valid-file-annotation */

import React from 'react';
import { render } from 'react-dom';
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
import Iframe from 'react-iframe'
import Button from 'material-ui/Button';
// import iframeLogoimg from './index.html'

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


{/* <script type="text/javascript" src="https://sdk.clarifai.com/js/clarifai-latest.js"></script> */}
const Clarifai = require('clarifai');
const app = new Clarifai.App({ apiKey: 'f7cfa78227654e299078ad48ef5d2c23' });


class Video extends React.Component {
    constructor(props) {
        super(props);
        this.state = { height: props.height };
        
    }

    componentWillMount() {
        this.setState({ height: window.innerHeight + 'px' });
        console.log("eerror")
        render(<div><canvas id="canvas" width="640" height="480"></canvas>
        <video controls>
            <source src="http://dev.musite.net/test/videoSnap/logo.mp4" type="video/mp4"></source>
            </video>
            </div>, document.querySelector('#root'));
    }

//add loadedmetadata which will helps to identify video attributes......

///define a function

    componentDidUpdate(){
        console.log("123");
        // this.snap();      
    }
    componentDidMount(){
        this.snap();    
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

                    <img src={logoimg} style={{ height: '120%', width: '120%' }} />


                </div>
                <Divider />
                <List>{mailFolderListItems}</List>
                <Divider />
                <List>{otherMailFolderListItems}</List>
            </div>
        );
        console.log("123123123");
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
                                Video snapshot
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
                                    <video controls style={{width:"500px"}}>
                                        <source src="http://dev.musite.net/test/videoSnap/logo.mp4" type="video/mp4"></source>
                                    </video>
                                    <br/>
                                    <canvas id="canvas" width="640" height="480"></canvas>
                                    <br />
                                    <Button id="snap" onClick={this.snap()}>
                                        Snap Photo
                                     </Button>
                                    {/* <Button id="snap" onClick="snap()">
                                        Search
                                     </Button> */}
                                    
                                   
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
    snap() {

        var video = document.querySelector('video');
        var canvas = document.querySelector('canvas');
        // console.log(document.all[name]);
        var w, h, ratio;
        var context = this.canvas.getContext('2d');
        video.addEventListener('loadedmetadata', function () {
            ratio = video.videoWidth / video.videoHeight;
            w = video.videoWidth - 100;
            h = parseInt(w / ratio, 10);
            canvas.width = w;
            canvas.height = h;
        }, false);

        this.context.fillRect(0, 0, this.w, this.h);
        this.context.drawImage(this.video, 0, 0, this.w, this.h);
        var dataURL = this.canvas.toDataURL('image/png').replace(/^data:image\/(png|jpg);base64,/, '');
        // console.log(dataURL);
        var target = document.getElementById('target');



        app.models.predict("c443119bf2ed4da98487520d01a0b1e3", { base64: dataURL }).then(
            function (response) {
                // console.log(response);
                // console.log(response.outputs[0].data.regions.length);
                var element = document.createElement('h1');

                for (var i = 0; i < response.outputs[0].data.regions.length; i++) {
                    if (response.outputs[0].data.regions[i].data.concepts[0].value >= 0.2) {

                        element.appendChild(document.createTextNode(response.outputs[0].data.regions[i].data.concepts[0].name + "\t"));
                        target.appendChild(element);
                        console.log(response.outputs[0].data.regions[i].data.concepts[0].name);
                    }
                }



            });

    }
}

Video.propTypes = {
    classes: PropTypes.object.isRequired,
    theme: PropTypes.object.isRequired,
    height: PropTypes.string,
};

Video.defaultProps = {
    height: '500px'
};
export default withStyles(styles, { withTheme: true })(Video);