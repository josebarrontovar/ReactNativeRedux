import Storage from "../utils/asyncStorage";

export const logger = async token => {
  Storage.setValue("id_token", token);
};
