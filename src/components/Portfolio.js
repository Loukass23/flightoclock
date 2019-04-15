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
                </div>
            </article>

        )
    }
}

export default Portfolio
