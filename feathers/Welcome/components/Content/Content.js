import { Pressable, StyleSheet, Text, View } from "react-native";
import { useNavigation } from "@react-navigation/native";

import Heading from "../Heading/Heading";
import Description from "../Description/Description";
import Button from "../../../../components/Button/Button";

import COLORS from "../../../../constans/colors";

const Content = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <Heading />
      <Description />
      <Button
        title="Join Now"
        style={styles.button}
        onPress={() => navigation.navigate("Signup")}
      />
      <View style={styles.forgotContainer}>
        <Text style={styles.forgotText}>Already have an account ?</Text>
        <Pressable onPress={() => navigation.navigate("Login")}>
          <Text style={styles.loginText}>Login</Text>
        </Pressable>
      </View>
    </View>
  );
};

export default Content;

const styles = StyleSheet.create({
  container: {
    position: "absolute",
    top: 400,
    width: "100%",
    paddingHorizontal: 22,
  },
  button: {
    width: "100%",
  },
  forgotContainer: {
    flexDirection: "row",
    justifyContent: "center",
    marginTop: 12,
  },
  forgotText: {
    fontSize: 16,
    color: COLORS.white,
  },
  loginText: {
    marginLeft: 6,
    fontSize: 16,
    color: COLORS.white,
    fontWeight: "bold",
  },
});
