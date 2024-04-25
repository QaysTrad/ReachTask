import {View, Text, Image} from 'react-native';
import React from 'react';
import {useRoute} from '@react-navigation/native';
import moment from 'moment';
import styles from './DetailsScreen.style';

const DetailsScreen = () => {
  const {params} = useRoute();

  return (
    <View style={styles.container}>
      <Image
        source={{
          uri: params.urlToImage,
        }}
        style={{width: '100%', height: 250}}
      />
      <View style={styles.lowerImageContainer}>
        <Text>{params.title}</Text>
        <Text>{params.description}</Text>
        <View style={styles.headerContainer}>
          <Text>
            published at {moment(params.publishedAt).format('MM/DD/YYYY')}
          </Text>
          <Text>by {params.author}</Text>
        </View>
      </View>
    </View>
  );
};

export default DetailsScreen;
