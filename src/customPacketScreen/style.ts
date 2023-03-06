import { StyleSheet } from "react-native"
import colors from "../assets/colors/colors"

export default StyleSheet.create({

    container: {
        backgroundColor: colors.backGround,
        flex: 1,
        paddingHorizontal: 25,
    },
    title: {
        fontFamily: "Gordita Bold",
        fontSize: 25,
        color: colors.customBlack,
        marginTop:20
    },
    info: {
        fontFamily: "Gordita Regular",
        color: colors.infoText,
        fontSize: 15,
        marginTop: 15,
        lineHeight: 23
    }
})