import { MaterialIcons } from '@expo/vector-icons';
import { PropsWithChildren } from 'react'
import { Modal, Pressable, View, Text, StyleSheet } from 'react-native'
type Props= PropsWithChildren<{
    isVisible:boolean;
    onClose:()=>void;

}>;

export default function EmojiPicker({isVisible,children, onClose}:Props) {
  return (
   <Modal animationType='slide' transparent={true} visible={isVisible}>
        <View style={styles.modalContent}>
            <View style={styles.titleContainer}>
                <Text style={styles.title}>Choisir un sticker</Text>
                <Pressable onPress={onClose}>
                    <MaterialIcons name='close' color='#fff' size={22}/>
                </Pressable>
            </View>
            {children}
        </View>
   </Modal>
  )
}
 const styles= StyleSheet.create({
    modalContent:{
            height:'25%',
            width:'100%',
            backgroundColor:'#25292e',
            borderTopLeftRadius:18,
            borderTopRightRadius:18,
            position:'absolute',
            bottom:0,
        },
    titleContainer:{
            height:'16%',
            backgroundColor:"#465C55",
            borderTopRightRadius:10,
            borderTopLeftRadius:10,
            paddingHorizontal:20,
            flexDirection:'row',
            alignItems:'center',
            justifyContent:'space-between'
        },
        title:{
            color:'#fff',
            fontSize:16,
        }    
 })