import React, {useContext} from 'react';
import {
  Text,
  View,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
  ImageBackground,
  Image,
  useWindowDimensions,
} from 'react-native';
import {useNavigation, useRoute} from '@react-navigation/native';
import HTML from 'react-native-render-html';
import CloseIcon from 'react-native-vector-icons/Fontisto';
import ShareIcon from 'react-native-vector-icons/Feather';
import CardFooter from '../Components/CardFooter';
import GlobalStyle from '../utils/GlobalStyle';

const Detail = () => {
  const windowWidth = useWindowDimensions().width;
  const navigation = useNavigation();
  const route = useRoute();
  const {data} = route.params || {};

  const goBackHome = () => {
    navigation.goBack();
  };

  const tagsStyles = {
    p: {color: 'grey', fontSize: 20},
  };

  return (
    <View style={styles.container}>
      <ScrollView>
        <ImageBackground
          style={styles.thumbNailImage}
          source={{uri: data?.thumbNailImage}}>
          <View style={styles.headerContainer}>
            <Text style={styles.updateText}>MAJOR UPDATE</Text>
            <Text style={styles.subtitleText}>{data?.subTitle}</Text>
          </View>
        </ImageBackground>
        <View style={styles.cardFooterContainer}>
          <CardFooter data={data} handleRefresh={null} />
        </View>
        <View style={styles.htmlContainer}>
          <HTML
            source={{html: data?.text}}
            contentWidth={windowWidth}
            tagsStyles={tagsStyles}
          />
          <Image source={{uri: data?.mainImage}} style={styles.mainImage} />
        </View>
        <View style={styles.detailFooter}>
          <Image source={{uri: data?.logo}} style={styles.iconImage} />
          <Text style={[GlobalStyle.blackText, {fontSize: 18}]}>
            {data?.title}
          </Text>
          <Text style={[GlobalStyle.greyText, {fontSize: 16}]}>
            {data?.subTitle}
          </Text>
          <TouchableOpacity style={styles.button} disabled>
            <Text style={styles.buttonText}>Refresh</Text>
          </TouchableOpacity>
          <Text style={[GlobalStyle.greyText, {fontSize: 10}]}>
            In App Purchase
          </Text>
        </View>
        <View style={[styles.detailFooter, {backgroundColor: 'transparent'}]}>
          <TouchableOpacity style={styles.shareButton} disabled>
            <ShareIcon name="share" size={20} color={'#0000FF'} />
            <Text style={styles.shareButtonText}>Share Story</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
      <TouchableOpacity style={styles.closeButton} onPress={goBackHome}>
        <CloseIcon name="close" size={24} style={styles.closeIcon} />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  thumbNailImage: {
    width: '100%',
    height: 500,
    resizeMode: 'cover',
  },
  closeButton: {
    position: 'absolute',
    top: 16,
    right: 16,
  },
  closeIcon: {
    backgroundColor: '#D4D4D4',
    color: '#000000',
    borderRadius: 20,
  },
  headerContainer: {
    padding: 16,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  updateText: {
    fontSize: 19,
    fontWeight: 'bold',
    color: '#D3D3D3',
    marginBottom: 10,
  },
  subtitleText: {
    width: 300,
    fontSize: 28,
    fontWeight: 'bold',
    color: '#ffffff',
  },
  cardFooterContainer: {
    borderBottomWidth: 1,
    borderColor: '#D4D4D4',
  },
  htmlContainer: {
    padding: 16,
  },
  mainImage: {
    width: '100%',
    height: 550,
    resizeMode: 'cover',
    borderRadius: 20,
  },
  detailFooter: {
    backgroundColor: '#D4D4D4',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 16,
    paddingVertical: 16,
  },
  iconImage: {
    width: 80,
    height: 80,
    resizeMode: 'cover',
    borderRadius: 13,
    marginBottom: 10,
  },
  button: {
    marginVertical: 5,
    backgroundColor: '#0000FF',
    padding: 8,
    width: 100,
    borderRadius: 16,
    alignItems: 'center',
  },
  buttonText: {
    color: '#ffffff',
    fontWeight: 'bold',
  },
  shareButton: {
    width: 150,
    backgroundColor: '#D4D4D4',
    borderRadius: 10,
    padding: 10,
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  shareButtonText: {
    color: '#0000FF',
    fontWeight: '500',
    marginLeft: 5,
  },
});

export default Detail;
