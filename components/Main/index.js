import "react-native-gesture-handler";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import ExeCard from "../exeCard";
import { ExeData } from "./../../data/exeData";
import Layout from "../layout";

export default function Main({ navigation }) {
  return (
    <Layout>
      <View>
        <Text style={styles.logo}>
          BREAK <Text style={styles.health}>HEALTH</Text>
        </Text>
        <Text style={styles.description}>오늘의 운동 루틴을 맞이하라</Text>
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate("RESULT")}
        >
          <Text style={styles.buttonText}>오늘의 루틴 보기</Text>
        </TouchableOpacity>
        <Text style={styles.alertMsg}>주의사항 *</Text>
        <Text style={styles.alertDes}>
          어떠한 루틴이 나와도 절대 피하지 말것!
        </Text>
        <Text style={styles.exeListText}>운동 목록</Text>
        {ExeData.map((exe, index) => (
          <ExeCard
            level={exe.level}
            kcal={exe.kcal}
            name={exe.name}
            key={index}
            score={exe.score}
          />
        ))}
      </View>
    </Layout>
  );
}

const styles = StyleSheet.create({
  logo: {
    fontSize: 25,
    fontWeight: "bold",
    fontStyle: "italic",
    color: "white",
  },
  health: {
    color: "red",
  },
  description: {
    color: "white",
    fontSize: 16,
    fontWeight: "700",
    marginTop: 10,
  },
  button: {
    width: "100%",
    height: 50,
    backgroundColor: "#2785FF",
    borderRadius: 5,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 20,
  },
  buttonText: {
    color: "white",
    fontSize: 17,
    fontWeight: "bold",
  },
  alertMsg: {
    marginTop: 17,
    color: "#FF4646",
    fontSize: 17,
    fontWeight: "bold",
  },
  alertDes: {
    marginTop: 5,
    color: "white",
    fontSize: 15,
    fontWeight: "bold",
  },
  exeListText: {
    fontSize: 20,
    fontWeight: "bold",
    marginTop: 30,
    color: "white",
  },
});