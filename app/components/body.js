import {StyleSheet, View, Image, ImageBackground, Text, Dimensions} from "react-native";
import Profiles from "../../assets/Profiles";
import themes from "../../assets/Themes/themes";
import Icons from "../../assets/Icons";

const WindowWidth = Dimensions.get("window").width;
const WindowHeight = Dimensions.get("window").height;


const Body = () => {
    console.log("Profiles", Profiles.mtl);
    return (
        <View>
            <ImageBackground
                source={Profiles.mtl.image} 
                style={styles.image}
                imageStyle={styles.imageStyle}
            >
                <Text style={styles.text1}>{Profiles.mtl.name}</Text>
                <Text style={styles.text2}>{Profiles.mtl.caption}</Text>
            </ImageBackground>
            <View style={styles.rectangle}>
                <Image source={Icons.player.dark} style={styles.playIcon}/>
                <Image source={Icons.audioWave.dark} style={styles.waveIcon}/>
            </View>

        </View>
    );
};

const styles = StyleSheet.create({
    image: {
        //width: WindowWidth*0.9,
        //height: WindowHeight*0.4,
        aspectRatio: 1/1.1,
        justifyContent: "space-between",
    },
    imageStyle: {
        borderRadius: 20,
        margin: 20,
        shadow: themes.light.shadows,
    },
    text1: {
        fontFamily: "Sydney",
        fontSize: 40,
        padding: 30,
        color: "white",
    },
    text2: {
        fontFamily: "Sydney",
        fontStyle: 'italic',
        fontSize: 20,
        padding: 30,
        color: "white",
    },
    rectangle: {
        marginTop: 20,
        marginLeft: 20,
        width: WindowWidth*0.9,
        height: 120,
        backgroundColor: '#2E2B2B',
        borderRadius: 20,
        alignItems: 'center', 
        flexDirection: "row",
        justifyContent: 'space-between',
        padding: 20,
       
    },
    playIcon: {
        height: WindowWidth*0.15,
        width: WindowWidth*0.15,
    },
    waveIcon: {
        flex: 0.95,
        //width: null,
        //height: null,
        resizeMode: 'contain'
    },
});

export default Body;