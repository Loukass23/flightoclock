import React from 'react';
import LazyHero from 'react-lazy-hero';

import PanamaImg from '../images/H&N Travel Pic/Panama.png';
import PhilippinesImg from '../images/H&N Travel Pic/Philippines.png';


function Hero() {
    function importAll(r) {
        return r.keys().map(r);
    }
    var Carousel = require('react-responsive-carousel').Carousel;
    const images = importAll(require.context('./', false, /\.(png|jpe?g|svg)$/));
    return (
        <div>
            <div>
                <LazyHero imageSrc={PanamaImg} opacity={0.5}>
                    <h1>flightoclock</h1>
                </LazyHero>
                <Carousel showArrows={true} >
                    <div>
                        <img src={PanamaImg} />
                        <p className="legend">Legend 1</p>
                    </div>
                    <div>
                        <img src={PhilippinesImg} />
                        <p className="legend">Legend 2</p>
                    </div>
                    {/* <div>
                        <img src="assets/3.jpeg" />
                        <p className="legend">Legend 3</p>
                    </div>
                    <div>
                        <img src="assets/4.jpeg" />
                        <p className="legend">Legend 4</p>
                    </div>
                    <div>
                        <img src="assets/5.jpeg" />
                        <p className="legend">Legend 5</p>
                    </div>
                    <div>
                        <img src="assets/6.jpeg" />
                        <p className="legend">Legend 6</p>
                    </div> */}
                </Carousel>

            </div>
        </div>
    )
}

export default Hero


