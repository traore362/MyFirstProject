import ImageViewer from "@/components/imageViewer";
import {Text,View,StyleSheet, PlatformColor  } from "react-native";
export default function AboutScreen(){
    return(
        <View style={styles.contenaire}>
            <Text style={styles.text}>
                Abaout screen
            </Text>
            
        </View>
    );
}
const styles= StyleSheet.create({
    contenaire:{
        flex:1,
        justifyContent:'center',
        alignItems:'center', 
        backgroundColor:'#25292e'
    },
    text:{
        color:'#fff',
        
    }
})