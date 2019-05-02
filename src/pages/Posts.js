import React, { Component } from 'react'
import { connect } from 'react-redux'
import { firestoreConnect } from 'react-redux-firebase'
//import { compose, withHandlers, lifecycle } from 'recompose'
import { compose } from 'redux'
import { Link } from 'react-router-dom'
import firebase from "firebase";
import { withFirestore, isLoaded, isEmpty } from 'react-redux-firebase'
import Post from '../components/Post'







class Posts extends Component {
    state = {
        myCity: null
    }
    componentDidMount() {
        // const param = this.props.match.params.name

        // firebase
        //     .firestore()
        //     .collection("cities")
        //     .where("cityName", '==', param)
        //     .get()
        //     .then(querySnapshot => {
        //         const cities = [];
        //         querySnapshot.forEach(function (doc) {

        //             cities.push(doc.data())
        //         })
        //         const myCity = cities[0]
        //         console.log(myCity)
        //         this.setState({ myCity });

        //     })
        //     .catch(function (error) {
        //         console.log("Error getting documents: ", error);
        //     });
    }

    render() {
        const { posts } = this.props;
        console.log(this.props)
        return (
            <div className="dashboard container">
                <div className="row valign-wrapper" >
                    <div className="col s1" >
                        <Link to='/city'><div className="btn-floating btn-medium waves-effect waves-light red lighten-3">
                            <i className=" white-text lighten-3 fas fa-2x fa-arrow-left " /></div></Link>
                    </div>
                    <h4 className="col s11" >
                        {/* {city} */}
                    </h4>
                </div>

                {posts && posts.map(post => {
                    return (

                        <Post post={post} key={post.id} />

                    )
                })}
                <div className="row">
                    <Link to='/posts/add'><div className="btn-floating btn-large waves-effect waves-light red lighten-3">
                        <i className="material-icons">add</i></div></Link>
                </div>

            </div>
        )
    }
}
const mapStateToProps = (state, ownProps) => {
    console.log(state.firestore)

    // const cityStr = ownProps.match.params.name
    // const itinerariesList = state.firestore.ordered.itineraries
    // const citiesList = state.firestore.ordered.cities
    // const itineraries = itinerariesList ? itinerariesList.filter(e => {
    //     return e.cityName === cityStr
    // }) : null

    // const cities = citiesList ? citiesList.filter(e => {
    //     return e.cityName === cityStr
    // }) : null

    return {
        posts: state.firestore.ordered.posts,
        // city: cityStr,
        // cities: cities
        // auth: state.firebase.auth,
        //         // notifications: state.firestore.ordered.notifications
    }
}
const fconnect = firestoreConnect([
    { collection: 'posts', orderBy: ['createdAt', 'desc'] },
    //{ collection: 'cities', orderBy: ['createdAt', 'desc'] }

    // {
    //     collection: 'cities',
    //     where: [
    //         ['cityName', '==', 'London']
    //     ]

    // }
])

//export default connect(mapStateToProps)(ItineraryChoice)
export default compose(
    connect(mapStateToProps),
    fconnect)(Posts)


// const enhance = compose(
//     withFirestore, // add firestore to props
//     lifecycle({
//         componentDidMount() {
//             console.log(this.props.match.params.name)
//             this.props.firestore.collection('cities').get() // equivalent without withHandlers
//             this.props.firestore.get('itineraries')
//         }
//     }),
//     connect((state) => ({
//         myCity: state.firestore.ordered.cities,
//         itineraries: state.firestore.ordered.itineraries
//     }))
// )

// export default enhance(ItineraryChoice)
