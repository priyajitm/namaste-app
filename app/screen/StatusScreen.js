import React, { useState } from "react";
import { Image, SafeAreaView, ScrollView, Text, View } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import Header from "../components/Header";
import Screen from "../components/Screen";
import ImageStatus from "../components/ImageStatus";

const data = [
  {
    id: 1,
    userName: "John Doe",
    profileImage: { uri: "https://randomuser.me/api/portraits/men/31.jpg" },
    statusImage: [
      { uri: "https://randomuser.me/api/portraits/men/37.jpg" },
      { uri: "https://randomuser.me/api/portraits/men/33.jpg" },
      { uri: "https://randomuser.me/api/portraits/men/85.jpg" },
    ],
    status: "This is a status",
    location: "location",
  },
  {
    id: 2,
    userName: "Jane Doe",
    profileImage: { uri: "https://randomuser.me/api/portraits/women/31.jpg" },
    statusImage: [
      { uri: "https://randomuser.me/api/portraits/women/21.jpg" },
      { uri: "https://randomuser.me/api/portraits/men/41.jpg" },
    ],
    status: "This is my status",
    location: "location new",
  },
];

function StatusScreen(props) {
  const [statuses, editStatuses] = useState(data);

  return (
    <>
      <Header headerName="NAMASTE" />

      <ScrollView>
        {statuses.map((item) => (
          <ImageStatus
            key={item.id}
            profileImage={item.profileImage}
            name={item.userName}
            location={item.location}
            userStatus={item.status}
            statusImage={item.statusImage}
          />
        ))}
      </ScrollView>
    </>
  );
}

export default StatusScreen;
