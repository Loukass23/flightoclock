import React, { Component } from 'react'
import axios from 'axios';
import { options } from '../config/IgConfig'
import Instafeed from "react-instafeed";
import { Grid } from '@material-ui/core'




export class Portfolio extends Component {
    componentDidMount() {
        Instafeed(options).then((res) => {

            const igData = res.data;
            this.setState({ igData });

        }).catch((err) => {
            console.log(err)
        })
        axios.get(options.userURL + options.accessToken)
            .then((res) => {
                const igUser = res.data.data;
                this.setState({ igUser });


            }).catch((err) => {
                console.log(err)

            })
    }

    state = {
        igData: [],
        igUser: []

    }
    // handleChange = (e) => {
    //     this.setState({
    //         [e.target.id]: e.target.value
    //     })
    // }

    render() {
        const igData = this.state.igData
        const igUser = this.state.igUser
        console.log(igData)
        return (
            <article className="container box style2">
                <header >
                    <h2 id="ig-header">{igUser.full_name}</h2>
                    <p style={{ color: "primary" }} id="ig-header">{igUser.bio}</p>
                </header>
                <div className="inner gallery">

                    <Grid container spacing={8}>
                        {igData && igData.map(post => {
                            return (
                                <Grid height='250px' key={post.id} item xs={12} sm={4}>
                                    <img
                                        alt="post"
                                        style={{ width: '100%', height: 'auto' }}
                                        src={post.images.low_resolution.url}
                                    />
                                </Grid>

                            )
                        })}

                    </Grid>


                    {/* <div className="row gtr-0">
                        <div className="col-3 col-12-mobile"><a href="images/fulls/01.jpg" className="image fit"><img
                            src="images/thumbs/01.jpg" alt="" title="Ad infinitum" /></a></div>
                        <div className="col-3 col-12-mobile"><a href="images/fulls/02.jpg" className="image fit"><img
                            src="images/thumbs/02.jpg" alt="" title="Dressed in Clarity" /></a></div>
                        <div className="col-3 col-12-mobile"><a href="images/fulls/03.jpg" className="image fit"><img
                            src="images/thumbs/03.jpg" alt="" title="Raven" /></a></div>
                        <div className="col-3 col-12-mobile"><a href="images/fulls/04.jpg" className="image fit"><img
                            src="images/thumbs/04.jpg" alt="" title="I'll have a cup of Disneyland, please" /></a></div>
                    </div>
                    <div className="row gtr-0">
                        <div className="col-3 col-12-mobile"><a href="images/fulls/05.jpg" className="image fit"><img
                            src="images/thumbs/05.jpg" alt="" title="Cherish" /></a></div>
                        <div className="col-3 col-12-mobile"><a href="images/fulls/06.jpg" className="image fit"><img
                            src="images/thumbs/06.jpg" alt="" title="Different." /></a></div>
                        <div className="col-3 col-12-mobile"><a href="images/fulls/07.jpg" className="image fit"><img
                            src="images/thumbs/07.jpg" alt="" title="History was made here" /></a></div>
                        <div className="col-3 col-12-mobile"><a href="images/fulls/08.jpg" className="image fit"><img
                            src="images/thumbs/08.jpg" alt="" title="People come and go and walk away" /></a></div>
                    </div> */}
                </div>
            </article>

        )
    }
}

export default Portfolio
