import React, { useContext } from "react";
import { Text, Image, View, TouchableOpacity } from "react-native";
import styles from "./SongList.styles";
import { Song } from "../../types";
import { Ionicons } from "@expo/vector-icons";
// import { AppContext } from "../../AppContext";

export type SongListItemProps = {
  song: Song;
};

const SongList = (props: SongListItemProps) => {
  const { song } = props;

  //   const { setSongId } = useContext(AppContext);

  //   const onPlay = () => {
  //     setSongId(song.id);
  //   };

  return (
    <TouchableOpacity>
      <View style={styles.container}>
        <Image source={{ uri: song.imageUri }} style={styles.image} />
        <View style={styles.rightContainer}>
          <Text style={styles.title}>{song.title}</Text>
          <Text style={styles.artist}>{song.artist}</Text>
        </View>
        <View style={styles.rightEndContainer}>
          <Ionicons
            name="ellipsis-horizontal-outline"
            color={"grey"}
            size={18}
            style={{ marginBottom: -3 }}
          />
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default SongList;
