import { StyleSheet, View } from "react-native";
import {
  AdMobBanner,
  AdMobInterstitial,
  PublisherBanner,
  AdMobRewarded,
  setTestDeviceIDAsync,
} from "expo-ads-admob";

export default function Layout({ children }) {
  return (
    <View style={styles.wrapper}>
      <View style={styles.container}>{children}</View>
      <AdMobBanner
        bannerSize="banner"
        adUnitID="ca-app-pub-2814958166637393~9752476790" // Test ID, Replace with your-admob-unit-id
        servePersonalizedAds // true or false
        onDidFailToReceiveAdWithError={(err) => {
          console.log(err);
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    flexDirection: "column",
    alignItems: "center",
  },
  container: {
    paddingTop: 40,
    paddingBottom: 30,
    paddingHorizontal: 30,
    width: 350,
  },
});
