import { StyleSheet, View,ScrollView } from 'react-native'
import React from 'react'
import { Row,Badge } from 'native-base';


const Categories = () => {
    const newsCategories = [
        {
          id: 1,
          name: "Business",
        },
        {
          id: 2,
          name: "Entertainment",
        },
        {
          id: 3,
          name: "Health",
        },
        {
          id: 4,
          name: "Science",
        },
        {
          id: 5,
          name: "Sports",
        },
        {
          id: 6,
          name: "Technology",
        },
      ];
  return (
    <View>
          <ScrollView
            horizontal={true}
            showsHorizontalScrollIndicator={false}
            marginTop={5}
            marginLeft={5}
          >
            <Row height={50} marginLeft={2}>
              {newsCategories.map((item) => {
                return (
                  <Badge
                    key={item.id}
                    backgroundColor="amber.400"
                    color="white"
                    padding={2}
                    marginRight={2}
                  >
                    {item.name}
                  </Badge>
                );
              })}
            </Row>
          </ScrollView>
        </View>
  )
}

export default Categories

const styles = StyleSheet.create({})