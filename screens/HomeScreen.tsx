import { FlatList, Text, View } from "react-native";
import { RootTabScreenProps } from "../types";
import { styles } from "./HomeScreen.styles";
import { Album } from "../components/album/album";
import {
  AlbumCategory,
  testAlbumCategory,
} from "../components/albumCategory/AlbumCategory";
import { default as albumCategoriesData } from "../assets/data/albumCategoriesData";

const testAlbum = {
  id: "2",
  imageUri:
    "https://cdn6.f-cdn.com/contestentries/1485199/27006121/5ca3e39ced7f1_thumb900.jpg",
  artistsHeadline: "Post Malone, Drake, Eminem",
};

const _renderItem = ({ item }) => {
  return <AlbumCategory id={item.id} title={item.title} albums={item.albums} />;
};

export default function HomeScreen({
  navigation,
}: RootTabScreenProps<"TabOne">) {
  return (
    <View style={styles.container}>
      <FlatList
        data={albumCategoriesData}
        renderItem={_renderItem}
        keyExtractor={(item) => item.id}
      ></FlatList>
    </View>
  );
}
