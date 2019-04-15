import React, { Component } from 'react'
import { Grid } from '@material-ui/core'
import { getIgProfile, getIgData } from '../store/actions/igActions'
import { connect } from 'react-redux'



class Instagram extends Component {
    componentDidMount() {
        this.props.getIgProfile()
        this.props.getIgData()

    }

    render() {
        const { igUser, igData } = this.props
        console.log(this.props)
        return (
            <article className="container box style2">
                <header >
                    {igUser && <><h2 id="ig-header">{igUser.full_name}</h2>
                        <p style={{ color: "primary" }} id="ig-header">{igUser.bio}</p></>}
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
        );
    }
}
const mapStateToProp = (state) => {
    return {
        igUser: state.ig.igUser,
        igData: state.ig.igData
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        getIgProfile: () => dispatch(getIgProfile()),
        getIgData: () => dispatch(getIgData())
    }
}
export default connect(mapStateToProp, mapDispatchToProps)(Instagram)