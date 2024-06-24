import { Image } from "@/components/image/image";
import { ICharacter } from "@/models/character.model";
import { characterService } from "@/services/character.service";
import { useEffect, useState } from "react";
import {
  Body,
  Detail,
  ImageWrapper,
  Row,
  Section,
  Title,
} from "./character.presets";
import { ScrollView } from "react-native";
import { useLocalSearchParams } from "expo-router";
import ParallaxScrollView from "@/components/ParallaxScrollView";

export default function Character() {
  const { id = 1 } = useLocalSearchParams();;

  const [character, setCharacter] = useState<ICharacter | undefined>(undefined);
  useEffect(() => {
    characterService.single(id).then((response) => {
      console.log("single", response);
      setCharacter(response);
    });

    return () => {};
  }, [id]);

  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: "#A1CEDC", dark: "#1D3D47" }}
      headerImage={
        <Image
          style={{ width: "100%", height: "100%" }}
          source={{
            uri: character?.image,
          }}
        />
      }
    >
      <Body>
        <Row>
          <Section>
            <Title type="title">{character?.name}</Title>
            <Detail>Status: {character?.status}</Detail>
            <Detail>Specie: {character?.species}</Detail>
            <Detail>Type: {character?.type}</Detail>
            <Detail>Gender: {character?.gender}</Detail>
          </Section>
          <Section>
            <Title type="title">Origin</Title>
            <Detail>Name: {character?.origin.name}</Detail>
            <Detail>URL: {character?.origin.url}</Detail>
          </Section>
          <Section>
            <Title type="title">Location</Title>
            <Detail>Name: {character?.location.name}</Detail>
            <Detail>URL: {character?.location.url}</Detail>
          </Section>
          <Section>
            <Title type="title">Episodes</Title>
            {character?.episode.map((episode, index) => (
              <Detail key={index}>{episode}</Detail>
            ))}
          </Section>
          <Section>
            <Title type="title">URL</Title>
            <Detail>{character?.url}</Detail>
          </Section>
          <Section>
            <Title type="title">Created</Title>
            <Detail>{character?.created}</Detail>
          </Section>
        </Row>
      </Body>
    </ParallaxScrollView>
  );
}
