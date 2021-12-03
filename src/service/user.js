import axios from "axios";
import authHeader from '../utils/authHeader';

const API_URL = process.env.API_URL;

class UserSerivce {
  login(user) {
    return axios
      .post(API_URL + "user/login", {
        email: user.email,
        password: user.password,
      })
      .then((response) => {
        if (response.data.accessToken) {
          localStorage.setItem("user", JSON.stringify(response.data));
        }

        return response.data;
      });
  }

  logout() {
    localStorage.removeItem("user");
  }

  register(user) {
    return axios.post(API_URL + "user/register", {
      email: user.email,
      password: user.password,
      name: user.name,
    });
  }

  getUser() {
    return axios.get(API_URL + "user/me", { headers: authHeader() });
  }
}

export default new UserSerivce();
