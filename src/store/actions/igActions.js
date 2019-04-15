import axios from 'axios';
import { options } from '../../config/IgConfig'
import Instafeed from "react-instafeed";


export const getIgProfile = () => {
    return (dispatch) => {
        return axios.get(options.userURL + options.accessToken)
            .then((res) => {
                dispatch({
                    type: 'GET_IG_USER',
                    user: res.data
                })
            }).catch((err) => {
                console.log(err)
                dispatch({
                    type: 'GET_IG_ERROR',
                    err
                })
            })
    }

}

export const getIgData = () => {
    return (dispatch) => {
        Instafeed(options).then((res) => {
            dispatch({
                type: 'GET_IG_DATA',
                user: res.data
            })
        }).catch((err) => {
            console.log(err)
            dispatch({
                type: 'GET_IG_ERROR',
                err
            })
        })
    }

}

