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
    marginBottom: 15,
  },
  imageContainer: {
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
  noResultsContainer: {
    alignContent: "center",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
    flex: 1,
  },
  noResultsFound: {
    height: 200,
    width: 200,
  },
  noResultsText: {
    color: "#757575",
  },
  resultItemContainer: {
    display: "flex",
    flexDirection: "row",
    backgroundColor: "#fff3e0",
    borderRadius: 22,
    marginBottom: 15,
  },
  resultImage: {
    height: 100,
    width: 100,
    borderBottomLeftRadius: 22,
    borderTopLeftRadius: 22,
  },
  itemName: {
    fontSize: 15,
    fontWeight: "bold",
    color: "#795548",
    padding: 10,
    flexShrink: 1,
  },
  scrollResults: {
    flex: 1,
  },
});
