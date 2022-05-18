import React from "react";
import { Image, Text, TouchableOpacity } from "react-native";
import { styles } from "./album.styles";
import { useNavigation } from "@react-navigation/native";

export interface AlbumProps {
  id: string;
  imageUri: string;
  artistsHeadline: string;
  title?: string;
}

export const Album = (props: AlbumProps) => {
  const navigation = useNavigation();

  const _onPress = (props) => {
    // console.warn(`Album pressed : ${props.artistsHeadline}`);
    navigation.navigate("AlbumScreen", {
      id: props.id,
      imageUri: props.imageUri,
      artistsHeadline: props.artistsHeadline,
    });
  };

  return (
    <TouchableOpacity
      style={styles.container}
      onPress={() => {
        _onPress(props);
      }}
    >
      {/* Image of album */}
      <Image style={styles.cover} source={{ uri: props.imageUri }}></Image>
      {/* Artists */}
      <Text style={styles.text}>{props.artistsHeadline}</Text>
    </TouchableOpacity>
  );
};
