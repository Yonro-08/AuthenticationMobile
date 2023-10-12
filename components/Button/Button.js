import { StyleSheet, Text, TouchableOpacity } from "react-native";
import COLORS from "../../constans/colors";

const Button = ({ onPress, title, color, filled, style }) => {
  const filledBgColor = color || COLORS.primary;
  const outlineColor = COLORS.white;
  const bgColor = filled ? filledBgColor : outlineColor;
  const textColor = filled ? COLORS.white : COLORS.primary;
  return (
    <TouchableOpacity
      style={[styles.button, { backgroundColor: bgColor }, style]}
      onPress={onPress}
    >
      <Text style={[styles.text, { color: textColor }]}>{title}</Text>
    </TouchableOpacity>
  );
};

export default Button;

const styles = StyleSheet.create({
  button: {
    alignItems: "center",
    justifyContent: "center",
    paddingBottom: 16,
    paddingVertical: 10,
    borderColor: COLORS.primary,
    borderWidth: 2,
    borderRadius: 12,
  },
  text: {
    fontSize: 18,
  },
});
