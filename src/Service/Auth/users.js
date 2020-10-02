import axios from "axios"
import { secretAuth } from './client'
import qs from 'qs'

export const getAuth = async () => {

  const clientId = secretAuth.reactClientId
  const clientSecret = secretAuth.reactClientSecret
  console.log(process);
  console.log(process.env);
  console.log(clientId, clientSecret)
  console.log(process.env.NODE_ENV)

  const headers = {
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/x-www-form-urlencoded',
    },
    auth: {
      username: clientId,
      password: clientSecret,
    },
  };
  const data = {
    grant_type: 'client_credentials',
  };
  try {
    const response = await axios.post(
      'https://accounts.spotify.com/api/token',
      qs.stringify(data),
      headers
    );
    console.log("olaa",response.data);
    console.log(response.data.access_token);
    return response.data.access_token;
  } catch (error) {
    console.log(error);
  }
};

const redirect_uri = 'REDIRECT_URI'

