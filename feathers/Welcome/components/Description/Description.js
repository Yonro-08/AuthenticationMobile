import { StyleSheet, Text, View } from "react-native";

import COLORS from "../../../../constans/colors";

const Description = () => {
  return (
    <View style={styles.container}>
      <Text style={[styles.text, { marginVertical: 4 }]}>
        Connect with each other with chatting
      </Text>
      <Text style={styles.text}>Calling, Enjoy Safe and private texting</Text>
    </View>
  );
};

export default Description;

const styles = StyleSheet.create({
  container: {
    marginVertical: 22,
  },
  text: {
    fontSize: 16,
    color: COLORS.white,
  },
});
