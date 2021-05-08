import axios from "axios";

const BASEURL = "https://randomuser.me/api/?nat=us,dk,fr,gb&results=30";




// eslint-disable-next-line import/no-anonymous-default-export
const API = {
    search: function () {
        return axios.get(BASEURL);
    }
};

export default API;
