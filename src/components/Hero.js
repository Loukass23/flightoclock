import React from 'react';
import LazyHero from 'react-lazy-hero';
import PanamaImg from '../images/H&N Travel Pic/Panama.png';
import PhilippinesImg from '../images/H&N Travel Pic/Philippines.png';
import PhilipImg from '../images/H&N Travel Pic/Phili.jpg';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';
import Logo from '../images/First Flightoclock Logo.png'

function Hero() {


    return (
        <div>
            <img height="100px" src={Logo} alt="" />
            {/* <div>
                <LazyHero imageSrc={Logo} opacity={0.5}>
                    <Typography color="primary" component="h2" variant="h1" gutterBottom>

                    </Typography>
                </LazyHero>


            </div> */}
        </div >
    )
}

export default Hero


