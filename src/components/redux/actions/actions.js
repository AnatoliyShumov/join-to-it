import * as types from './actionTypes';
import {userService} from '../../services/user.services';

export const clearItems = () =>  {
    return { type: types.ClEAR_ITEMS}
}

export const ShowHideSidebar  = () => {
    return { type: types.SHOW_HIDE_SIDEBAR }
}

export const getData = () => {
    return (dispatch, getState) =>
        new Promise(function(resolve, reject) {
            dispatch(request());

            userService.getUserData('')
                .then(
                    user => {
                        resolve(dispatch(success(user)));
                    },
                    error => {
                        reject(dispatch(failure(error)));
                    }
                );
        });
    function request() { return { type: types.GET_ITEM_REQUEST } }
    function success(data) { return { type: types.GET_ITEM_SUCCESS, data } }
    function failure(error) { return { type: types.GET_ITEM_FAILURE, error } }
}

export const getDataUser = (value) => {
    const user = "/"+value;

    return (dispatch, getState) =>
        new Promise(function(resolve, reject) {
            dispatch(request());

            userService.getUserData(user)
                .then(
                    user => {
                        resolve(dispatch(success(user)));
                    },
                    error => {
                        reject(dispatch(failure(error)));
                    }
                );
        });
    function request() { return { type: types.GET_ITEM_USER_REQUEST } }
    function success(data) { return { type: types.GET_ITEM_USER_SUCCESS, data } }
    function failure(error) { return { type: types.GET_ITEM_USER_FAILURE, error } }
}