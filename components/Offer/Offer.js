import { StyleSheet, Text, View, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";

import COLORS from "../../constans/colors";

const Offer = ({ title, label, screen }) => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{label}</Text>
      <Pressable onPress={() => navigation.navigate(screen)}>
        <Text style={styles.title}>{title}</Text>
      </Pressable>
    </View>
  );
};

export default Offer;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "center",
    marginVertical: 22,
  },
  text: {
    fontSize: 16,
    color: COLORS.black,
  },
  title: {
    fontSize: 16,
    color: COLORS.primary,
    fontWeight: "bold",
    marginLeft: 6,
  },
});
