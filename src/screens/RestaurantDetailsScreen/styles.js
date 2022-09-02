import { StyleSheet } from "react-native";

export default StyleSheet.create({
  page: {
    flex: 1,
  },
  iconContainer: {
    position: "absolute",
    top: 40,
    left: 10,
  },
  image: {
    width: "100%",
    aspectRatio: 6 / 3,
  },
  title: {
    fontSize: 35,
    fontWeight: "600",
    marginVertical: 7,
  },
  menuTitle: {
    marginTop: 10,
    fontSize: 24,
    fontWeight: 'bold',
    letterSpacing: 0.7,
  },
  subtitle: {
    fontSize: 15,
    color: "#525252",
  },
  container: {
    margin: 10,
  },
});
