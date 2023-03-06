import { StyleSheet } from "react-native";
import colors from "../../assets/colors/colors";

export default StyleSheet.create({
    container: {
        flexDirection: "row",
        marginVertical: 15,
        alignItems: "center"
    },
    title: {
        flex: 1,
        fontSize: 20,
        fontFamily: "Gordita Bold",
        color: colors.orange,
    },
    image: {
        width: 24,
        height: 24,
        marginLeft: 25
    }
})