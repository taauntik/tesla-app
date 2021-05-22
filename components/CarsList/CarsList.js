import React from "react";
import { View, FlatList, Dimensions } from "react-native";
import { CarItem } from "../CarItem/CarItem";
import { styles } from "./CarsListStyle.js";
import { cars } from "./cars.js";

export function CarsList() {
  return (
    <View style={styles.container}>
      <FlatList
        data={cars}
        renderItem={({ item }) => <CarItem car={item} />}
        showsVerticalScrollIndicator={false}
        snapToAlignment={"start"}
        decelerationRate={"fast"}
        snapToInterval={Dimensions.get("window").height}
      />
    </View>
  );
}
