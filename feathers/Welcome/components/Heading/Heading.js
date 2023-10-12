import { StyleSheet, Text, View } from "react-native";

import COLORS from "../../../../constans/colors";

const Heading = () => {
  return (
    <View>
      <Text style={styles.title}>Let`s Get</Text>
      <Text style={styles.subtitle}>Started</Text>
    </View>
  );
};

export default Heading;

const styles = StyleSheet.create({
  title: {
    fontSize: 50,
    fontWeight: "800",
    color: COLORS.white,
  },
  subtitle: {
    fontSize: 46,
    fontWeight: "800",
    color: COLORS.white,
  },
});
