import { Image, View } from "react-native";
import { useEffect, useState } from "react";
import { characterService } from "@/services/character.service";
import ParallaxScrollView from "@/components/ParallaxScrollView";
import { ICharacter } from "@/models/character.model";
import { Character } from "@/components/character/character";
import { Button } from "@/components/button/button";
import { useRoute } from "@react-navigation/native";
import { router } from 'expo-router';

interface IHomeScreenProps {
  page?: number;
}

export default function HomeScreen() {
  const route = useRoute();
  const { page = 1 } = route.params as IHomeScreenProps;

  const [characters, setCharacters] = useState<ICharacter[]>([]);

  useEffect(() => {
    characterService.pagination(page).then((response) => {
      console.log("pagination", response);
      setCharacters(response?.results);
    });

    return () => {};
  }, [page]);

  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: "#A1CEDC", dark: "#1D3D47" }}
      headerImage={
        <Image
          style={{ width: "100%", height: "100%" }}
          source={{
            uri: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b1/Rick_and_Morty.svg/1280px-Rick_and_Morty.svg.png",
          }}
        />
      }
    >
      {/* use Wrap view  */}
      <View style={{
        flex: 1,
        flexDirection: "row",
        flexWrap: "wrap",
        justifyContent: "space-around",
        padding: 10,
      }}>
        {characters.map((character) => (
          <Character
            key={character.id}
            name={character.name}
            species={character.species}
            type={character.type}
            image={character.image}
            onPress={() => { 
              router.navigate("explore", { id: character.id });
            }}
          />
        ))}
      </View>
      <View>
        <Button onPress={() => {
          router.navigate("home", { page: page - 1 });
        }}>{"<<< Previous Page"}</Button>
        <Button onPress={() => { 
          router.navigate("home", { page: page + 1 });
        }}>{"Next Page >>>"}</Button>
      </View>
    </ParallaxScrollView>
  );
}
