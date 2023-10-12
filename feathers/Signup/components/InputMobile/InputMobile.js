import { StyleSheet, Text, TextInput, View } from "react-native";

import COLORS from "../../../../constans/colors";

const InputMobile = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Mobile number</Text>
      <View style={styles.inputContainer}>
        <TextInput
          placeholder="+7 "
          placeholderTextColor={COLORS.black}
          keyboardType="numeric"
          style={styles.input}
        />
        <TextInput
          placeholder="Enter your phone number"
          placeholderTextColor={COLORS.black}
          keyboardType="numeric"
          style={{
            width: "80%",
          }}
        />
      </View>
    </View>
  );
};

export default InputMobile;

const styles = StyleSheet.create({
  container: {
    marginBottom: 12,
  },
  title: {
    fontSize: 16,
    fontWeight: "400",
    marginVertical: 8,
  },
  inputContainer: {
    width: "100%",
    height: 40,
    borderColor: COLORS.black,
    borderWidth: 1,
    borderRadius: 8,
    alignItems: "center",
    justifyContent: "space-between",
    flexDirection: "row",
    paddingLeft: 22,
  },
  input: {
    width: "12%",
    borderWidth: 1,
    borderRightColor: COLORS.grey,
    height: "100%",
  },
});
