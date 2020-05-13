import axios from 'axios';

const baseApiUrl = 'http://localhost:3000';

export const getItemsDb = () => {
    return axios.get(baseApiUrl)
        .then(response => response.data);
};

export const postItemsDb = () => {
    return axios.put(baseApiUrl.concat("/item"))
        .then((response) => {
            console.log(response);
        }, (error) => {
            console.log(error);
        });
};