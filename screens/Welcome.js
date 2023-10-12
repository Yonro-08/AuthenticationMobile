import { ScrollView, StyleSheet, View } from "react-native";
import { LinearGradient } from "expo-linear-gradient";

import SafeAreaView from "../components/SafeAreaView/SafeAreaView";
import { Header, Content } from "../feathers/Welcome";

import COLORS from "../constans/colors";

const Welcome = () => {
  return (
    <LinearGradient
      style={styles.container}
      colors={[COLORS.secondary, COLORS.primary]}
    >
      {/* <ScrollView> */}
      <SafeAreaView style={styles.container}>
        <View>
          <Header />
          <Content />
        </View>
      </SafeAreaView>
      {/* </ScrollView> */}
    </LinearGradient>
  );
};

export default Welcome;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
