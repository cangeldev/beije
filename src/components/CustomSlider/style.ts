import { StyleSheet } from "react-native";
import colors from "../../assets/colors/colors";

export default StyleSheet.create({
    container: {
        paddingTop: 20,
    },
    title: {
        fontFamily: "Gordita Regular",
        fontSize: 17,
        color: colors.customBlack,
        marginBottom: 30,
    },
    image: {
        width: 24,
        height: 24,
        marginTop: -20,
    },
    value: {
        color: colors.white,
        alignSelf: "center",
        marginLeft: -3
    },
    contentView: {
        flexDirection: "row",
        justifyContent: 'space-between',
        marginTop: 5,
        marginHorizontal: 5
    }
})