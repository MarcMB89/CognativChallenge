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

const data = {
  "_id": "5294dgdgd4",
  "name": "Escovitch Fish",
  "categoryId": "1",
  "categoryName": "Fish",
  "duration": 11,
  "complexity": "Hard",
  "people": 3,
  "recommended": 1,
  "ingredients": "2 eggs\r\n4 tomatoes\r\nsalt\r\npepper",
  "description":
      "Rinse fish; rub with lemon or lime, seasoned with salt and pepper or use your favorite seasoning. I used creole seasoning. Set aside or place in the oven to keep it warm until sauce is ready.\r\n\r\nIn large skillet heat oil over medium heat, until hot, add the fish, cook each side- for about 5-7 minutes until cooked through and crispy on both sides. Remove fish and set aside. Drain oil and leave about 2-3 tablespoons of oil\r\nAdd, bay leave, garlic and ginger, stir-fry for about a minute making sure the garlic does not burn\r\nThen add onion, bell peppers, thyme, scotch bonnet, sugar, all spice-continue stirring for about 2-3 minutes. Add vinegar, mix an adjust salt and pepper according to preference. Let it simmer for about 2 more minutes. \r\n\r\nDiscard bay leave, thyme spring and serve over fish with a side of this bammy. You may make the sauce about 2 days in advance.",
  "photo": "https://www.themealdb.com/images/media/meals/1520084413.jpg",
};

function RecipeDetails ({ navigation }) {

  const onPressHandlerExploreScreen = () => {
    navigation.navigate("ExploreScreen");
  };

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