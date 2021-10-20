import React, {useEffect, useState} from 'react';
import {
  Dimensions,
  FlatList,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import axios from 'axios';
import Icon from 'react-native-vector-icons/FontAwesome';
import {CardSection, Spinner} from '../common';
import {useDispatch, useSelector} from 'react-redux';
import {saveAllGetData} from '../store/actions/actions';

const HomeScreen = props => {
  let posts = useSelector(state => state.postsReducer.posts);
  const [isLoading, setIsLoading] = useState(false);
  const dispatch = useDispatch();

  const headers = {
    Accept: 'application/json',
  };

  const getAllPosts = async () => {
    setIsLoading(true);
    const url = 'https://fakestoreapi.com/products';
    const response = await axios.get(url, headers);
    if (response !== undefined) {
      dispatch(saveAllGetData(response?.data));
    } else {
      console.log('error');
    }
    setIsLoading(false);
  };

  useEffect(() => {
    getAllPosts();
  }, []);

  return (
    <View style={styles?.container}>
      <TouchableOpacity style={styles.newPost}>
        <Icon name="plus" color="white" size={20} />
        <Text
          style={styles.newPostText}
          onPress={() => props.navigation.navigate('NewPost')}>
          New Post
        </Text>
      </TouchableOpacity>
      <Text style={styles?.heading}>Fetched Posts From Dummy API</Text>
      {isLoading ? (
        <Spinner size="large" />
      ) : (
        <FlatList
          data={posts}
          showsVerticalScrollIndicator={false}
          keyExtractor={({item}) => item?.title}
          renderItem={({item}) => {
            return (
              <View style={styles.itemView}>
                <Text style={styles.titleText}>{item?.title}</Text>
                <Text style={styles?.descText}>{item?.description}</Text>
              </View>
            );
          }}
        />
      )}
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginHorizontal: Dimensions.get('window').width * 0.02,
  },
  titleText: {
    color: '#044d81',
    fontSize: Dimensions.get('window').width * 0.04,
    fontWeight: '500',
  },
  descText: {
    color: 'black',
    fontSize: Dimensions.get('window').width * 0.0355,
    fontWeight: '500',
  },
  itemView: {
    backgroundColor: 'white',
    marginVertical: Dimensions.get('window').width * 0.02,
    paddingVertical: Dimensions.get('window').width * 0.02,
    paddingHorizontal: Dimensions.get('window').width * 0.02,
    width: Dimensions.get('window').width * 0.95,
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 10,
    flexDirection: 'column',
  },
  newPost: {
    backgroundColor: '#044d81',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: Dimensions.get('window').width * 0.05,
    width: Dimensions.get('window').width * 0.4,
    height: Dimensions.get('window').height * 0.06,
    borderRadius: Dimensions.get('window').width * 0.019,
  },
  newPostText: {
    color: 'white',
    marginLeft: 10,
    fontSize: Dimensions.get('window').width * 0.05,
    fontWeight: '600',
  },
  heading: {
    fontWeight: '700',
    fontSize: Dimensions.get('window').width * 0.05,
    fontFamily: 'PatuaOne-Regular',
    marginVertical: Dimensions.get('window').width * 0.02,
  },
});
