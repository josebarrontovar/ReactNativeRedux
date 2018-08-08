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



export default class StartPage extends Component<Props> {
  constructor(props) {
    super(props);

  }

 

  render() {
    const { history } = this.props;
   
    return (
      <View style={styles.view}>
      <Image
        style={{
          flex: 1,
          position: 'absolute',
          width: '100%',
          height: '100%',
          justifyContent: 'center'
        }}
        source={{ uri: "https://www.argentarium.com/wp-content/uploads/2016/07/i00008fcckaouglgjpg-890x500_c.jpg" }}
      />
        {/* <TextInput
          placeholder="FIERRRO 0 MIEDO"
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
        /> */}
        <View style={styles.loginButtonSection}>
        {/* <TouchableOpacity onPress={this.login}> */}
        <TouchableOpacity onPress={() => history.push("/PantallaPrincipal")}>
          <View style={styles.button}>
            <Text style={styles.textButton}> Acceso</Text>
          </View>
        </TouchableOpacity>
        </View>
        <Button
          onPress={() => history.push("/PantallaPrincipal")}
          title="Sobre Nosotros"
          color="#841584"
          accessibilityLabel="Learn more about this purple button"
        />
      </View>
    );
  }
}
