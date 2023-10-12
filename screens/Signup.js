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
import InputMobile from "../feathers/Signup/components/InputMobile/InputMobile";

import COLORS from "../constans/colors";

const SignUp = () => {
  const [isPasswordShown, setIsPasswordShown] = useState(true);

  return (
    <SafeAreaView style={styles.background}>
      <View style={styles.container}>
        <HeaderTitle
          title="Create Account"
          subtitle="Connect with your friend today!"
        />
        <Form
          title="Email address"
          placeholder="Enter your email address"
          keyboardType="email-address"
        />
        <InputMobile />
        <Form
          title="Password"
          placeholder="Enter your password"
          secureTextEntry={isPasswordShown}
          button
          isPasswordShown={isPasswordShown}
          setIsPasswordShown={setIsPasswordShown}
        />
        <Agreement title="I agree to the and conditions" />
        <Button title="Sign Up" filled style={styles.button} />
        <SignInWith title="Signup" />
        <Offer title="Login" label="Already have an account" screen="Login" />
      </View>
    </SafeAreaView>
  );
};

export default SignUp;

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
