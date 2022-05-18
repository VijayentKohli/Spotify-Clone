import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    padding: 10,
    width: "100%",
    // borderColor: "yellow",
    // borderWidth: 1,
    // flex: 1,
  },
  image: {
    width: 48,
    height: 48,
  },
  rightContainer: {
    width: "76%",
    justifyContent: "space-evenly",
    marginHorizontal: 10,
    // borderColor: "red",
    // borderWidth: 1,
  },
  title: {
    color: "white",
    fontSize: 14,
  },
  artist: {
    color: "lightgray",
    fontSize: 11,
  },
  rightEndContainer: {
    // borderColor: "lightgreen",
    // borderWidth: 1,
    justifyContent: "center",
  },
});

export default styles;
