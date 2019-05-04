import React, { Component } from 'react'
import { connect } from 'react-redux'
import { signIn } from '../../store/actions/authActions'
import { googleSignIn } from '../../store/actions/authActions'
import { Redirect } from 'react-router-dom'
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { withStyles } from '@material-ui/core/styles';
import MenuItem from '@material-ui/core/MenuItem';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { Grid } from '@material-ui/core'
import Fab from '@material-ui/core/Fab';
import Divider from '@material-ui/core/Divider';


const styles = theme => ({
    container: {
        display: 'flex',
        flexWrap: 'wrap',
    },
    textField: {
        marginLeft: theme.spacing.unit,
        marginRight: theme.spacing.unit,
        width: 200,
    },
    dense: {
        marginTop: 19,
    },
    menu: {
        width: 200,
    },
});

class SignIn extends Component {
    state = {
        email: '',
        password: ''

    }
    handleChange = (e) => {
        this.setState({
            [e.target.id]: e.target.value
        })
    }
    handleSubmit = (e) => {
        e.preventDefault();
        this.props.signIn(this.state)
    }
    handleGoogleButton = (e) => {
        e.preventDefault();
        this.props.googleSignIn()
    }
    render() {
        const { authErr, classes, auth } = this.props
        if (auth.uid) return <Redirect to='/' />
        return (
            <form onSubmit={this.handleSubmit} className={classes.container} noValidate autoComplete="on">
                <Grid container
                    spacing={0}
                    alignItems="center"
                    justify="center">
                    <Grid item xs={6}>
                        <p className='col s8' >Google sign in</p>
                    </Grid>
                    <Grid item xs={6}>
                        <Fab size="medium" onClick={this.handleGoogleButton} color="primary" aria-label="Add" className={classes.fab}>
                            <i className=" white-text lighten-3 fab fa-1x fa-google" />
                        </Fab>


                    </Grid>
                    <Grid item xs={6}>
                        <p className='col s8' >Email sign in</p>
                    </Grid>
                    <hr />
                    <Grid item xs={12} >
                        <TextField
                            required
                            id="email"
                            label="Email"
                            defaultValue="email"
                            className={classes.textField}
                            margin="normal"
                            type="email"
                            onChange={this.handleChange}
                        />
                    </Grid>
                    <Grid item xs={12} >
                        <TextField
                            id="standard-password-input"
                            label="Password"
                            className={classes.textField}
                            type="password"
                            autoComplete="current-password"
                            margin="normal"
                        />
                    </Grid>
                    <Grid item xs={12} >
                        <Button onClick={this.handleSubmit} variant="contained" color="primary" className={classes.button}>
                            LOGIN
                    </Button>


                        <div className="red-text-center">
                            {authErr ? <p>{authErr}</p> : null}
                        </div>
                    </Grid>



                </Grid>
            </form >

        )
    }
}
const mapStateToProp = (state) => {
    return {
        authErr: state.auth.authErr,
        auth: state.firebase.auth
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        signIn: (creds) => dispatch(signIn(creds)),
        googleSignIn: () => dispatch(googleSignIn())

    }
}
//export default connect(mapStateToProp, mapDispatchToProps)(SignIn)
export default connect(mapStateToProp, mapDispatchToProps)(withStyles(styles)(SignIn));
