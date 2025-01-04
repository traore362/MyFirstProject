//1-importer StyleSheet pour définir des styles
import { View, StyleSheet } from "react-native";
import Button from '@/components/Button'; 
import ImageViewer from "@/components/imageViewer";
//il faut importer ImagePiker aprèes l'instalation de expo-image-picker avec la commande "npx expo install expo-image-picker "
import * as ImagePicker from 'expo-image-picker';
import { useState } from "react";
import IconButton from "@/components/IconButton";
import CircleButton from "@/components/CircleButton";
import EmojiPicker from "@/components/EmojiPicker";
import { ImageSource } from "expo-image";
import EmojiList from "@/components/EmojiList";
import EmojiSticker from "@/components/EmojiSticker";
import { GestureHandlerRootView } from "react-native-gesture-handler";

const PlaceholderImage = require("@/assets/images/background-image.png");

export default function Index() {

  //Créez une variable d’état qui contiendra la valeur de l’image sélectionnée.
  const [selectedImage, setSelectedImage]= useState<string|undefined>(undefined);
  const [showAppOptions, setShowAppOptions]= useState<boolean>(false);
  const[ isModalVisible ,setModalVisible]= useState<boolean>(false);
  const[ pickedEmoji, setPickedEmoji]=useState<ImageSource | undefined>(undefined);

  //Transmettez les options du sélecteur d'images à launchImageLibraryAsync()
  const pickImageAsnc = async()=>{

      let result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ['images'],
        allowsEditing: true,
        quality: 1,
      });
      
      if (!result.canceled) {

          //Si l'image est sélectionnée, Choisissez le premier URI du assetstableau. De plus, une seule image est sélectionnée à la fois, vous n'avez donc pas besoin de modifier cela.
          setSelectedImage(result.assets[0].uri);
          setShowAppOptions(true);
        }else{

          //Si l'utilisateur ne sélectionne pas d'image, affichez une alerte.
          alert("vous n'aviez selectioner aucune image")
        }
    };
    //fonction de restauration
    const onReset=()=>{
      setShowAppOptions(false);
    };
    //fonction pour ajouter un stiker
    const onAddSticker=()=>{
      setModalVisible(true);
    };
    //fonction de fermeture de la modale
    const onModalClose=()=>{
      setModalVisible(false);
    };

    const onSaveImageAsync= async()=>{
      // nous implémenterons cela plus tard
    };

  return (
    <GestureHandlerRootView style={styles.container}>
        <View style={styles.imageContainer}>
          <ImageViewer imgSource={PlaceholderImage} selectedImage={selectedImage} />
          {pickedEmoji && <EmojiSticker imageSize={40} stickerSource={pickedEmoji}/>}

        </View>
        {showAppOptions?(
            <View style={styles.optionsContainer}>
                <View style={styles.optionsRow}>
                    <IconButton icon="refresh" label="Reset" onPress={onReset}/>
                    <CircleButton onPress={onAddSticker}/>
                    <IconButton icon="save-alt" label="save" onPress={onSaveImageAsync}/>
                </View>
            </View>
          ):(
            <View style={styles.footerContainer}>
              <Button theme="primary" label="Choose a photo" onPress={pickImageAsnc} />
              <Button label="Use this photo" onPress={()=>setShowAppOptions(true)} />
            </View>
          )
        } 
        <EmojiPicker isVisible={isModalVisible} onClose={onModalClose} >
            <EmojiList onSelect={setPickedEmoji} onCloseModal={onModalClose}/>
        </EmojiPicker>
    </GestureHandlerRootView>
  );
}

const styles = StyleSheet.create({
  container: {
      flex: 1,
      backgroundColor: '#25292e',
      alignItems: 'center',
    },
  imageContainer: {
      flex: 1,
      paddingTop: 28,
    },
  footerContainer: {
      flex: 1 /3,
      alignItems: 'center',
    },
  optionsContainer:{
      position:'absolute',
      bottom:80,
    },
  optionsRow:{
      alignItems:'center',
      flexDirection:'row',
    },
});
