import axios from 'axios'

const configAuth = axios.create({
  baseURL:'https://accounts.spotify.com/api/token'
})

export default configAuth
