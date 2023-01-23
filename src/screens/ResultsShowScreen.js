import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, FlatList, Image } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";

import yelp from "../api/yelp";

const ResultsShowScreen = ({ navigation }) => {
  const [result, setResult] = useState(null);
  const id = navigation.getParam("id");

  const getResult = async (id) => {
    const response = await yelp.get(`/${id}`);
    setResult(response.data);
  };
  useEffect(() => {
    getResult(id);
  }, []);

  if (!result) {
    return null;
  }

  const totalStars = 5;
  let gainedStars = parseInt(result.rating);
  return (
    <View>
      <FlatList
        horizontal
        data={result.photos}
        keyExtractor={(photo) => photo}
        renderItem={({ item }) => {
          return <Image style={styles.image} source={{ uri: item }} />;
        }}
      />
      <Text style={styles.name}>{result.name}</Text>
      <Text style={styles.phone}>Phone Number</Text>
      <Text style={styles.number}>{result.display_phone}</Text>
      <Text style={styles.rating}>
        {result.rating} Stars, {result.review_count} Reviews
      </Text>
      <Text style={styles.address}>{result.location.address1}</Text>
      <Text style={styles.address}>
        {result.location.city}, {result.location.state}{" "}
        {result.location.zip_code}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  image: {
    height: 260,
    width: 400,
    borderRadius: 4,
    marginHorizontal: 8,
    marginTop: 10,
  },
  name: {
    fontWeight: "bold",
    fontSize: 26,
    marginLeft: 10,
    marginTop: 10,
  },
  rating: {
    marginLeft: 10,
    fontSize: 12,
    marginBottom: 10,
  },
  address: {
    marginLeft: 10,
    fontSize: 14,
  },
  phone: {
    position: "absolute",
    top: 340,
    fontSize: 14,
    fontWeight: "bold",
    left: 300,
  },
  number: {
    position: "absolute",
    top: 355,
    fontSize: 14,
    fontStyle: "italic",
    left: 300,
  },
});

export default ResultsShowScreen;
