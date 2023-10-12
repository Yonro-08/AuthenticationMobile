import { StyleSheet, Text, View } from "react-native";

import COLORS from "../../constans/colors";

const HeaderTitle = ({ title, subtitle }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.subtitle}>{subtitle}</Text>
    </View>
  );
};

export default HeaderTitle;

const styles = StyleSheet.create({
  container: {
    marginVertical: 22,
  },
  title: {
    marginVertical: 12,
    color: COLORS.black,
    fontSize: 22,
    fontWeight: "bold",
  },
  subtitle: {
    fontSize: 16,
    color: COLORS.black,
  },
});
