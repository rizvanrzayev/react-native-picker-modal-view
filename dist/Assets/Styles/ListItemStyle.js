import { StyleSheet } from "react-native";
import { CommonStyle } from "./CommonStyle";
export const ListItemStyle = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: "column",
        height: CommonStyle.BTN_HEIGHT,
    },
    btnContainer: {
        flex: 1,
        marginLeft: 15,
        marginRight: 10,
        paddingVertical: 15,
        borderBottomWidth: 0.5,
        borderBottomColor: "rgba(255,255,255,.05)",
    },
    selected: {
        color: "#000",
        fontWeight: "bold",
        fontSize: 15,
    },
    notSelected: {
        color: '#fff',
        fontSize: 15,
    },
});
//# sourceMappingURL=ListItemStyle.js.map