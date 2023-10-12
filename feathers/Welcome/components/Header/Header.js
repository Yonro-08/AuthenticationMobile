import { StyleSheet, Image, View } from "react-native";

const Header = () => {
  return (
    <View>
      <Image
        source={require("../../assets/hero1.jpg")}
        style={[styles.image, styles.img1]}
      />
      <Image
        source={require("../../assets/hero3.jpg")}
        style={[styles.image, styles.img2]}
      />
      <Image
        source={require("../../assets/hero3.jpg")}
        style={[styles.image, styles.img3]}
      />
      <Image
        source={require("../../assets/hero2.jpg")}
        style={[styles.image, styles.img4]}
      />
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  image: {
    position: "absolute",
    width: 100,
    height: 100,
    borderRadius: 20,
  },
  img1: {
    top: 10,
    transform: [{ translateX: 20 }, { translateY: 50 }, { rotate: "-15deg" }],
  },
  img2: {
    top: -30,
    left: 100,
    transform: [{ translateX: 50 }, { translateY: 50 }, { rotate: "-5deg" }],
  },
  img3: {
    top: 130,
    left: -50,
    transform: [{ translateX: 50 }, { translateY: 50 }, { rotate: "15deg" }],
  },
  img4: {
    top: 110,
    left: 100,
    height: 200,
    width: 200,
    transform: [{ translateX: 50 }, { translateY: 50 }, { rotate: "-15deg" }],
  },
});
