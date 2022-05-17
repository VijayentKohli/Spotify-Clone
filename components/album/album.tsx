import React from "react";
import { Image, View, Text } from "react-native";
import { styles } from "./album.styles";

export interface AlbumProps {
  album: {
    id: string;
    imageUri: string;
    title?: string;
    artistsHeadline: string;
  };
}

const Album = (props: AlbumProps) => {
  return (
    <View style={styles.container}>
      {/* Image of album */}
      <Image
        style={styles.cover}
        source={{ uri: props.album.imageUri }}
      ></Image>
      {/* Artists */}
      <Text style={styles.text}>{props.album.artistsHeadline}</Text>
    </View>
  );
};

export default Album;
