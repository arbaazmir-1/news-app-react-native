import { StyleSheet, View } from 'react-native'
import React from 'react'
import { Column,Row,Image,Text,Badge,Pressable } from 'native-base'

const TopNewsCard = ({ width, data, onCardPress }) => {
  const date = new Date(data.publishedAt);
  const day = date.getDate();
  const month = date.getMonth() + 1;
  const year = date.getFullYear();
  const fullDate = `${day}/${month}/${year}`;

  

  return (
    <Pressable onPress={() => onCardPress(data.url)}>
      <Column
        key={data.url}
        margin={2}
        rounded={10}
        backgroundColor={"#fff"}
        width={width / 1.2}
      >
        <Image
          source={{
            uri: data.urlToImage,
          }}
          alt="Alternate Text"
          height={200}
          width={width / 1.2}
          rounded={10}
        />
        <Text
          fontSize="sm"
          fontWeight="bold"
          position="absolute"
          left={0}
          right={0}
          bottom={0}
          padding={4}
          color="#fff"
          backgroundColor="rgba(0, 0, 0, 0.5)"
        >
          {data.title}
        </Text>
        <Badge
          position="absolute"
          top={0}
          right={0}
          backgroundColor="amber.400"
          color="white"
          padding={2}
        >
          {fullDate}
        </Badge>
      </Column>
    </Pressable>
  );
};

export default TopNewsCard

const styles = StyleSheet.create({})