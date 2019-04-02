import React, { Component } from 'react'
import axios from 'axios';
import { options } from '../config/IgConfig'
import Instafeed from "react-instafeed";




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
        console.log(igUser)
        return (
            <article className="container box style2">
                <header>
                    <h2>{igUser.full_name}</h2>
                    <p>{igUser.bio}</p>
                </header>
                <div className="inner gallery">
                    <div className="row gtr-0">

                        {igData && igData.map(post => {
                            return (
                                <div key={post.id} className="col-3 col-12-mobile"><a href="" className="image fit"><img
                                    src={post.images.thumbnail.url} alt="" title="Ad infinitum" /></a></div>

                            )
                        })}
                    </div>
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
