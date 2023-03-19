import { StyleSheet, View } from 'react-native'
import React from 'react'
import { Row, Column, Image, Text,Pressable } from 'native-base';

const NewsListItem = ({width,openNews,news}) => {

    const date = new Date(news.publishedAt);


    
  return (
    <Pressable
    onPress={() => openNews(news.url)}

    >
    <Row

    
    key={news.url}
    width={width }
    marginTop={4}
    backgroundColor={"warmGray.100"}
    flex={1}
    padding={2}
  rounded={10}
  >
    <Image
      source={{
        uri:   news.urlToImage,
      }}
      size={100}
      alt="Alternate Text"
      
      rounded={10}
    />
    <Column flex={1} marginLeft={2}
      
      
    >
      <Text fontSize="sm" fontWeight="bold" flexShrink={1}>
        {news.title}
      </Text>

      <Text fontSize="xs" flexShrink={1} isTruncated>
          {date.toDateString()}
      </Text>
      <Text fontSize="xs" flexShrink={1} isTruncated>
        {news.source.name}
      </Text>
    </Column>
  </Row>
  </Pressable>
  )
}

export default NewsListItem

const styles = StyleSheet.create({})