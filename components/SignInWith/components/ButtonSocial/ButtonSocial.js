import { Image, StyleSheet, Text, TouchableOpacity } from "react-native";

import COLORS from "../../../../constans/colors";

const ButtonSocial = ({ src, title }) => {
  return (
    <TouchableOpacity
      onPress={() => console.log(`Sign you ${title}`)}
      style={styles.container}
    >
      <Image source={src} style={styles.image} resizeMode="contain" />
      <Text>{title}</Text>
    </TouchableOpacity>
  );
};

export default ButtonSocial;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
    height: 52,
    borderWidth: 1,
    borderColor: COLORS.grey,
    marginRight: 4,
    borderRadius: 10,
  },
  image: {
    height: 36,
    width: 36,
    marginRight: 8,
  },
});
