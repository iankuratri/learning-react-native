import React, { useState } from "react";
import { FlatList } from "react-native";
import ListItem from "../components/ListItem";
import ListItemDeleteAction from "../components/ListItemDeleteAction";
import ListItemSeparator from "../components/ListItemSeparator";
import Screen from "./Screen";

const DATA = [
  {
    id: 1,
    title: "T1",
    description: "D1",
    image: require("../assets/mosh.jpg"),
  },
  {
    id: 2,
    title: "T2",
    description: "D2",
    image: require("../assets/mosh.jpg"),
  },
  {
    id: 3,
    title: "T3",
    description: "D3",
    image: require("../assets/mosh.jpg"),
  },
];

function MessagesScreen() {
  const [messages, setMessages] = useState(DATA);

  const handleDelete = (message: any) => {
    const newMessages = messages.filter((m: any) => m.id !== message.id);
    setMessages(newMessages);
  };

  return (
    <Screen>
      <FlatList
        data={messages}
        keyExtractor={(message) => message.id.toString()}
        renderItem={({ item }) => (
          <ListItem
            title={item.title}
            subTitle={item.description}
            image={item.image}
            onPress={() => {}}
            renderRightActions={() => (
              <ListItemDeleteAction onPress={() => handleDelete(item)} />
            )}
          />
        )}
        ItemSeparatorComponent={ListItemSeparator}
      />
    </Screen>
  );
}

export default MessagesScreen;
