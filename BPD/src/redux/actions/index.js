import { AsyncStorage } from "react-native";
import Storage from "../../utils/asyncStorage";
import Request from "../../api/request";
import { FETCH_SESSION, REGISTER, LOGIN, LOGOUT } from "../../config/constants";
export const login = (username, password) => ({
  type: LOGIN,
  payload: Request.postMethod({
    url: "/sessions/create",
    body: {
      username: username,
      password: password
    }
  })
});

export const registeruser = (username, password) => ({
  type: REGISTER,
  payload: Request.postMethod({
    url: "/users",
    body: {
      username: username,
      password: password
    }
  })
});

export const fetchSession = () => ({
  type: FETCH_SESSION,
  payload: Storage.getValue(
    "id_token"
  ) /* AsyncStorage.getItem("@Session:token") */
});

export const logout = () => ({
  type: LOGOUT,
  payload: Storage.removeValue("id_token")
});
