// @flow

import React, { Component } from "react";
import {
  View,
  Image,
  Text,
  ScrollView,
  AsyncStorage,
  TouchableOpacity,
  TextView,
  Button,
  TextInput
} from "react-native";
type Props = {
  logout: () => void
};

export default class PantallaPrincipal extends Component<Props> {
  constructor(props) {
    super(props);

    this.exit = this.exit.bind(this);
  }
  exit() {
    const { logout } = this.props;
    logout();
  }
  render() {
    const { user } = this.props;

    return (
      <View>
        <Text>
          {"ESTE ES EL TOKEN DE USUARIO PARA VALIDAR LA SESION CON JWT ENTRA A LA PRIMER PANTATALLA " +
            user.token}
        </Text>
        <Button
          onPress={this.exit}
          title="LOGOUT"
          color="#841584"
          accessibilityLabel="Learn more about this purple button"
        />
      </View>
    );
  }
}
