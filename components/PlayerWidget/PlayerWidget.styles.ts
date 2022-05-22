import { StyleSheet } from "react-native";
import Colors from "../../constants/Colors";

const styles = StyleSheet.create({
  container: {
    flexDirection: "column",
    width: "100%",
    position: "absolute",
    bottom: 78,
    // borderColor: "grey",
    // borderWidth: 1,
    borderRadius: 10,
    backgroundColor: "#002233",
  },
  image: {
    margin: 8,
    width: 50,
    height: 50,
  },
  rightContainer: {
    flexDirection: "row",
    flex: 1,
    justifyContent: "space-between",
    alignItems: "center",
  },
  textContainer: {
    flexDirection: "row",
    marginHorizontal: 10,
    // borderColor: "red",
    // borderWidth: 1,
  },
  title: {
    color: "white",
    fontSize: 15,
    marginRight: 10,
  },
  artist: {
    color: "lightgray",
    fontSize: 15,
    marginRight: 10,
  },
  iconContainer: {
    flexDirection: "row",
    // borderColor: "green",
    // borderWidth: 1,
    marginHorizontal: 10,
    width: 70,
    justifyContent: "space-around",
  },

  progress: {
    height: 4,
    backgroundColor: "white",
  },
  rowContainer: {
    flexDirection: "row",
    width: "100%",
    // borderColor: "green",
    // borderWidth: 1,
  },
});

export default styles;
