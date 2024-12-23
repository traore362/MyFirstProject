import { Text,StyleSheet,View,Pressable  } from "react-native";
import FontAwesome from "@expo/vector-icons/FontAwesome";

type Props={
    label:string;
    theme?:'primary';
    onPress?: ()=>void;
};

export default function Button({label,theme,onPress}:Props){
    if(theme==='primary'){
            return(
                <View style={[style.buttonContainer,{borderWidth:4,borderColor:'#ffd33d',borderRadius:18}]} >
                    <Pressable style={[style.button, {backgroundColor:'#fff'}]} onPress={onPress}>
                        <FontAwesome name="picture-o" size={18} color="#25292e" style={style.buttonIcon} />
                        <Text style={[style.buttonLabel,{color:"#25292e"}]}>{label}</Text>
                    </Pressable>
                </View>
            );
    }
    return(
        <View style={style.buttonContainer}>
                    <Pressable style={style.button} onPress={()=>alert('Vous avez appuyé sur un bouton')}>
                        <Text style={style.buttonLabel}>{label}</Text>
                    </Pressable>
                </View>
    )
}
 const style = StyleSheet.create({
        buttonContainer:{
            width:320,
            height:68,
            marginHorizontal:20,
            alignItems:'center',
            justifyContent:'center',
            padding:3,
        },
        button:{
            borderRadius:10,
            width:'100%',
            height:'100%',
            alignItems:'center',
            justifyContent:'center',
            flexDirection:'row',
        },
        buttonLabel:{
            color:'#fff',
            fontSize:16,
        },
        buttonIcon:{
            paddingRight:8,
        },
       

 })