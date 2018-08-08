export type userType = {
  fetching: boolean,
  fetched: boolean,
  error: boolean | string,
  logged: boolean,
  token: string,
  user: {
    usuario: string,
    nombre: string,
    avatar: string,
    biotipo: {
      codigo: string,
      nombre: string
    }
  }
};
