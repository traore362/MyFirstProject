import { MaterialIcons } from '@expo/vector-icons';
import {Pressable, StyleSheet, View,} from 'react-native'

type Props={
    onPress:()=>void;
}

export default function CircleButton({onPress}:Props) {
  return (
    <View style={styles.CircleButtonContenaire}>
      <Pressable style={styles.circleButtone} onPress={onPress}>
        <MaterialIcons name='add' size={38} color="#25292e"/>
      </Pressable>
    </View>
  )
}
const styles =StyleSheet.create({
    CircleButtonContenaire:{
        width:84,
        height:84,
        marginHorizontal:60,
        borderWidth:4,
        borderColor:'#ffd33d',
        borderRadius:42,
        padding:3,
    },
    circleButtone:{
      flex:1,
      justifyContent:'center',
      alignItems:'center',
      borderRadius:42,
      backgroundColor:"#fff"
    }


})
