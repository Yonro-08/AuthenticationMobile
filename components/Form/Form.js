import { StyleSheet, Text, View, TextInput } from "react-native";

import ButtonPassword from "../ButtonPassword/ButtonPassword";

import COLORS from "../../constans/colors";

const Form = ({
  title,
  placeholder,
  button,
  isPasswordShown,
  setIsPasswordShown,
  ...rest
}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      <View style={styles.inputContainer}>
        <TextInput
          placeholder={placeholder}
          placeholderTextColor={COLORS.black}
          style={styles.input}
          {...rest}
        />
        {button && (
          <ButtonPassword
            isPasswordShown={isPasswordShown}
            setIsPasswordShown={setIsPasswordShown}
          />
        )}
      </View>
    </View>
  );
};

export default Form;

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
    justifyContent: "center",
    paddingLeft: 22,
  },
  input: {
    width: "100%",
  },
});
