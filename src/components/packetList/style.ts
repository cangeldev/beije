import { StyleSheet } from "react-native";
import colors from "../../assets/colors/colors";
export default StyleSheet.create({
    container: {
        backgroundColor: colors.white,
        marginHorizontal: 20,
        borderRadius: 10,
        paddingVertical: 5,
        paddingHorizontal: 20,
        elevation: 3,
        marginTop: 10
    },
    title: {
        fontSize: 17,
        fontFamily: "Gordita Medium",
        color: colors.customBlack
    },
    text: {
        fontFamily: "Gordita Regular",
        color: "grey",
        marginTop: 10
    },
    deleteText: {
        fontFamily: "Gordita Medium",
        color: colors.customBlack,
        marginTop: 10
    },
})