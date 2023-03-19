import { StyleSheet, View } from 'react-native';
import React from 'react';
import { Column, Row, Skeleton, Text } from 'native-base';

const LoadingTopCard = ({ width }) => {
  return (
    <View style={styles.container}>
      <Skeleton height={200} width={width / 1.2} borderRadius={10} />

      
    </View>
  );
};

export default LoadingTopCard;

const styles = StyleSheet.create({
  container: {
    margin: 2,
    backgroundColor: '#fff',
    borderRadius: 10,
    overflow: 'hidden',
  },
});
