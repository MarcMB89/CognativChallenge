import { StyleSheet } from "react-native";

import{ Metrics, Colors } from "../../theme";

const styles = StyleSheet.create({
    categoryRow: {
        color: Colors.darkGrey,
        fontSize: 10,
        fontStyle: "normal",
        fontWeight: "bold",
        letterSpacing: 1,
        lineHeight: 24,
        textAlign: "left",
    },
    cellRow: {
        alignItems: "center",
        flexDirection: "row",
        justifyContent: "flex-start",
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
    header: {
        color: Colors.black,
        fontWeight: "bold",
        paddingHorizontal: Metrics.baseSpace,
        paddingVertical: Metrics.smallSpace,
        textAlign: "left",
    },
    imageContainer: {
        height: 128,
    },
    infoContainer: {
        alignItems: "stretch",
        justifyContent: "center",
        paddingHorizontal: Metrics.baseSpace,
        paddingVertical: Metrics.smallSpace,
    },
    mainScreen: {
      backgroundColor: Colors.mainBackground,
      flex: 1,
    },
    navBar: {
      alignItems: "center",
      backgroundColor: Colors.whiteFull,
      height: Metrics.navBarHeight,
      justifyContent: "center",
      marginTop: Metrics.statusBarHeight,
    },
    properties: {
        alignItems: "center",
        flexDirection: "row",
        justifyContent: "flex-start",
    },
    recipeImage: {
        flex: 1,
    },
    recipeImageBox: {
        height: 128,
        width: 208,
    },
    recommendedContainer: {
        alignItems: "stretch",
        justifyContent: "center",
        marginBottom: Metrics.baseSpace,
    },
    rowContainer: {
        alignItems: "stretch",
        backgroundColor: Colors.whiteFull,
        borderRadius: Metrics.borderRadius,
        justifyContent: "flex-start",
        marginBottom: Metrics.baseSpace,
        marginHorizontal: Metrics.baseSpace,
        overflow: "hidden",
    },
    scroller: {
        paddingRight: Metrics.baseSpace,
    },
    scrollerRecipe: {
        alignItems: "center",
        borderRadius: Metrics.borderRadius,
        height: 128,
        justifyContent: "center",
        marginLeft: Metrics.baseSpace,
        overflow: "hidden",
    },
    title: {
      fontWeight: "bold",
    },
    titleRow: {
        color: Colors.black,
        fontSize: 16,
        fontStyle: "normal",
        fontWeight: "500",
        letterSpacing: 0.5,
        lineHeight: 24,
        textAlign: "left",
    },
  });

  export default styles;