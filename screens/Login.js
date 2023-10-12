import { useState } from "react";
import { StyleSheet, View } from "react-native";

import {
  SafeAreaView,
  Button,
  HeaderTitle,
  Form,
  Agreement,
  SignInWith,
  Offer,
} from "../components";

import COLORS from "../constans/colors";

const Login = () => {
  const [isPasswordShown, setIsPasswordShown] = useState(true);
  return (
    <SafeAreaView style={styles.background}>
      <View style={styles.container}>
        <HeaderTitle
          title="Hey Welcome back!"
          subtitle="Hello again you have been missed!"
        />
        <Form
          title="Email address"
          placeholder="Enter your email address"
          keyboardType="email-address"
        />
        <Form
          title="Password"
          placeholder="Enter your password"
          secureTextEntry={isPasswordShown}
          button
          isPasswordShown={isPasswordShown}
          setIsPasswordShown={setIsPasswordShown}
        />
        <Agreement title="Remember me" />
        <Button title="Login" filled style={styles.button} />
        <SignInWith title="Login" />
        <Offer title="Register" label="Don`t have an account" screen="Singup" />
      </View>
    </SafeAreaView>
  );
};

export default Login;

const styles = StyleSheet.create({
  background: {
    flex: 1,
    backgroundColor: COLORS.white,
  },
  container: {
    flex: 1,
    marginHorizontal: 22,
  },
  button: {
    marginTop: 18,
    marginBottom: 4,
  },
});
