import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loadRecipes, loadRecommended } from "../../redux/actions/actionCreator";
import {
    Text,
    View, 
    FlatList,
    TouchableOpacity, 
    SafeAreaView, 
    Image, 
    ScrollView, 
    StatusBar } from "react-native";

import styles from "./homeStyles";
import recommendations from "../../mocks/recommendationsMock";
import fakeRecipes from "../../mocks/fakeRecipesMock";

function ExploreScreen ({ navigation }) {

  const recommended = useSelector((store) => store.recommended);
  const recipes = useSelector((store) => store.recipes);
  const dispatch = useDispatch();

  useEffect(() => {
    if (recommended.length < 1) {
      dispatch(loadRecommended());
    }
  }, [recommended, dispatch]);

  useEffect(() => {
    if (recipes.length < 1) {
      dispatch(loadRecipes());
    }
  }, [recipes, dispatch]);

  const onPressHandlerDetails = () => {
    navigation.navigate("RecipeDetails");
  };
  
  const renderImage = (item) => {
    let imageUrl = "http://via.placeholder.com/640x360";
    if (item && item.photo) {
      imageUrl = item.photo;
    }
    return <Image source={{ uri: imageUrl }} style={styles.recipeImage} />;
  };
  const renderImageBox = (item) => {
    let imageUrl = "http://via.placeholder.com/640x360";
    if (item && item.photo) {
      imageUrl = item.photo;
    }
    return <Image source={{ uri: imageUrl }} style={styles.scrollerRecipe} />;
  };

  const renderRow = ({ item }) => {
    return (
    <TouchableOpacity onPress={onPressHandlerDetails}>
        <View style={styles.rowContainer}>
          <View style={styles.imageContainer}>{renderImage(item)}</View>
          <View style={styles.infoContainer}>
            <Text style={styles.categoryRow}>{item.categoryName}</Text>
            <Text style={styles.titleRow}>{item.name}</Text>
            <View style={styles.properties}>
              <View style={styles.cellRow}>
                <Text style={styles.cellText}>{item.duration} minutes</Text>
              </View>
              <View style={styles.cellRow}>
                <Text style={styles.cellText}>{item.complexity}</Text>
              </View>
              <View style={styles.cellRow}>
                <Text style={styles.cellText}>{item.people} people</Text>
              </View>
            </View>
          </View>
        </View>
    </TouchableOpacity>
    )
  };

  const keyExtractor = (item) => item._id;

  const renderList = () => {
    return (
      <FlatList
        ListHeaderComponent={renderRecommended}
        showsVerticalScrollIndicator={false}
        keyExtractor={keyExtractor}
        data={fakeRecipes}
        renderItem={renderRow}
      />
    );
  };

  const renderRecommended = () => {
    return (
        <View style={styles.recommendedContainer}>
            <Text style={styles.header}>Recommended</Text>
            <ScrollView
                horizontal={true}
                showsVerticalScrollIndicator={false}
                showsHorizontalScrollIndicator={false}
                contentContainerStyle={styles.scroller}
            >
                {recommendations.map(item => {
                return (
                    <TouchableOpacity onPress={onPressHandlerDetails}>
                        <View style={styles.recipeImageBox}>{renderImageBox(item)}</View>
                    </TouchableOpacity>
                )
                })}
        </ScrollView>
      </View>
    )
  };
    return (
    <SafeAreaView style={styles.mainScreen}>
      <StatusBar barStyle="dark-content" />
        <View style={styles.navBar}>
          <View style={styles.titleWrapper}>
            <Text style={styles.title}>Recipes</Text>
          </View>
        </View>
        <View style={styles.container}>{renderList()}</View>
    </SafeAreaView>

    );
  }
export default ExploreScreen;