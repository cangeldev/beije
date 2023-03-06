import { StyleSheet } from "react-native";
import colors from "../../assets/colors/colors";
export default StyleSheet.create({
    container: {
        backgroundColor: colors.white,
    },
    headerTitle: {
        fontSize: 20,
        fontFamily: "Gordita Bold",
        color: colors.customBlack,
        flex: 1
    },
    headerView: {
        flexDirection: "row",
        marginTop: 10,
        alignItems: "center",
        marginHorizontal: 20
    },
    close: {
        width: 28,
        height: 28,
        tintColor: "grey"
    },
    infoView: {
        flexDirection: "row",
        alignItems: "center",
        backgroundColor: colors.white,
        marginHorizontal: 20,
        borderRadius: 10,
        paddingVertical: 10,
        paddingHorizontal: 20,
        elevation: 3,
        marginTop: 10
    },
    refresh: {
        width: 20,
        height: 20,
        tintColor: "grey"
    },
    infoText: {
        marginLeft: 15,
        fontSize: 16,
        fontFamily: "Gordita Regular",
        color: colors.customBlack
    },
    photo: {
        width: "90%",
        alignSelf: "center",
        marginTop: 20,
        height: 160
    },
    contentView: {
        backgroundColor: colors.white,
        marginHorizontal: 20,
        borderRadius: 10,
        paddingVertical: 5,
        paddingHorizontal: 20,
        elevation: 3,
        marginTop: 10
    },
    contentTitle: {
        fontSize: 17,
        fontFamily: "Gordita Medium",
        color: colors.customBlack
    },
    contentText: {
        fontFamily: "Gordita Regular",
        color: "grey",
        marginTop: 10
    },
    deleteText: {
        fontFamily: "Gordita Medium",
        color: colors.customBlack,
        marginTop: 10
    },
    buttonView: {
        width: "90%",
        alignSelf: "center",
        marginTop: 20
    }
})