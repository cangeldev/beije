import { StyleSheet } from "react-native";
import colors from "../../assets/colors/colors";

export default StyleSheet.create({
    container: {
        paddingBottom: 20,
        backgroundColor: colors.backGround
    },
    tabViewHeaderTitle: {
        fontSize: 16,
        lineHeight: 22,
        textAlign: "center",
        fontFamily: "Gordita Regular"
    },
    headerTitle: {
        backgroundColor: colors.backGround
    },
    indicatorStyle: {
        backgroundColor: colors.customBlack
    },
    header: {
        marginTop: 20
    }
})