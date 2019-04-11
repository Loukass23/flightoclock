import { AutoRotatingCarousel } from 'material-auto-rotating-carousel';
import Slide from '@material-ui/core/Slide';
import Img from '../images/H&N Travel Pic/Phili.jpg';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardMedia from '@material-ui/core/CardMedia';

import React, { Component } from 'react'

export class Carousel extends Component {
    constructor(props) {
        super(props);

        this.state = {
            open: true,

        }
    }

    render() {
        // const Slide = require('./Slide').default;
        const { red, blue, green } = require('@material-ui/core/colors');
        const Button = require('@material-ui/core/Button').default;
        return (
            <div style={{ position: 'relative', width: '100%', height: '100%' }}>




                <AutoRotatingCarousel
                    label='Get started'
                    open={this.state.open}
                    onClose={() => this.setState({ open: false })}
                    onStart={() => this.setState({ open: false })}

                >
                    <Slide direction="left" in={this.state.open} mountOnEnter unmountOnExit>
                        <Card >
                            <CardActionArea>
                                <CardMedia
                                    component="img"
                                    alt="Contemplative Reptile"

                                    height="140"
                                    image={Img}
                                    title="Contemplative Reptile"
                                />
                            </CardActionArea>
                        </Card>
                    </Slide>
                    <Slide direction="up" in={this.state.open} mountOnEnter unmountOnExit>
                        <Card >
                            <CardActionArea>
                                <CardMedia
                                    component="img"
                                    alt="Contemplative Reptile"

                                    height="140"
                                    image={Img}
                                    title="Contemplative Reptile"
                                />
                            </CardActionArea>
                        </Card>
                    </Slide>
                    <Slide direction="up" in={this.state.open} mountOnEnter unmountOnExit>
                        <Card >
                            <CardActionArea>
                                <CardMedia
                                    component="img"
                                    alt="Contemplative Reptile"

                                    height="100%"
                                    image={Img}
                                    title="Contemplative Reptile"
                                />
                            </CardActionArea>
                        </Card>
                    </Slide>
                </AutoRotatingCarousel>
            </div>
        )
    }
}
export default Carousel

