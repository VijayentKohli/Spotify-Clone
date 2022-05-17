import React from "react";
import { View, Text, FlatList } from "react-native";
import { AlbumProps, Album } from "../album/album";
import { styles } from "./AlbumCategory.styles";

export const testAlbumCategory = {
  id: "1",
  title: "Happy Vibes",
  albums: [
    {
      id: "1",
      imageUri:
        "https://cache.boston.com/resize/bonzai-fba/Globe_Photo/2011/04/14/1302796985_4480/539w.jpg",
      artistsHeadline: "Taylor Swift, Kygo Objective C, Avicii",
    },
    {
      id: "2",
      imageUri:
        "https://cdn6.f-cdn.com/contestentries/1485199/27006121/5ca3e39ced7f1_thumb900.jpg",
      artistsHeadline: "Post Malone, Drake, Eminem",
    },
    {
      id: "3",
      imageUri:
        "https://images-na.ssl-images-amazon.com/images/I/61F66QURFyL.jpg",
      artistsHeadline: "Journey, Escape, Avicii",
    },
    {
      id: "4",
      imageUri:
        "https://i.pinimg.com/originals/a2/0d/37/a20d37791f8ad5cd54734cd3af559cc9.jpg",
      artistsHeadline: "Bob Marley, Cardi B, Stas Mihailov",
    },
  ],
};

export interface AlbumCategoryProps {
  id: string;
  title: string;
  albums: AlbumProps[];
}

// const renderItem = ({ item: AlbumProps }) => (<Album id={item.id} artistsHeadline={item.artistsHeadline} imageUri={item.imageUri}/>);
const _renderItem = ({ item }) => {
  return (
    <Album
      id={item.id}
      imageUri={item.imageUri}
      artistsHeadline={item.artistsHeadline}
    />
  );
};

export const AlbumCategory = (props: AlbumCategoryProps) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{props.title}</Text>
      <FlatList
        data={props.albums}
        renderItem={_renderItem}
        keyExtractor={(item) => item.id}
        horizontal
      />
    </View>
  );
};
