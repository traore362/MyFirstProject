//1-importer StyleSheet pour définir des styles
import { View, StyleSheet } from "react-native";

import Button from '@/components/Button'; 

import ImageViewer from "@/components/imageViewer";

//il faut importer ImagePiker aprèes l'instalation de expo-image-picker avec la commande "npx expo install expo-image-picker "
import * as ImagePicker from 'expo-image-picker';

import { useState } from "react";

const PlaceholderImage = require("@/assets/images/background-image.png");

export default function Index() {

  //Créez une variable d’état qui contiendra la valeur de l’image sélectionnée.
  const [selectedImage, setSelectedImage]= useState<string|undefined>(undefined);

  //Transmettez les options du sélecteur d'images à launchImageLibraryAsync()
  const pickImageAsnc = async()=>{
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ['images'],
      allowsEditing: true,
      quality: 1,
    });


    if (!result.canceled) {
      //Si l'image est sélectionnée, Choisissez le premier URI du assetstableau. De plus, une seule image est sélectionnée à la fois, vous n'avez donc pas besoin de modifier cela.
      setSelectedImage(result.assets[0].uri)
    }else{
      //Si l'utilisateur ne sélectionne pas d'image, affichez une alerte.
      alert("vous n'aviez selectioner aucune image")
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <ImageViewer imgSource={PlaceholderImage} selectedImage={selectedImage} />
      </View>
      <View style={styles.footerContainer}>
        <Button theme="primary" label="Choose a photo" onPress={pickImageAsnc} />
        <Button label="Use this photo" />
      </View>
    </View>
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
});
