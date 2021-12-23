import "react-native-gesture-handler";
import { StyleSheet, Text, View } from "react-native";
import Layout from "../layout";
import { ExeData } from "./../../data/exeData";
import ExeCard from "../exeCard";
import { ScrollView, TouchableOpacity } from "react-native-gesture-handler";

export default function ExeList({ navigation }) {
  return (
    <ScrollView>
      <Layout>
        <TouchableOpacity onPress={() => navigation.navigate("HOME")}>
          <Text style={styles.back}>{"홈으로"}</Text>
        </TouchableOpacity>
        {ExeData.map((exe, index) => (
          <ExeCard exe={exe} key={index} />
        ))}
      </Layout>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  back: {
    color: "#85DEFF",
    fontSize: 15,
    fontWeight: "bold",
  },
});
