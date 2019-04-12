import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Photos from '../components/Photos'
import Insta from '../components/Portfolio'
import Map from '../components/Map'
import AppBar from '@material-ui/core/AppBar';
import Typography from '@material-ui/core/Typography';
import Hero from '../components/Hero';
import SlideComp from '../components/slideshow/SlideComp';
import Slideshow from "../components/slideshow/Slideshow";
import slide1 from "../components/slideshow/assets/Canada.png";
import slide2 from "../components/slideshow/assets/Yosemite.png";
import slide3 from "../components/slideshow/assets/Scotland.png";
import slide4 from "../components/slideshow/assets/Singapore.png";
import slide5 from "../components/slideshow/assets/Indonesia.png";
import '../components/slideshow/custom.css'

const slides = [slide1, slide2, slide3, slide4, slide5];

const style = {
    container: "screenW screenH dGray col",
    header: "flex1 fCenter fSize2",
    main: "flex8 white",
    footer: "flex1 fCenter"
};

function TabContainer(props) {

    return (
        <Typography component="div" style={{ padding: 0 }}>
            {props.children}
        </Typography>
    );
}

TabContainer.propTypes = {
    children: PropTypes.node.isRequired,
};

const styles = theme => ({
    root: {
        flexGrow: 1,
        backgroundColor: theme.palette.background.paper,
    },
});

class Landing extends React.Component {
    state = {
        value: 0,
    };

    handleChange = (event, value) => {
        this.setState({ value });
    };

    render() {
        const { classes } = this.props;
        const { value } = this.state;

        return (
            <div className={classes.root}>
                <AppBar position="static">
                    <Tabs centered value={value} onChange={this.handleChange}>
                        <Tab label="Flightoclock" />
                        <Tab label="Photos" />
                        <Tab label="Instagram" />
                        <Tab label="Map" />
                    </Tabs>
                </AppBar>
                {value === 0 && <TabContainer >
                    <div className={style.container}>

                        <Slideshow slides={slides} />
                    </div>
                </TabContainer>}
                {value === 1 && <TabContainer><Photos /></TabContainer>}
                {value === 2 && <TabContainer><Insta /></TabContainer>}
                {value === 3 && <TabContainer><Map /></TabContainer>}
            </div>
        );
    }
}

Landing.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Landing);
