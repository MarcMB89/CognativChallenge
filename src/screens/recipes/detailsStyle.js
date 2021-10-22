import { StyleSheet } from "react-native";

import{ Metrics, Colors } from "../../theme";

const styles = StyleSheet.create({
    category: {
      color: Colors.darkGrey,
      fontSize: 10,
      fontStyle: "normal",
      fontWeight: "bold",
      letterSpacing: 1,
      lineHeight: 24,
      textAlign: "center",
    },
    cell: {
      alignItems: "center",
      flex: 1,
      flexDirection: "row",
      justifyContent: "center",
      marginRight: Metrics.smallSpace,
    },
    cellText: {
      color: Colors.mediumGrey,
      fontSize: 13,
      fontStyle: "normal",
      fontWeight: "300",
      letterSpacing: 0.5,
      lineHeight: 24,
    },
    container: {
      alignItems: "stretch",
      backgroundColor: Colors.mainBackground,
      flex: 1,
      justifyContent: "flex-start",
    },
    darkener: {
      backgroundColor: Colors.black30,
      bottom: 0,
      left: 0,
      position: "absolute",
      right: 0,
      top: 0,
      zIndex: 5,
    },
    description: {
      color: Colors.darkGrey,
      fontSize: 14,
      lineHeight: 24,
    },
    header: {
      color: Colors.black,
      fontSize: 14,
      lineHeight: 24,
      textAlign: "center",
    },
    imageContainer: {},
    infoBox: {
      alignItems: "stretch",
      alignSelf: "stretch",
      justifyContent: "center",
      paddingHorizontal: Metrics.baseSpace,
      paddingVertical: Metrics.smallSpace,
    },
    mainScreen: {
      backgroundColor: Colors.mainBackground,
      flex: 1,
    },
    properties: {
      alignItems: "center",
      flexDirection: "row",
      justifyContent: "flex-start",
    },
    recipeImage: {
      height: 192,
    },
    title: {
      fontWeight: "bold",
    },
    title: {
      color: Colors.black,
      fontSize: 16,
      fontStyle: "normal",
      fontWeight: "500",
      letterSpacing: 0.5,
      lineHeight: 24,
      textAlign: "center",
    },
  })

  export default styles;