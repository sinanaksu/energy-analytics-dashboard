import store from "../store";

export default function authHeader() {
  const user = JSON.parse(localStorage.getItem('user'));
  if (user && user.accessToken) {
    return { 'x-access-token': user.accessToken };
  } else if(store.state.user !== '') {
    return { 'x-access-token': store.state.user.accessToken };
  } else {
    return {};
  }
}
