import { useEffect, useState } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { ExeData } from "../../data/exeData";
import ExeCard from "../exeCard";
import Layout from "../layout";

export default function Result({ navigation }) {
  const maxMin = 30;
  const [resultList, setResultList] = useState([]);
  const [scoreSum, setScoreSum] = useState(0);
  const [min, setMin] = useState(maxMin);
  const [sec, setSec] = useState(59);
  const [isEnd, setIsEnd] = useState(false);

  const rand = () => {
    return Math.floor(Math.random() * (ExeData.length - 1 - 0 + 1)) + 0;
  };

  const setList = () => {
    const arr = [];
    let scoreSum = 0;
    for (let i = 0; i < 4; i++) {
      if (i == 3) {
        setResultList(arr);
        setScoreSum(scoreSum);
        break;
      }
      const data = ExeData[rand()];
      arr.push(data);
      scoreSum += data.score;
    }
  };

  function lpad(str, padLen, padStr) {
    if (padStr.length > padLen) {
      console.log("오류 : 채우고자 하는 문자열이 요청 길이보다 큽니다");
      return str;
    }
    str += ""; // 문자로
    padStr += ""; // 문자로
    while (str.length < padLen) str = padStr + str;
    str = str.length >= padLen ? str.substring(0, padLen) : str;
    return str;
  }

  useEffect(() => {
    setList();
  }, []);

  useEffect(() => {
    if (sec === 59) {
      setMin(min - 1);
    }
  }, [sec]);

  useEffect(() => {
    let sec = 2;
    const interval = setInterval(() => {
      if (sec === 60) {
        sec = 0;
        setSec(0);
        sec++;
      } else {
        setSec(60 - sec);
        sec++;
      }
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (min === -1) {
      setIsEnd(true);
    }
  }, [min]);

  return (
    <Layout>
      <View style={styles.wrapper}>
        {!isEnd ? (
          <Text style={styles.time}>
            {lpad(min.toString(), 2, "0")}분 {lpad(sec.toString(), 2, "0")}초
            남음
          </Text>
        ) : (
          <Text style={styles.time}>끝났습니다!</Text>
        )}
        <Text style={styles.description}>30분 내에 모두 끝마쳐라!</Text>
        <Text style={styles.level}>
          난이도{" "}
          {scoreSum > 22 ? (
            <Text style={{ color: "red" }}>극악</Text>
          ) : scoreSum > 18 ? (
            <Text style={{ color: "skyblue" }}>위험</Text>
          ) : scoreSum > 13 ? (
            <Text style={{ color: "yellowgreen" }}>적당</Text>
          ) : (
            <Text style={{ color: "yellow" }}>개그</Text>
          )}
        </Text>
        {resultList.slice(0, 3).map((exe, index) => (
          <ExeCard exe={exe} key={index} />
        ))}
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate("HOME")}
        >
          <Text style={styles.buttonText}>루틴 완료</Text>
        </TouchableOpacity>
      </View>
    </Layout>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    flexDirection: "column",
    alignItems: "center",
  },
  time: {
    fontSize: 40,
    fontWeight: "bold",
    color: "white",
    marginTop: 30,
  },
  description: {
    fontSize: 15,
    marginTop: 15,
    color: "white",
  },
  level: {
    fontSize: 17,
    fontWeight: "bold",
    marginTop: 30,
    marginBottom: 10,
    color: "#E1E1E1",
  },
  button: {
    width: "100%",
    height: 50,
    backgroundColor: "#006FFF",
    color: "white",
    borderRadius: 5,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 30,
  },
  buttonText: {
    color: "white",
    fontSize: 17,
    fontWeight: "bold",
  },
});
