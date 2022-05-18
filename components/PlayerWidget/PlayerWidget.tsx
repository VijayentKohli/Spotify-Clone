import React, { useContext } from "react";
import { Text, Image, View, TouchableOpacity } from "react-native";
import styles from "./PlayerWidget.styles";
import { Song } from "../../types";
import { Ionicons } from "@expo/vector-icons";
// import { AppContext } from "../../AppContext";

export type SongListItemProps = {
  song: Song;
};

const PlayerWidget = (props: SongListItemProps) => {
  //   const { song } = props;

  const song = {
    id: "4",
    imageUri:
      "https://cache.boston.com/resize/bonzai-fba/Globe_Photo/2011/04/14/1302796985_4480/539w.jpg",
    title: "High on You",
    artist: "Helen",
  };

  return (
    <View style={styles.container}>
      <Image source={{ uri: song.imageUri }} style={styles.image} />
      <View style={styles.rightContainer}>
        <View style={styles.textContainer}>
          <Text style={styles.title}>{song.title}</Text>
          <Text style={styles.artist}>{song.artist}</Text>
        </View>
        <View style={styles.iconContainer}>
          <Ionicons
            name="heart"
            color={"white"}
            size={25}
            style={{ marginBottom: -3 }}
          />
          <Ionicons
            name="pause"
            color={"white"}
            size={25}
            style={{ marginBottom: -3, marginLeft: 10 }}
          />
        </View>
      </View>
    </View>
  );
};

export default PlayerWidget;
