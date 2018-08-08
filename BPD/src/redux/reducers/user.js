import {
  FETCH_SESSION_PENDING,
  FETCH_SESSION_FULFILLED,
  LOGIN_PENDING,
  LOGIN_FULFILLED,
  LOGIN_REJECTED,
  LOGOUT_FULFILLED,
  REGISTER_PENDING,
  REGISTER_FULFILLED
} from "../../config/constants";

export default (
  state = {
    fetching: false,
    fetched: false,
    error: false,
    logged: false,
    token: "",
    loading: true,
    user: {}
  },
  action
) => {
  switch (action.type) {
    case FETCH_SESSION_PENDING:
      return {
        ...state,
        fetching: true
      };
    case FETCH_SESSION_FULFILLED:
      return {
        ...state,
        fetching: false,
        fetched: Boolean(action.payload),
        token: action.payload || "",
        logged: action.payload || "" ? true : false,
        loading: Boolean(action.payload)
      };
    case LOGIN_PENDING:
      return {
        ...state,
        fetching: true
      };
    case LOGIN_FULFILLED:
      return {
        ...state,
        fetching: false,
        fetched: true,
        logged: true,
        token: action.payload.data.id_token
      };
    case LOGIN_REJECTED:
      return {
        ...state,
        fetching: false,
        fetched: false,
        error: action.payload,
        logged: false,
        token: "",
        user: {}
      };

    case LOGOUT_FULFILLED:
      return {
        ...state,
        fetching: false,
        fetched: false,
        error: false,
        logged: false,
        token: "",
        user: {}
      };

    case REGISTER_PENDING:
      return {
        ...state,
        fetching: true
      };
    case REGISTER_FULFILLED:
      return {
        ...state,
        fetching: false,
        fetched: true,
        logged: true,
        token: action.payload.data.id_token
      };
    default:
      return state;
  }
};
