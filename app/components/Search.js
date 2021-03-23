import React from "react";
import { View, TextInput } from "react-native";

function Search({ onSearchChange }) {
  return (
    <View
      style={{
        backgroundColor: "#fff",
        padding: 10,
        marginVertical: 10,
        borderRadius: 20,
      }}
    >
      <TextInput
        autoCapitalize="none"
        autoCorrect={false}
        clearButtonMode="always"
        onChangeText={onSearchChange}
        placeholder="Search"
        style={{ backgroundColor: "#fff", paddingHorizontal: 20, fontSize: 17 }}
      />
    </View>
  );
}

export default Search;
