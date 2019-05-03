import React, { Component } from 'react'
import { connect } from 'react-redux'
import { createPost } from '../store/actions/postActions'
import { Link } from 'react-router-dom'
import { compose } from 'redux'
import firebase from "firebase";
import { firestoreConnect } from 'react-redux-firebase'
import { bindActionCreators } from 'redux'
import countryList from 'react-select-country-list'
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { Grid } from '@material-ui/core'
import Fab from '@material-ui/core/Fab';
import { withStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import NativeSelect from '@material-ui/core/NativeSelect';
import Input from '@material-ui/core/Input';
import LinearProgress from '@material-ui/core/LinearProgress';
import Typography from '@material-ui/core/Typography';
import { Redirect } from 'react-router'



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
    textArea: {
        marginLeft: theme.spacing.unit,
        marginRight: theme.spacing.unit,
        width: 600,
    },
    input: {
        marginLeft: theme.spacing.unit,
        marginRight: theme.spacing.unit,
        display: 'none',
    },
    inputLabel: {
        marginLeft: theme.spacing.unit,
        marginRight: theme.spacing.unit,
        width: 200,
    },
    formControl: {
        marginLeft: theme.spacing.unit,
        marginRight: theme.spacing.unit,
        marginTop: 12,
    },
    progress: {

        marginLeft: theme.spacing.unit,
        marginRight: theme.spacing.unit,
        marginTop: 20,
    },
    dense: {
        marginTop: 19,
    },
    menu: {
        width: 200,
    },
});

class addPost extends Component {

    componentDidMount() {


    }
    state = {
        title: '',
        cityName: '',
        file: null,
        isUploading: false,
        progress: 0,
        buffer: 0,
        photoURL: "",
        duration: null,
        price: null,
        rating: null,
        summary: null,
        options: countryList().getData(),

    }
    handleChange = (e) => {
        this.setState({
            [e.target.id]: e.target.value
        })
    }
    handleSubmit = (e) => {
        console.log(this.state)
        e.preventDefault();
        this.props.createPost(this.state)
        this.props.history.push('/posts')
    }
    handleUpload = () => {
        const storageService = firebase.storage();
        const storageRef = storageService.ref();
        const diff = Math.random() * 10;



        console.log(this.state.file.name)
        this.setState({ isUploading: true, progress: 0 })

        const uploadTask = storageRef.child(`posts/${this.state.file.name}`).put(this.state.file); //create a child directory called images, and place the file inside this directory

        uploadTask.on('state_changed', (snapshot) => {
            console.log(snapshot)
            let prog = Math.round(snapshot.bytesTransferred * 100 / snapshot.totalBytes)
            this.setState({ progress: prog, buffer: prog + diff });

        }, (error) => {

            console.log(error);
        }, () => {
            console.log('success');
            this.setState({ isUploading: false, progress: 100, })
            firebase
                .storage()
                .ref("posts")
                .child(`${this.state.file.name}`)
                .getDownloadURL()
                .then(url => this.setState({ photoURL: url }));

        });
    }


    render() {

        const { input, classes, auth } = this.props
        if (!auth.uid) return <Redirect to='/signin' />
        console.log(this.props)
        return (
            <React.Fragment>
                <Grid container spacing={24}>
                    <Grid item xs={12} >
                        <Typography color="primary" variant="h6" gutterBottom>
                            New Travel Post
                        </Typography>
                    </Grid>

                    <Grid item xs={12} sm={6}>
                        <TextField
                            required
                            id="title"
                            label="Title"
                            className={classes.textField}
                            margin="normal"
                            type="text"
                            onChange={this.handleChange}
                        />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <FormControl className={classes.formControl}>
                            <InputLabel htmlFor="countryName">Country</InputLabel>
                            <Select
                                native
                                value={this.state.value}
                                onChange={this.handleChange}
                                className={classes.inputLabel}
                                inputProps={{
                                    name: 'country',
                                    id: 'countryName',
                                }}
                            >
                                {this.state.options && this.state.options.map((country, i) => {
                                    return (
                                        <option htmlFor="countryName"
                                            key={i} value={country.label}>
                                            {country.label}
                                        </option>
                                    )
                                })}
                            </Select>
                        </FormControl>
                    </Grid>
                    <Grid item xs={12}>
                        <TextField
                            id="summary"
                            label="Summary"
                            multiline={true}
                            rows={4}
                            className={classes.textArea}
                            placeholder="Summary"
                            helperText="Tell your story..."
                            fullWidth
                            margin="normal"
                            onChange={this.handleChange}
                            InputLabelProps={{
                                shrink: true,
                            }}
                        />
                    </Grid>
                    <Grid item xs={12} sm={6} >
                        <Input
                            id="image-input"
                            className={classes.input}
                            accept="image/*"
                            type="file"
                            multiple
                            {...input}
                            onChange={(e) => {
                                this.setState({ file: e.target.files[0], isUploading: true }, this.handleUpload)
                            }} />
                        <label htmlFor="image-input">
                            <Button variant="outlined" color="secondary" component="span" className={classes.button}>
                                Cover Image
                                </Button>

                        </label>
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <LinearProgress color="secondary" variant="buffer" value={this.state.progress} valueBuffer={this.state.buffer} className={classes.progress} />
                    </Grid>
                    <Grid item xs={12}>
                        {this.state.photoURL && <img width="100px" src={this.state.photoURL} alt="" />}
                    </Grid>
                    <Grid item xs={6}>
                        <Button component={Link} to="/post" variant="contained" className={classes.button} onClick={this.handleSubmit}>
                            Cancel
                         </Button>
                    </Grid>
                    <Grid item xs={6}>
                        <Button variant="contained" color="primary" className={classes.button} onClick={this.handleSubmit}>
                            Create
                         </Button>
                    </Grid>

                </Grid>
            </React.Fragment>

        )
    }
}
const mapDispatchToProps = (dispatch) => {
    return {

        createPost: (post) => dispatch(createPost(post))

    }
}
const mapStateToProps = (state) => {
    console.log(state)
    return {
        // cities: state.firestore.ordered.cities,

    }
}

export default compose(
    connect(mapStateToProps, mapDispatchToProps),
    firestoreConnect([
        // { collection: 'cities', orderBy: ['createdAt', 'desc'] }
    ]),
)(withStyles(styles)(addPost))



// export default compose(
//     connect(mapStatetoProps), 
//     firestoreConnect([
//         { collection: 'cities', orderBy: ['createdAt', 'desc'] }
//     ])
// )(CreateItinerary)




