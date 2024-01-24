import React from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import GlobalStyle from './Styles/GlobalStyle';

const CardFooter = ({data, handleRefresh}) => {
  return (
    <View style={styles.bottomContent}>
      <View style={styles.iconContainer}>
        <Image
          source={data?.logo ? {uri: data?.logo} : null}
          style={styles.iconImage}
        />
        <View style={styles.footerTextContainer}>
          <Text style={[GlobalStyle.blackText, {fontSize: 16}]}>
            {data?.title}
          </Text>
          <Text style={[GlobalStyle.greyText, {fontSize: 14}]}>
            {data?.subTitle}
          </Text>
        </View>
      </View>
      <View>
        <TouchableOpacity
          style={styles.button}
          onPress={handleRefresh}
          disabled={handleRefresh !== null ? false : true}>
          <Text style={styles.buttonText}>Refresh</Text>
        </TouchableOpacity>
        <Text style={[GlobalStyle.greyText, {fontSize: 10}]}>
          In App Purchase
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  bottomContent: {
    padding: 15,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  iconContainer: {
    flexDirection: 'row',
  },
  iconImage: {
    width: 60,
    height: 60,
    resizeMode: 'cover',
    borderRadius: 10,
    marginRight: 16,
  },
  footerTextContainer: {
    justifyContent: 'center',
    width: 150,
  },
  button: {
    marginVertical: 5,
    backgroundColor: '#D4D4D4',
    padding: 8,
    borderRadius: 16,
    alignItems: 'center',
  },
  buttonText: {
    color: '#02198B',
    fontWeight: 'bold',
  },
});

export default CardFooter;
