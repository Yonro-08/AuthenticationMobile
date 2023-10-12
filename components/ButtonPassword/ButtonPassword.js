import { StyleSheet, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";

import COLORS from "../../constans/colors";

const ButtonPassword = ({ isPasswordShown, setIsPasswordShown }) => {
  return (
    <TouchableOpacity
      style={{ position: "absolute", right: 12 }}
      onPress={() => setIsPasswordShown(!isPasswordShown)}
    >
      {isPasswordShown ? (
        <Ionicons name="eye-off" size={24} color={COLORS.black} />
      ) : (
        <Ionicons name="eye" size={24} color={COLORS.black} />
      )}
    </TouchableOpacity>
  );
};

export default ButtonPassword;

const styles = StyleSheet.create({});
