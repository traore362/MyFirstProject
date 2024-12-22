import { Link, Stack } from "expo-router";
import { Text,View,StyleSheet  } from "react-native";


export default function NotFoundScreen(){
    return(
       <>
        <Stack.Screen options={{title:'Oop! Not Found'}}/>
        <View style={styles.contenaire}>
          <Link href={'/'}>Go back to Home screen</Link>
        </View>
       </>
    )
};
const styles= StyleSheet.create({
        contenaire:{
            flex:1,
            justifyContent:'center',
            textAlign:'center',
            backgroundColor:'#25292e'
        },
        linkstyle:{
            fontSize:20,
            textDecorationLine:'underline',
            color:'#fff'
          }
})