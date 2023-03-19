import { StyleSheet, View, Dimensions } from "react-native";
import React from "react";
import empty from "../assets/lottie/empty.json";
import LottieView from "lottie-react-native";
import { useRef } from "react";
import { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import NewsListItem from "../Components/NewsListItem";
import { ScrollView, Text } from "native-base";

const SavedNews = ({navigation}) => {
  const [isEmpty, setIsEmpty] = useState(true);
  const animation = useRef(null);

  const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  const { width, height } = Dimensions.get("window");

  const goToNews = () => {
    navigation.navigate("News");
    };
  return (
    <SafeAreaView
      style={{
        flex: 1,
        justifyContent: "start",
        padding: 5,
      }}
    >
      {isEmpty && (
        <View
          style={{
            justifyContent: "center",
            alignItems: "center",
            flex: 1,
          }}
        >
          <LottieView
            ref={animation}
            source={empty}
            autoPlay
            loop
            style={{ width: 300, height: 300 }}
          />
        </View>
      )}
        {!isEmpty && (
      <ScrollView>
        <Text fontSize="xl" fontWeight="bold" marginTop={5} marginLeft={5}>
          Saved News
        </Text>
        {array.map((item) => {
          return <NewsListItem key={item} width={width} openNews={goToNews}/>;
        })}
      </ScrollView>
        )}
    </SafeAreaView>
  );
};

export default SavedNews;

const styles = StyleSheet.create({});
