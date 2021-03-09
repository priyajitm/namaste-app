import React, { useState } from "react";
import { SafeAreaView, FlatList } from "react-native";

import MessageItem from "../components/MessageItem";

import Header from "../components/Header";
import Search from "../components/Search";
import MessageDelete from "../components/MessageDelete";

const initialMessages = [
  {
    id: 1,
    name: "John Doe",
    message: "Interesting ideas are floating, come soon.",
    image: { uri: "https://randomuser.me/api/portraits/med/men/97.jpg" },
    read: false,
  },
  {
    id: 2,
    name: "Chompa",
    message:
      "I will be joining to the next meeting. Do you happen to have the agenda with you?",
    image: { uri: "https://randomuser.me/api/portraits/med/women/31.jpg" },
    read: true,
  },
  {
    id: 3,
    name: "Ranu Mondal",
    message: "chompa dighir pare mach dhorchi ami",
    image: { uri: "https://randomuser.me/api/portraits/med/women/12.jpg" },
    read: true,
  },
  {
    id: 4,
    name: "Ramen Babu",
    message: "Joto dosh amar ghare",
    image: { uri: "https://randomuser.me/api/portraits/med/men/92.jpg" },
    read: false,
  },
  {
    id: 5,
    name: "Sanjay Pathak",
    message: "amar ek choto jhuli ete ram ravan ache",
    image: { uri: "https://randomuser.me/api/portraits/med/men/64.jpg" },
    read: true,
  },
  {
    id: 6,
    name: "Tumpa Sona",
    message: "aami ar kauke hampi debona",
    image: { uri: "https://randomuser.me/api/portraits/med/women/4.jpg" },
    read: true,
  },
  {
    id: 7,
    name: "Akshay Mohanti",
    message: "chabke soja kore debo ekdom",
    image: { uri: "https://randomuser.me/api/portraits/med/men/15.jpg" },
    read: true,
  },
  {
    id: 8,
    name: "Raghu Chandi",
    message: "ja devi doure jabi sikhbi multimedia",
    image: { uri: "https://randomuser.me/api/portraits/med/men/63.jpg" },
    read: false,
  },
];

function MessagesScreen() {
  const [messages, setMessages] = useState(initialMessages);
  const [showSearch, setShowSearch] = useState(false);
  const [searchField, setSearchField] = useState("");

  const handleLeftIcon = () => {
    setShowSearch(true);
  };

  const onSearchChange = (text) => {
    setSearchField(text);
  };

  const filteredMessages = initialMessages.filter((message) => {
    return (
      message.name.toLowerCase().includes(searchField.toLowerCase()) ||
      message.message.toLowerCase().includes(searchField.toLowerCase())
    );
  });

  const deleteMessage = (message) => {
    setMessages(messages.filter((m) => m.id !== message.id));
  };

  return (
    <SafeAreaView>
      <Header
        leftIconName="magnify"
        headerName="Messages"
        rightIconName="plus"
        handleLeftIcon={handleLeftIcon}
      />

      <FlatList
        data={filteredMessages}
        keyExtractor={(message) => message.id.toString()}
        renderItem={({ item }) => (
          <MessageItem
            name={item.name}
            message={item.message}
            image={item.image}
            read={item.read}
            renderRightActions={() => (
              <MessageDelete onPress={() => deleteMessage(item)} />
            )}
          />
        )}
        ListHeaderComponent={
          showSearch && <Search query="" onSearchChange={onSearchChange} />
        }
      />
    </SafeAreaView>
  );
}

export default MessagesScreen;
