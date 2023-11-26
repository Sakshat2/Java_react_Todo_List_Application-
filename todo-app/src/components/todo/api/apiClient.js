import axios from 'axios'
export const apiClient= axios.create(
    {
        baseURL:'http://localhost:8080'
        // headers:'http://localhost:3000'
    }
);