import { Text, View } from "react-native";
import { RootTabScreenProps } from "../types";
import { styles } from "./HomeScreen.styles";
import { Album } from "../components/album/album";
import {
  AlbumCategory,
  testAlbumCategory,
} from "../components/albumCategory/AlbumCategory";

const testAlbum = {
  id: "2",
  imageUri:
    "https://cdn6.f-cdn.com/contestentries/1485199/27006121/5ca3e39ced7f1_thumb900.jpg",
  artistsHeadline: "Post Malone, Drake, Eminem",
};

export default function HomeScreen({
  navigation,
}: RootTabScreenProps<"TabOne">) {
  return (
    <View style={styles.container}>
      {/* <Album
        id={testAlbum.id}
        imageUri={testAlbum.imageUri}
        artistsHeadline={testAlbum.artistsHeadline}
      /> */}
      <AlbumCategory
        id={testAlbumCategory.id}
        title={testAlbumCategory.title}
        albums={testAlbumCategory.albums}
      />
      <AlbumCategory
        id={testAlbumCategory.id}
        title={testAlbumCategory.title}
        albums={testAlbumCategory.albums}
      />
    </View>
  );
}
