import axios from 'axios'

axios.defaults.headers.post['Access-Control-Allow-Origin'] = '*'

const apiCoopersProject = axios.create({
    baseURL: process.env.NEXT_PUBLIC_BASE_URL_BACKEND
})

export { apiCoopersProject }
