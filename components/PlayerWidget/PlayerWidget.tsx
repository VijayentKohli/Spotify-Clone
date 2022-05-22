import React, { useEffect, useState } from "react";
import { Text, Image, View, TouchableOpacity } from "react-native";
import styles from "./PlayerWidget.styles";
import { Song } from "../../types";
import { Ionicons } from "@expo/vector-icons";
// import { AppContext } from "../../AppContext";
import { Sound } from "expo-av/build/Audio/Sound";

export type SongListItemProps = {
  song: Song;
};

const PlayerWidget = (props: SongListItemProps) => {
  //   const { song } = props;

  // const [song, setSong] = useState(null);
  const [sound, setSound] = useState<Sound | null>(null);
  const [isPlaying, setIsPlaying] = useState<boolean>(false);
  const [duration, setDuration] = useState<number | null>(null);
  const [position, setPosition] = useState<number | null>(null);

  const song = {
    id: "4",
    imageUri:
      "https://cache.boston.com/resize/bonzai-fba/Globe_Photo/2011/04/14/1302796985_4480/539w.jpg",
    title: "High on You",
    artist: "Helen",
    uri: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3",
  };

  // useEffect(() => {
  //   const fetchSong = async () => {
  //     try {
  //       const data = await API.graphql(graphqlOperation(getSong, { id: songId }))
  //       setSong(data.data.getSong);
  //     } catch (e) {
  //       console.log(e);
  //     }
  //   }

  //   fetchSong();
  // }, [songId])

  const onPlaybackStatusUpdate = (status: any) => {
    setIsPlaying(status.isPlaying);
    setDuration(status.durationMillis);
    setPosition(status.positionMillis);
  };

  const playCurrentSong = async () => {
    if (sound) {
      await sound.unloadAsync(); //Plays new song everytime
    }

    const { sound: newSound } = await Sound.createAsync(
      { uri: song.uri },
      { shouldPlay: isPlaying },
      onPlaybackStatusUpdate
    );

    setSound(newSound);
  };

  useEffect(() => {
    if (song) {
      playCurrentSong();
    }
  }, [song]);

  const onPlayPausePress = async () => {
    if (!sound) {
      return;
    }
    setIsPlaying(!isPlaying);
    if (isPlaying) {
      await sound.stopAsync();
    } else {
      await sound.playAsync();
    }
  };

  const getProgress = () => {
    if (sound === null || duration === null || position === null) {
      return 0;
    }
    return (position / duration) * 100;
  };

  if (!song) {
    return null;
  }

  return (
    <View style={styles.container}>
      <View style={[styles.progress, { width: "50%" }]} />
      <View style={styles.rowContainer}>
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
            <TouchableOpacity onPress={onPlayPausePress}>
              <Ionicons
                name={isPlaying ? "pause" : "play"}
                // name="pause"
                color={"white"}
                size={25}
                style={{ marginBottom: -3, marginLeft: 10 }}
              />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
};

export default PlayerWidget;
