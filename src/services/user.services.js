import axios from 'axios';

export const userService = {
    getUserData,
};

function  getUserData (user) {

    const requestOptions ={
        method: 'GET',
        url: `https://jsonplaceholder.typicode.com/users${user}`,
    };
    return axios( requestOptions)
        .then(user => {
            return user.data;
        });
}