import React, { Component } from "react";
import {
  View,
  Image,
  Text,
  ScrollView,
  AsyncStorage,
  TouchableOpacity,
  TextInput
} from "react-native";
import { userType } from "../types";
import { Register as styles } from "./styles";

type Props = {
  registeruser: (username: string, password: string) => void,
  history: {
    push: (path: string, state?: {}) => void
  }
};

export default class Register extends Component<Props> {
  constructor(props) {
    super(props);
    state = {
      username: "",
      password: ""
    };
    this.register = this.register.bind(this);
  }

  register() {
    const { registeruser } = this.props;

    registeruser(this.state.username, this.state.password);
  }

  render() {
    return (
      <View style={{ height: "100%" }}>
        <Text>Registrar</Text>
        <TextInput
          placeholder="Enter User name"
          onChangeText={TextInputValue =>
            this.setState({ username: TextInputValue })
          }
          underlineColorAndroid="transparent"
          style={styles.input}
        />
        <TextInput
          placeholder="Enter password"
          onChangeText={TextInputValue =>
            this.setState({ password: TextInputValue })
          }
          underlineColorAndroid="transparent"
          secureTextEntry={true}
          style={styles.input}
        />
        <TouchableOpacity onPress={this.register}>
          <View style={styles.button}>
            <Text style={styles.textButton}>Registrar </Text>
          </View>
        </TouchableOpacity>
      </View>
    );
  }
}
