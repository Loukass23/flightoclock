import React, { Component } from 'react'
import { Grid } from '@material-ui/core'
import Typography from '@material-ui/core/Typography';

import { getIgProfile, getIgData } from '../store/actions/igActions'
import { connect } from 'react-redux'
import Loader from 'react-loader-spinner'
import Paper from '@material-ui/core/Paper';


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
                    {igUser &&
                        <Paper style={{ padding: 6 }} elevation={3}>
                            <Typography variant="h6" color={'primary'} >{igUser.full_name}</Typography>
                            <Typography variant="subtitle1" color={'secondary'} >{igUser.bio}</Typography>
                        <Typography variant="subtitle1" color={'secondary'} >{igUser.counts.followed_by}</Typography>
                        </Paper>}

                </header>
                <div className="inner gallery">
                    {!igData && <Loader
                        type="Plane"
                        color="primary"
                        height="100"
                        width="100"
                    />}
                    <Grid container spacing={8}>

                        {igData && igData.map(post => {
                            return (
                                <Grid height='250px' key={post.id} item xs={12} sm={4}>
                                    <a href={post.link} target="_blank"  >
                                        <img
                                            alt="post"
                                            style={{ width: '100%', height: 'auto' }}
                                            src={post.images.low_resolution.url}
                                        /></a>
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