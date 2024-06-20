import { Image } from "@/components/image/image";
import { Text } from "@/components/text/text";
import { ICharacter } from "@/models/character.model";
import { characterService } from "@/services/character.service";
import { useRoute } from "@react-navigation/native";
import { useEffect, useState } from "react";
import { View } from "react-native";

interface ITabTwoScreenProps {
  id?: number;
}

export default function TabTwoScreen() {
  const route = useRoute();
  const { id = 1 } = route.params as ITabTwoScreenProps;

  const [character, setCharacter] = useState<ICharacter | undefined>(undefined);
  useEffect(() => {
    characterService.single(id).then((response) => {
      console.log("single", response);
      setCharacter(response);
    });

    return () => {};
  }, [id]);

  return <View>
    <View style={{
      flex: 1,
      flexDirection: "row",
      flexWrap: "wrap",
      justifyContent: "space-around",
      padding: 10,
    }}>
      <Image source={{ uri: character?.image }} />
      <Text type="title">{character?.name}</Text>
      <Text>{character?.species}</Text>
      <Text>{character?.type}</Text>
    </View>
  </View>;
}