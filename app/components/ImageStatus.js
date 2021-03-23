import React from "react";
import { Image, Text, View } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { SliderBox } from "react-native-image-slider-box";

function ImageStatus({
  profileImage,
  name,
  location,
  statusImage,
  userStatus,
}) {
  return (
    <View>
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
          padding: 10,
        }}
      >
        <Image
          source={profileImage}
          style={{ width: 32, height: 32, borderRadius: 16 }}
        />
        <View style={{ flex: 1, paddingHorizontal: 10 }}>
          <Text style={{ fontSize: 16, fontWeight: "600" }}>{name}</Text>
          <Text>{location}</Text>
        </View>
        <MaterialCommunityIcons name="dots-horizontal" size={30} />
      </View>
      <View>
        {/* {statusImage.map((item) => (
          <Image source={item} style={{ width: "100%", height: 500 }} />
        ))} */}
        <SliderBox
          sliderBoxHeight={500}
          disableOnPress={true}
          images={statusImage}
        />
      </View>
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
          padding: 10,
        }}
      >
        <Text style={{ fontWeight: "500", fontSize: 16 }}>{name}</Text>
        <Text style={{ flex: 1, paddingHorizontal: 10, fontSize: 16 }}>
          {userStatus}
        </Text>
        <MaterialCommunityIcons name="chat-outline" size={30} />
      </View>
    </View>
  );
}

export default ImageStatus;
