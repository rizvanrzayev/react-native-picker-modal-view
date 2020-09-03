import { StyleSheet, Dimensions } from "react-native";
const { height } = Dimensions.get("screen");
export const AlphabetStyle = StyleSheet.create({
    container: {
        marginHorizontal: 10,
        zIndex: 2,
    },
    alphabetButton: {
        paddingVertical: 5,
        paddingHorizontal: 5,
    },
    alphabetText: {
        fontSize: 10,
        textAlign: "center",
        color: "#fff",
    },
    selected: {
        fontWeight: "bold",
        color: "#fff",
    },
});
//# sourceMappingURL=AlphabetStyle.js.map