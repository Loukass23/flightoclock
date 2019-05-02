import React, { Component } from 'react'
import { connect } from 'react-redux'
import { createPost } from '../store/actions/postActions'
import { Link } from 'react-router-dom'
import { compose } from 'redux'
import firebase from "firebase";
import { firestoreConnect } from 'react-redux-firebase'
import { bindActionCreators } from 'redux'
import countryList from 'react-select-country-list'

class addPost extends Component {

    componentDidMount() {


    }
    state = {
        title: '',
        cityName: '',
        file: null,
        isUploading: false,
        progress: 0,
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
        this.props.history.push('/')
    }
    handleUpload = () => {
        const storageService = firebase.storage();
        const storageRef = storageService.ref();

        console.log(this.state.file.name)
        this.setState({ isUploading: true, progress: 0 })

        const uploadTask = storageRef.child(`posts/${this.state.file.name}`).put(this.state.file); //create a child directory called images, and place the file inside this directory

        uploadTask.on('state_changed', (snapshot) => {
            console.log(snapshot)
            let prog = Math.round(snapshot.bytesTransferred * 100 / snapshot.totalBytes)
            this.setState({ progress: prog });

        }, (error) => {

            console.log(error);
        }, () => {
            console.log('success');
            this.setState({ isUploading: false, progress: 100 })
            firebase
                .storage()
                .ref("posts")
                .child(`${this.state.file.name}`)
                .getDownloadURL()
                .then(url => this.setState({ photoURL: url }));

        });
    }


    render() {
        const progressBarUp = {
            width: this.state.progress + "%"
        }
        const { input } = this.props
        //if (!auth.uid) return <Redirect to='/signin' />
        console.log(this.props)
        return (
            <div className="container">
                <div className="row valign-wrapper">
                    <div className="col s1" >
                        <Link to='/posts'><div className="btn-floating btn-large waves-effect waves-light red lighten-3">
                            <i className=" white-text lighten-3 fas fa-2x fa-arrow-left " /></div></Link>
                    </div>
                    <h4 className="col s11" >
                        Add New Post
                    </h4>
                </div>
                <form onSubmit={this.handleSubmit} className="white">



                    <div className="input-field">
                        <label htmlFor="title" >Title</label>
                        <input required type="text" id="title" onChange={this.handleChange} />
                    </div>

                    <div className="input-field">

                        <select required
                            value={this.state.value}
                            onChange={this.handleChange} id="countryName">

                            {this.state.options && this.state.options.map((country, i) => {
                                return (
                                    <option htmlFor="countryName" key={i} value={country.label}>{country.label}</option>

                                )
                            })}
                        </select>
                        <label>Select City</label>
                    </div>
                    <div className="input-field">
                        <select required onChange={this.handleChange} id="price">
                            <option >Cheap</option>
                            <option >Moderate</option>
                            <option >Expensive</option>
                        </select>
                        <label htmlFor="price">Price</label>
                    </div>
                    <div className="input-field">
                        <input id="duration" type="text" length="10" className="materialize-textarea" onChange={this.handleChange} />
                        <label htmlFor="duration">Duration in hours</label>
                    </div>
                    <div className="input-field">
                        <label htmlFor="summary" >Summary</label>
                        <textarea id="summary" cols="30" rows="10" className="materialize-textarea" onChange={this.handleChange}></textarea>
                    </div>
                    <div className="row">
                        <div className="col s6 file-field input-field">
                            <div className="btn">
                                <span>File</span>
                                <input accept="image/*" type="file" {...input} onChange={(e) => {
                                    this.setState({ file: e.target.files[0], isUploading: true }, this.handleUpload)
                                }} />
                            </div>
                            <div className="file-path-wrapper ">
                                <input className="file-path validate" type="text" />
                            </div>
                            {this.state.isUploading && <div className="progress">
                                <div className="determinate" style={progressBarUp}></div>
                            </div>}
                        </div>
                        <div className="col s6">

                            {this.state.photoURL && <img width="100px" src={this.state.photoURL} alt="" />}
                        </div>

                    </div>
                    <div className="input-field">




                    </div>
                    <div className="input-field">
                        <button className="btn pink lighten-1 z-depth-0">Create</button>
                    </div>
                </form>

            </div>
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
)(addPost)

// export default compose(
//     connect(mapStatetoProps), 
//     firestoreConnect([
//         { collection: 'cities', orderBy: ['createdAt', 'desc'] }
//     ])
// )(CreateItinerary)




