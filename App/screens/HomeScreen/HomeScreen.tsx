import React, {useEffect, useState} from 'react';
import {FlatList, RefreshControl, TextInput} from 'react-native';
import {getAllNews} from '../../api/news.api';
import {NewCard} from '../../components';
import styles from './HomeScreen.style';

const HomeScreen = () => {
  const [newData, setNewsData] = useState([]);
  const [isRefresh, setIsRefresh] = useState(false);
  const [search, setSearch] = useState('');

  const newsDetailsApi = async () => {
    getAllNews(search)
      .then(({data}) => {
        setNewsData(data.articles);
      })
      .catch(error => {
        console.error('getAllNews', error.response);
      });
  };

  useEffect(() => {
    newsDetailsApi();
  }, [search]);

  const pullToRefresh = async () => {
    setIsRefresh(true);
    await newsDetailsApi();

    setIsRefresh(false);
  };

  return (
    <FlatList
      data={newData}
      renderItem={({item}) => <NewCard {...item} />}
      initialNumToRender={10}
      keyExtractor={(_, index) => `News-${index}`}
      contentContainerStyle={styles.container}
      ListHeaderComponent={() => (
        <TextInput
          onChangeText={value => setSearch(value)}
          value={search}
          style={styles.searchContainer}
          placeholder="Search ..."
          placeholderTextColor={'white'}
        />
      )}
      refreshControl={
        <RefreshControl refreshing={isRefresh} onRefresh={pullToRefresh} />
      }
    />
  );
};

export default HomeScreen;
