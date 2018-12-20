// all code related to Unsplash and Axios goes here
import axios from 'axios';

//create method creates instance of axios with default properties
export default axios.create({
    baseURL: 'https://api.unsplash.com',
    headers: {
        Authorization:
          "Client-ID 3c06e7898f4735acf44c22e8ee5de1ffb0e6578d299d861727f446454fceda6a"
      }
});