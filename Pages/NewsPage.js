import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { WebView } from 'react-native-webview';

const NewsPage = ({navigation,route}) => {
    const {url} = route.params;
    console.log(url)
  return (
    <WebView
            source={{ uri: url }}
            style={{ flex: 1 }}
        />
  )
}

export default NewsPage

const styles = StyleSheet.create({})