//4- importez Link composant afin de rédiriger à la racine au cas ou un intinéraire est introuvable 
import { Link, Stack } from "expo-router";
import { View,StyleSheet  } from "react-native";


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