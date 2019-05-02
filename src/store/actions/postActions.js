export const createPost = (post) => {
    //WHITHOUT THUNK
    // return {
    //     type: 'ADD_PROJECT',
    //     project: project
    // }

    return (dispatch, getState, {
        getFirebase,
        getFirestore
    }) => {
        const profile = getState().firebase.profile
        const authorId = getState().firebase.auth.uid
        const firestore = getFirestore();
        firestore.collection('posts').add({
            //...itinerary,
            cityName: post.cityName,
            title: post.title,
            authorFirstName: profile.firstName,
            authorLastName: profile.lastName,
            authorId: authorId,
            photoURL: post.photoURL,
            summary: post.summary,
            price: post.price,
            rating: post.rating,
            duration: post.duration,
            createdAt: new Date()
        }).then(() => {
            dispatch({
                type: 'CREATE_POST',
                post
            });
        }).catch((err) => {
            dispatch({
                type: 'CREATE_ITINERARY_POST',
                err
            })
        })

    }
}