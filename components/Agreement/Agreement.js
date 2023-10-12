import { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import Checkbox from "expo-checkbox";

import COLORS from "../../constans/colors";

const Agreement = ({ title }) => {
  const [isChecked, setIsChecked] = useState(false);

  return (
    <View style={styles.container}>
      <Checkbox
        style={styles.checkbox}
        value={isChecked}
        onValueChange={setIsChecked}
        color={isChecked ? COLORS.primary : null}
      />
      <Text>{title}</Text>
    </View>
  );
};

export default Agreement;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    marginVertical: 6,
  },
  checkbox: {
    marginRight: 8,
  },
});
