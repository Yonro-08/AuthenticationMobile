import { StyleSheet, View } from "react-native";

import Header from "./components/Header/Header";
import ButtonSocial from "./components/ButtonSocial/ButtonSocial";
import IMAGES from "../../constans/images";

const SignInWith = ({ title }) => {
  return (
    <View>
      <Header title={title} />
      <View style={styles.buttonContainer}>
        <ButtonSocial src={IMAGES.facebook} title="Facebook" />
        <ButtonSocial src={IMAGES.google} title="Google" />
      </View>
    </View>
  );
};

export default SignInWith;

const styles = StyleSheet.create({
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "center",
  },
});
