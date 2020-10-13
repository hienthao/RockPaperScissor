import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  SafeAreaView,
  TouchableOpacity,
} from "react-native";
import ActionPaper from "./images/action-paper.png";
import ActionRock from "./images/action-rock.png";
import ActionScissor from "./images/action-scissor.png";
import PaperRight from "./images/paper-right.png";
import RockLeft from "./images/rock-left.png";
import ScissorRight from "./images/scissor-right.png";
import PaperLeft from "./images/paper-left.png";
import RockRight from "./images/rock-right.png";
import ScissorLeft from "./images/scissor-left.png";

export default function App() {
  const ROCK = 0;
  const PAPER = 1;
  const SCISSOR = 2;
  const [ourAction, setOurAction] = useState(ROCK);
  const [computerAction, setComputerAction] = useState(ROCK);
  const [notifyText, setNotifyText] = useState("DRAW");

  function onActionPress(actionPlay) {
    var currentComputerAction = ROCK;
    var currentComputerAction = Math.floor(Math.random() * 3);

    if (actionPlay == ROCK && currentComputerAction == SCISSOR) {
      setNotifyText("WIN");
    } else if (actionPlay == ROCK && currentComputerAction == PAPER) {
      setNotifyText("LOSE");
    } else if (actionPlay == PAPER && currentComputerAction == ROCK) {
      setNotifyText("WIN");
    } else if (actionPlay == PAPER && currentComputerAction == SCISSOR) {
      setNotifyText("LOSE");
    } else if (actionPlay == SCISSOR && currentComputerAction == PAPER) {
      setNotifyText("WIN");
    } else if (actionPlay == SCISSOR && currentComputerAction == ROCK) {
      setNotifyText("LOSE");
    } else {
      setNotifyText("DRAW");
    }

    setOurAction(actionPlay);
    setComputerAction(currentComputerAction);
  }

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar></StatusBar>
      <View style={styles.notifyView}>
        <Text style={styles.notifyText}>{notifyText}</Text>
      </View>

      <View style={styles.animateView}>
        <View style={styles.animateComponentView}>
          <Image
            source={
              ourAction === ROCK
                ? RockRight
                : ourAction === PAPER
                ? PaperRight
                : ScissorRight
            }
            style={styles.animateComponentImage}
          />
          <Text style={styles.animateComponentText}>You</Text>
        </View>
        <View style={styles.animateComponentView}>
          <Image
            source={
              computerAction === ROCK
                ? RockLeft
                : computerAction === PAPER
                ? PaperLeft
                : ScissorLeft
            }
            style={styles.animateComponentImage}
          />
          <Text style={styles.animateComponentText}>Computer</Text>
        </View>
      </View>

      <View style={styles.actionView}>
        <View style={styles.actionDetailView}>
          <TouchableOpacity
            style={styles.actionDetailTouchable}
            onPress={() => onActionPress(ROCK)}
          >
            <Image source={ActionRock} style={styles.actionDetailImage} />
          </TouchableOpacity>
        </View>
        <View style={styles.actionDetailView}>
          <TouchableOpacity
            style={styles.actionDetailTouchable}
            onPress={() => onActionPress(PAPER)}
          >
            <Image source={ActionPaper} style={styles.actionDetailImage} />
          </TouchableOpacity>
        </View>
        <View style={styles.actionDetailView}>
          <TouchableOpacity
            style={styles.actionDetailTouchable}
            onPress={() => onActionPress(SCISSOR)}
          >
            <Image source={ActionScissor} style={styles.actionDetailImage} />
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    alignItems: "center",
    justifyContent: "center",
  },
  notifyView: {
    flex: 1 / 3,
    justifyContent: "center",
    alignContent: "center",
  },
  notifyText: {
    fontSize: 30,
    color: "black",
  },

  animateView: {
    flex: 1 / 3,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  animateComponentView: {
    height: 200,
    width: 200,
    alignItems: "center",
  },
  animateComponentImage: {
    height: 150,
    width: 150,
  },
  animateComponentText: {},

  actionView: {
    flex: 1 / 3,
    flexDirection: "row",
    justifyContent: "space-between",
  },

  actionDetailTouchable: {},
  actionDetailView: {
    height: 90,
    width: 90,
    borderRadius: 90,
    backgroundColor: "yellow",
    alignItems: "center",
    justifyContent: "center",
  },
  actionDetailImage: {
    height: 70,
    width: 70,
  },
});
