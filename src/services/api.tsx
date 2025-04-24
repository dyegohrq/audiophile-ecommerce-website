// https://data-audiophile-ecommerce-website.vercel.app/data.json

import axios from "axios";

export const api = axios.create({
    baseURL: 'https://data-audiophile-ecommerce-website.vercel.app'
})
