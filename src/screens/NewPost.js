import React, {useEffect, useState} from 'react';
import {
  Dimensions,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import axios from 'axios';
import Icon from 'react-native-vector-icons/FontAwesome';
import {useDispatch} from 'react-redux';
import {Card, CardSection, TextArea, Input, Spinner, Button} from '../common';
import {saveNewPost} from '../store/actions/actions';

const NewPost = props => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const dispatch = useDispatch();

  const headers = {
    Accept: 'application/json',
  };

  const sendNewPost = async () => {
    setIsLoading(true);
    const url = 'https://fakestoreapi.com/products';

    let post = {
      title: title,
      description: description,
    };

    const response = await axios.post(url, post, headers);

    if (response !== undefined) {
      console.log('posted');

      dispatch(saveNewPost(post));
      props.navigation.goBack();
    } else {
      console.log('error');
    }
    setIsLoading(false);
  };

  return (
    <View style={styles?.container}>
      <Text style={styles?.heading}>New Post</Text>
      <Card>
        <CardSection>
          <Input
            placeholder="Post Title"
            label="Title"
            value={title}
            onChangeText={text => setTitle(text)}
          />
        </CardSection>

        <CardSection>
          <Input
            placeholder="Post Description"
            label="Description"
            value={description}
            onChangeText={text => setDescription(text)}
          />
        </CardSection>

        <CardSection>
          {isLoading ? (
            <Spinner size="large" />
          ) : (
            <TouchableOpacity
              onPress={() => sendNewPost()}
              style={styles.buttonStyle}>
              <Icon name="check" color="#044d81" size={25} />
              <Text style={styles.textStyle}>{'Submit Post'}</Text>
            </TouchableOpacity>
          )}
        </CardSection>
      </Card>
    </View>
  );
};

export default NewPost;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginHorizontal: Dimensions.get('window').width * 0.05,
  },
  heading: {
    fontWeight: '700',
    fontSize: Dimensions.get('window').width * 0.05,
    marginVertical: Dimensions.get('window').width * 0.02,
  },
  textStyle: {
    alignSelf: 'center',
    color: '#007aff',
    fontWeight: 'bold',
    fontSize: 16,
    paddingTop: 10,
    paddingBottom: 10,
    marginLeft: 10,
  },
  buttonStyle: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff',
    borderRadius: 5,
    width: Dimensions?.get('window').width * 0.8,
    flexDirection: 'row',
    borderWidth: 1,
    borderColor: '#007aff',
    marginLeft: 5,
    marginRight: 5,
  },
});
