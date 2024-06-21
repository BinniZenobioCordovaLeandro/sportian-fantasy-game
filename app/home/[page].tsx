import { Image, ScrollView } from "react-native";
import { useEffect, useState } from "react";
import { characterService } from "@/services/character.service";
import ParallaxScrollView from "@/components/ParallaxScrollView";
import { ICharacter } from "@/models/character.model";
import { Character } from "@/components/character/character";
import { Button } from "@/components/button/button";
import { router, useLocalSearchParams } from "expo-router";
import { Body, ConfigBar, ListContainer, NavigationContainer } from "./home.presets";
import { TextInput } from "@/components/text-input/text-input";

export default function HomeScreen() {
  const { page = 1 } = useLocalSearchParams();

  const [characters, setCharacters] = useState<ICharacter[]>([]);
  const [filterName, setFilterName] = useState<string | undefined>(undefined);

  const [filteredCharacters, setFilteredCharacters] = useState<
    ICharacter[] | null
  >([]);

  useEffect(() => {
    characterService.pagination(page).then((response) => {
      console.log("pagination", response);
      const data = response?.results;
      setCharacters(data);
      setFilteredCharacters(data);
    });

    return () => {};
  }, [page]);

  useEffect(() => {
    console.log("filterName", filterName);
    if (filterName) {
      const data = characters.filter((character) => {
        return character.name.toLowerCase().includes(filterName.toLowerCase());
      });
      setFilteredCharacters(data);
    } else {
      setFilteredCharacters(characters);
    }
  }, [filterName]);

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
      <Body>
        <ConfigBar>
          <TextInput
            placeholder="Search"
            value={filterName}
            onChangeText={(text) => setFilterName(text)}
          />
          <Button onPress={() => setFilterName(undefined)}>Clear</Button>
        </ConfigBar>
        <ListContainer>
          {filteredCharacters?.map((character) => (
            <Character
              key={character.id}
              name={character.name}
              species={character.species}
              type={character.type}
              image={character.image}
              onPress={() => {
                router.navigate(`character/${character.id}`);
              }}
            />
          ))}
        </ListContainer>
        <NavigationContainer>
          <Button
            onPress={() => {
              router.navigate(`home/${parseInt(page) - 1}`);
            }}
          >
            {"<<< Previous Page"}
          </Button>
          <Button
            onPress={() => {
              router.navigate(`home/${parseInt(page) + 1}`);
            }}
          >
            {"Next Page >>>"}
          </Button>
        </NavigationContainer>
      </Body>
    </ParallaxScrollView>
  );
}
