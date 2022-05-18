import React, { useState } from "react";
import { View, Text, Image, FlatList } from "react-native";
import { AlbumProps } from "../components/album/album";
import { styles } from "./AlbumScreen.styles";
import albumDetails from "../data/albumDetails";
import { useRoute } from "@react-navigation/native";
import AlbumHeader from "../components/AlbumHeader/AlbumHeader";
import SongList from "../components/SongLists/SongList";
export interface AlbumScreenProps {
  id: string;
  imageUri: string;
  artistsHeadline: string;
  title?: string;
}

const testAlbumScreen = {
  id: "11",
  name: "Naach Kutte",
  by: "BadShah",
  numberOfLikes: 33,
  imageUri:
    "https://cache.boston.com/resize/bonzai-fba/Globe_Photo/2011/04/14/1302796985_4480/539w.jpg",
  artistsHeadline: "Yo Yo",
  songs: [
    {
      id: "1",
      imageUri:
        "https://images-na.ssl-images-amazon.com/images/I/61F66QURFyL.jpg",
      title: "Bajao",
      artist: "KK",
    },
    {
      id: "2",
      imageUri:
        "https://images-na.ssl-images-amazon.com/images/I/61F66QURFyL.jpg",
      title: "Bajao",
      artist: "KK",
    },
    {
      id: "3",
      imageUri:
        "https://images-na.ssl-images-amazon.com/images/I/61F66QURFyL.jpg",
      title: "Kodula Simbula",
      artist: "KK",
    },
    {
      id: "4",
      imageUri:
        "https://images-na.ssl-images-amazon.com/images/I/61F66QURFyL.jpg",
      title: "Hello",
      artist: "KK",
    },
  ],
};

export const AlbumScreen = (props: AlbumProps) => {
  const route = useRoute();
  const albumId = route.params.id;

  // const [album, setAlbum] = useState(null);

  // if (!album) {
  //   return <Text>Loading...</Text>;
  // }

  return (
    <View>
      <FlatList
        data={testAlbumScreen.songs}
        renderItem={({ item }) => <SongList song={item} />}
        keyExtractor={(item) => item.id}
        ListHeaderComponent={() => <AlbumHeader album={testAlbumScreen} />}
      />
    </View>
  );
};
