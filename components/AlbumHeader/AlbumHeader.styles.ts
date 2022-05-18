import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    padding: 10,
    // flexDirection: "row",
    // borderColor: "cyan",
    // borderWidth: 1,
  },
  image: {
    width: 200,
    height: 200,
    margin: 12,
  },
  name: {
    color: "white",
    fontSize: 20,
    fontWeight: "bold",
  },
  creatorContainer: {
    flexDirection: "row",
    margin: 5,
  },
  creator: {
    color: "lightgray",
    margin: 5,
    fontSize: 14,
  },
  likes: {
    color: "lightgray",
    margin: 5,
    fontSize: 14,
  },
  button: {
    backgroundColor: "#1CD05D",
    height: 40,
    width: 123,
    borderRadius: 50,
    justifyContent: "center",
    alignItems: "center",
  },
  buttonText: {
    color: "white",
    fontWeight: "bold",
    fontSize: 15,
  },
});

export default styles;
