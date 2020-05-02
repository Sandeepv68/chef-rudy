import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  mainContainer: {
    padding: 10,
    paddingTop: 40,
    backgroundColor: "#fff",
    display: "flex",
    flexDirection: "row",
  },
  searchBoxContainer: { backgroundColor: "#fff", padding: 20, flex: 1 },
  searchBox: {
    height: 40,
    borderColor: "#f5f5f5",
    backgroundColor: "#f5f5f5",
    borderWidth: 1,
    borderRadius: 20,
    paddingLeft: 10,
    marginBottom: 15
  },
  imageContainer: {
    shadowOffset: { width: 10, height: 10 },
    shadowColor: "black",
    shadowOpacity: 1,
    backgroundColor: "#0000",
    padding: 10,
  },
  rudy: {
    height: 80,
    width: 80,
    marginRight: 10,
  },
  primaryText: {
    fontSize: 19,
    color: "#6d4c41",
    fontWeight: "bold",
  },
  headerTextBoxContainer: {
    display: "flex",
    alignContent: "center",
    paddingTop: 40,
  },
});
