import { AsyncStorage } from "react-native";
import SInfo from "react-native-sensitive-info";

const VALUES = ["id_token", "username"];

class Stg {
  static async getValue(field) {
    const values = VALUES;

    if (values.includes(field)) {
      let val = await SInfo.getItem(`@Session:${field}`, {
        sharedPreferencesName: "mySharedPrefs",
        keychainService: "myKeychain"
      });
      return val;
    } else {
      return "";
    }
  }

  static async setValue(field, value) {
    const values = VALUES;
    if (values.includes(field)) {
      SInfo.setItem(`@Session:${field}`, value, {
        sharedPreferencesName: "mySharedPrefs",
        keychainService: "myKeychain"
      });
      return;
    }
  }

  static async removeValue(field) {
    const values = VALUES;
    if (values.includes(field)) {
      SInfo.deleteItem(`@Session:${field}`, {
        sharedPreferencesName: "mySharedPrefs",
        keychainService: "myKeychain"
      });
      return;
    }
  }
}

export default Stg;
