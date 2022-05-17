import React from "react";
import { Image, View, Text } from "react-native";
import { styles } from "./album.styles";

export interface AlbumProps {
  id: string;
  imageUri: string;
  artistsHeadline: string;
  title?: string;
}

export const Album = (props: AlbumProps) => {
  return (
    <View style={styles.container}>
      {/* Image of album */}
      <Image style={styles.cover} source={{ uri: props.imageUri }}></Image>
      {/* Artists */}
      <Text style={styles.text}>{props.artistsHeadline}</Text>
    </View>
  );
};
