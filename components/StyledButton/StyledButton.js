import React from "react";
import { View, Text, Pressable } from "react-native";
import { styles } from "./StyledButtonStyle";

export function StyledButton({ type, content, onPress }) {
  const backgroundColor = type === "primary" ? "#171A20CC" : "#FFFFFF";
  const textColor = type === "primary" ? "#FFFFFF" : "#171A20CC";

  return (
    <View style={styles.container}>
      <Pressable
        style={[styles.button, { backgroundColor: backgroundColor }]}
        onPress={onPress}
      >
        <Text style={[styles.text, { color: textColor }]}>{content}</Text>
      </Pressable>
    </View>
  );
}
