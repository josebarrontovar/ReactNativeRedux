// @flow

import React, { Component } from "react";
import {
  View,
  Image,
  Text,
  Button,
  ScrollView,
  AsyncStorage,
  TouchableOpacity,
  TextInput
} from "react-native";
import { userType } from "../types";
import { Login as styles } from "./styles";

type Props = {
  login: (username: string, password: string) => void,
  fetchSession: () => void,
  history: {
    push: (path: string, state?: {}) => void
  }
};

export default class Login extends Component<Props> {
  constructor(props) {
    super(props);
    state = {
      username: "",
      password: ""
    };
  
    this.login = this.login.bind(this);
  }

  componentWillMount() {
    const { fetchSession, user } = this.props;

    fetchSession();
  }

  login() {
    const { login } = this.props;

    login(this.state.username, this.state.password);
  }

  render() {
    const { user, history } = this.props;

    if (user.loading) {
      return (
        <View>
          <Text>Cargando...</Text>
        </View>
      );
    }

    return (
      <View style={styles.view}>
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
        <TouchableOpacity onPress={this.login}>
          <View style={styles.button}>
            <Text style={styles.textButton}>Login </Text>
          </View>
        </TouchableOpacity>
        <Button
          onPress={() => history.push("/PantallaPrincipal")}
          title="REGISTRARME"
          color="#841584"
          accessibilityLabel="Learn more about this purple button"
        />
      </View>
    );
  }
}
