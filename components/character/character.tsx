import * as React from "react";
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withTiming,
  withRepeat,
  withSequence,
} from "react-native-reanimated";
import {
  BodyWrapper,
  CharacterContainer,
  ImageWrapper,
} from "./character.presets";
import { Image } from "../image/image";
import { CharacterProps } from "./character.props";
import { Text } from "../text/text";
import { Button } from "../button/button";

export const Character = (props: CharacterProps) => {
  const rotationAnimation = useSharedValue(0);

  rotationAnimation.value = withRepeat(
    withSequence(
      withTiming(25, { duration: 150 }),
      withTiming(0, { duration: 150 })
    ),
    4 // Run the animation 4 times
  );

  const animatedStyle = useAnimatedStyle(() => ({
    transform: [{ rotate: `${rotationAnimation.value}deg` }],
  }));

  return (
    <CharacterContainer>
      <Animated.View style={animatedStyle}>
        <ImageWrapper>
          <Image
            width={250}
            height={250}
            shape="circle"
            source={{ uri: props.image }}
          />
        </ImageWrapper>
      </Animated.View>
      <BodyWrapper>
        <Text type="subtitle">{props.name}</Text>
        <Text type="default">{props.species}</Text>
        <Text type="defaultSemiBold">{props.type}</Text>
      </BodyWrapper>
      {props.onPress != null && (
        <Button onPress={props.onPress}>More info...</Button>
      )}
    </CharacterContainer>
  );
};
