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
    messages: [
      { text: "Hello", time: "10:00 am" },
      { text: "How are you?", time: "10:00 am" },
      { text: "Can we meet?", time: "10:00 pm" },
    ],
    image: { uri: "https://randomuser.me/api/portraits/med/men/97.jpg" },
    status: "this is johns status",
    username: "johndoe1",
    read: false,
  },
  {
    id: 2,
    name: "Tumpa",
    messages: [
      { text: "ami r hampi debona", time: "10:00 am" },
      { text: "final bas", time: "11:00 am" },
    ],
    image: { uri: "https://randomuser.me/api/portraits/med/women/31.jpg" },
    status: "this is tumpas status",
    username: "tumpa_sona",
    read: true,
  },
  {
    id: 3,
    name: "Ranu Mondal",
    messages: [
      { text: "ami gaan gai", time: "10:00 am" },
      { text: "tui sunechis", time: "11:00 am" },
      { text: "sob e maya", time: "12:00 am" },
      { text: "sob e maya", time: "12:00 am" },
      { text: "sob e maya", time: "12:00 am" },
    ],
    image: { uri: "https://randomuser.me/api/portraits/med/women/12.jpg" },
    status: "this is ranus status",
    username: "ranu_mondal",
    read: true,
  },
  {
    id: 4,
    name: "Ramen Babu",
    messages: [
      { text: "ami ramen das", time: "10:00 am" },
      { text: "khete chai mach", time: "11:00 am" },
    ],
    image: { uri: "https://randomuser.me/api/portraits/med/men/92.jpg" },
    status: "this is ramens status",
    username: "ramen11",
    read: false,
  },
];

function MessagesScreen({ navigation }) {
  const [messages, setMessages] = useState(initialMessages);
  const [showSearch, setShowSearch] = useState(false);
  const [searchField, setSearchField] = useState("");

  const handleLeftIcon = () => {
    setShowSearch(true);
  };

  const onSearchChange = (text) => {
    setSearchField(text);
  };

  const filteredMessages = messages.filter((message) => {
    return (
      message.name.toLowerCase().includes(searchField.toLowerCase()) ||
      message.messages.some(
        (p) => p.text.toLowerCase() === searchField.toLowerCase()
      )
    );
  });

  const deleteMessage = (message) => {
    console.log(message);
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
            message={item.messages[item.messages.length - 1].text}
            image={item.image}
            read={item.read}
            time={item.messages[item.messages.length - 1].time}
            renderRightActions={() => (
              <MessageDelete onPress={() => deleteMessage(item)} />
            )}
            onPress={() => navigation.navigate("Chats", item)}
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
