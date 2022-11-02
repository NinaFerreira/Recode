import { create } from 'axios';

const api = create({
    baseURL: "http://airlinestickets-001-site1.atempurl.com/api",
    responseType: 'json',
    headers: {
        'Content-Type': "application/json",
        'Accept': "application/json",
    },
});

export default api;