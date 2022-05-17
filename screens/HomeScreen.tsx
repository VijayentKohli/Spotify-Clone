import { Text, View } from "react-native";
import EditScreenInfo from "../components/EditScreenInfo";
import { RootTabScreenProps } from "../types";
import { styles } from "./HomeScreen.styles";
import Album from "../components/album/album";

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
      <Album album={testAlbum} />
      {/* <EditScreenInfo path="/screens/HomeScreen.tsx" /> */}
    </View>
  );
}
