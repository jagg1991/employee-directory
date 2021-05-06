import axios from "axios";

const BASEURL = "https://randomuser.me/api";
APIKEY = "?results=";


export default {

    getUsers: function (query) {
        return axios.get(BASEURL + APIKEY + query);
    }
};
