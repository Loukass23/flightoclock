import authReducer from './authReducer'
import igReducer from './igReducer'
import postReducer from './postReducer'
import { combineReducers } from 'redux'
import { firestoreReducer } from 'redux-firestore'
import { firebaseReducer } from 'react-redux-firebase'

const rootReducer = combineReducers({
    auth: authReducer,
    firestore: firestoreReducer,
    firebase: firebaseReducer,
    ig: igReducer,
    post: postReducer,
});


export default rootReducer
