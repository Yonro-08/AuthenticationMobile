import { StyleSheet, Text, View } from "react-native";

import COLORS from "../../../../constans/colors";

const Header = ({ title }) => {
  return (
    <View style={styles.container}>
      <View style={styles.border}></View>
      <Text style={styles.title}>Or {title} up with</Text>
      <View style={styles.border}></View>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 20,
  },
  border: {
    flex: 1,
    height: 1,
    backgroundColor: COLORS.grey,
    marginHorizontal: 10,
  },
  title: {
    fontSize: 14,
  },
});
