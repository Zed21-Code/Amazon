import axios from "axios";

const instance = axios.create({
    baseURL: 'https://amazon-clone2-6xsg.onrender.com/'
})

export default instance;