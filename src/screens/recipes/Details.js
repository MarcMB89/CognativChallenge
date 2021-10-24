import React from "react";
import {
  Text,
  View,
  Image,
  ScrollView,
  SafeAreaView,
  StatusBar,
} from "react-native";

import styles from "./detailsStyle";

import data from "../../mocks/detailMock";

function RecipeDetails ({ navigation }) {

    let imageUrl = "http://via.placeholder.com/640x360";
    if (data && data.photo) {
      imageUrl = data.photo;
    }

    return (
      <SafeAreaView style={styles.mainScreen}>
        <StatusBar barStyle="dark-content" />
        <View style={styles.container}>
          <ScrollView showsVerticalScrollIndicator={false}>
            <View style={styles.imageContainer}>
              <Image source={{ uri: imageUrl }} style={styles.recipeImage} />
              <View style={styles.darkener} />
            </View>
            <View style={styles.infoContainer}>
              <Text style={styles.category}>{data.categoryName}</Text>
              <Text style={styles.title}>{data.name}</Text>
              <View style={styles.properties}>
                <View style={styles.cell}>
                  <Text style={styles.cellText}>{data.duration} minutes</Text>
                </View>
                <View style={styles.cell}>
                  <Text style={styles.cellText}>{data.complexity}</Text>
                </View>
                <View style={styles.cell}>
                  <Text style={styles.cellText}>{data.people} people</Text>
                </View>
              </View>
            </View>
            <View style={styles.infoBox}>
              <Text style={styles.header}>Ingredients</Text>
              <Text style={styles.description}>{data.ingredients}</Text>
            </View>
            <View style={styles.infoBox}>
              <Text style={styles.header}>Info</Text>
              <Text style={styles.description}>{data.description}</Text>
            </View>
          </ScrollView>
        </View>
      </SafeAreaView>
    );
  }

export default RecipeDetails;