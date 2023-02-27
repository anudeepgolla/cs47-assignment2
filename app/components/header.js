import {StyleSheet, View, Text, Image, Dimensions} from "react-native";
import Icons from "../../assets/Icons";

const WindowWidth = Dimensions.get("window").width;
const WindowHeight = Dimensions.get("window").height;

const Header = () => {
    return (
        <View style={styles.header}>
            <Image source={Icons.menu.dark} style={styles.headerIcons}/>
            <Text style={styles.title}>ensom</Text>
            <Image source={Icons.moon} style={styles.headerIcons}/>
        </View>

    )
}

const styles = StyleSheet.create({
    headerIcons: {
        height: WindowWidth*0.15,
        width: WindowWidth*0.15,
    },
    title: {
        fontFamily: "Sydney-Bold",
        fontSize: 32,
        textAlign: "center",
        color: "white",
    },
    header: {
        alignItems: 'center', 
        flexDirection: "row",
        justifyContent: 'space-between',
        marginTop: 20,
        marginLeft: 20,
        marginRight: 20,
    },
});



export default Header;