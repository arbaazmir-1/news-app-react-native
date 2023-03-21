import {
  StyleSheet,
  View,
  SafeAreaView,
  ScrollView,
  Dimensions,
} from "react-native";
import React from "react";
import {
  Flex,
  Row,
  Column,
  Button,
  Text,
  Image,
  Box,
  Spacer,
  Badge,
  Skeleton,
} from "native-base";
import TopNewsCard from "../Components/TopNewsCard";
import Categories from "../Components/Categories";
import NewsListItem from "../Components/NewsListItem";
import { useSelector, useDispatch } from "react-redux";
import { useState, useEffect } from "react";
import { fetchNews, generalNews } from "../redux/action";
import LoadingTopCard from "../Components/LoadingTopCard";
import { StatusBar } from "expo-status-bar";

const DashPage = ({ navigation }) => {
  const array = [1, 2, 3, 4, 5];
  const { width, height } = Dimensions.get("window");
  const dispatch = useDispatch();

  const data = useSelector((state) => state.news);
  //if loading exsit in data then show loading
  const loading = data?.loading;

  const normalData = useSelector((state) => state.generalNews);
  const normalLoading = normalData?.loading;

  const goToNews = (url) => {
    navigation.navigate("News", { url: url });
  };

  useEffect(() => {
    dispatch(fetchNews());
    dispatch(generalNews());
  }, []);

  return (
    <SafeAreaView>
      
      <ScrollView padding={5}>
        <View>
          <Text fontSize="xl" fontWeight="bold" marginTop={5} marginLeft={5}>
            Top News
          </Text>
          <ScrollView
            horizontal={true}
            showsHorizontalScrollIndicator={false}
            marginTop={5}
            marginLeft={5}
          >
            <Row>
              {loading && (
                <ScrollView horizontal={true}>
                  <LoadingTopCard width={width} />
                  <LoadingTopCard width={width} />
                </ScrollView>
              )}

              {!loading &&
                data?.news?.map((news) => {
                  return (
                    <TopNewsCard
                      data={news}
                      width={width}
                      onCardPress={goToNews}
                      key={news.url}
                    />
                  );
                })}
            </Row>
          </ScrollView>
        </View>
        <Categories />

        <View>
          <ScrollView>
            {normalLoading &&
              array.map((item) => {
                return (
                  <Row
                    key={item + 4}
                    width={width}
                    marginTop={4}
                    backgroundColor={"warmGray.100"}
                    flex={1}
                    padding={2}
                    rounded={10}
                  >
                    <Skeleton height={100} />
                  </Row>
                );
              })}

            {normalData?.generalNews?.map((news) => {
              return (
                <NewsListItem openNews={goToNews} news={news} key={news.url} />
              );
            })}
          </ScrollView>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default DashPage;

const styles = StyleSheet.create({});
