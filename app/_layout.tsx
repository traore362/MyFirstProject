//2-importez Stack composant pour créer une pile de navigation afin d'ajouter de nouveaux itinéraire
import { Stack } from "expo-router";

export default function RootLayout() {
  return (
    //3- ajouter Stack.screen composant à l'interieur du Stack composant avec les accessoire "name"et"option" afin de pouvoir définir chaque itinéraire 
    //la propriété headerShown: false masque l'entête du navigateur de pile (tabs)
    <Stack>
      <Stack.Screen name="(tabs)" options={{headerShown:false}} />;
      <Stack.Screen name="+not-found" />;
    </Stack>

  )
}
