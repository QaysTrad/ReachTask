import React from 'react';
import {View, Text, TouchableOpacity, Image} from 'react-native';
import {useNavigation} from '@react-navigation/native';

import styles from './NewCard.style';

type NewCardTypes = {
  source: {
    id: string;
    name: string;
  };
  author: string;
  title: string;
  description: string;
  url: string;
  urlToImage: string;
  publishedAt: string;
  content: string;
};

const NewCard = (props: NewCardTypes) => {
  const {urlToImage, author, title} = props;
  const {navigate} = useNavigation();

  const navigateDetailsScreen = () => {
    navigate('DetailsScreen', props);
  };

  return (
    <TouchableOpacity onPress={navigateDetailsScreen} style={styles.container}>
      <View style={styles.image}>
        <Image
          resizeMode="cover"
          style={styles.image}
          source={{uri: urlToImage}}
        />
      </View>
      <View style={styles.featureTag}>
        <Text style={styles.featureTagText}>{author}</Text>
      </View>
      <View style={styles.textProductsContainer}>
        <Text style={styles.textProductsDescription}>{title}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default NewCard;
