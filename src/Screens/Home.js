import React, {useEffect, useState} from 'react';
import axios from 'axios';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {format} from 'date-fns';
import {useNavigation} from '@react-navigation/native';
import CardFooter from '../Components/CardFooter';
import GlobalStyle from '../Components/Styles/GlobalStyle';

const Home = () => {
  const navigation = useNavigation();
  const [data, setData] = useState(null);
  const [refresh, setRefresh] = useState(false);

  const currentDate = new Date();
  const formattedDate = format(currentDate, 'EEEE dd MMMM');

  const fetchData = async () => {
    try {
      const token =
        'eyJhbGciOiJIUzI1NiJ9.aW5mYW50dmlzaGFsMjhAZ21haWwuY29t.S2D6Ygbj-wLXeFHEkv--Ep6VddQ5JSeh1xMdc7UOvJY';

      const response = await axios.get(
        'https://tzab40im77.execute-api.ap-south-1.amazonaws.com/prod/getContent',
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        },
      );

      setData(response.data.content);
    } catch (error) {
      console.error('Error fetching data:', error.message);
      Alert.alert(
        'Error',
        'An error occurred while fetching data. Please try again later.',
      );
    }
  };

  useEffect(() => {
    fetchData();
  }, [refresh]);

  const handleRefresh = () => {
    setRefresh(!refresh);
  };

  const navigateToDisplayScreen = () => {
    navigation.navigate('Detail', {data});
  };

  return (
    <View style={styles.body}>
      <Text style={GlobalStyle.greyText}>{formattedDate}</Text>
      <View style={styles.headerBox}>
        <Text style={GlobalStyle.blackText}>Today</Text>
        <View style={styles.vsContainer}>
          <Text style={[GlobalStyle.blackText, {fontSize: 18}]}>VS</Text>
        </View>
      </View>
      <TouchableOpacity onPress={navigateToDisplayScreen}>
        <View style={styles.card}>
          <Image
            source={data?.thumbNailImage ? {uri: data?.thumbNailImage} : null}
            style={styles.cardImage}
          />
          <CardFooter data={data} handleRefresh={handleRefresh} />
        </View>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  body: {
    padding: 16,
  },
  headerBox: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  vsContainer: {
    backgroundColor: '#D4D4D4',
    borderRadius: 50,
    padding: 8,
  },
  card: {
    borderRadius: 30,
    backgroundColor: '#ffffff',
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.7,
    shadowRadius: 5,
    elevation: 5,
    overflow: 'hidden',
  },
  cardImage: {
    width: '100%',
    height: 400,
    resizeMode: 'cover',
  },
});

export default Home;
