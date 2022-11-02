import React from 'react';
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create(
  {
    colorPrimary: {
      backgroundColor: '#9370DB',
    },
    colorSecond: {
      backgroundColor: '#4B0082',
    },
    container: {
      flex: 1,
    },
    item: {
      backgroundColor: '#4B0082',
      padding: 50,
      marginVertical: 20,
      marginHorizontal: 16,
      borderTopEndRadius: 75,
      borderBottomEndRadius: 15,
      borderBottomStartRadius: 75,
    },
    title: {
      fontSize: 20,
      textAlign: 'center',
      color: '#ffff',
    },
    texto: {
      fontSize: 12,
      textAlign: 'center',
      color: '#ffff',
    },
    subtitle: {
      fontSize: 16,
      textAlign: 'center',
      color: '#ffff',
    },
    price: {
      fontSize: 20,
      color: 'red',
      textAlign: 'center',
    },
    tinyLogo: {
      flex: 1,
      aspectRatio: 1.5,
      width: '100%',
      height: '100%',
      resizeMode: 'cover',
      borderRadius: 20,
    },
    centeredView: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
      marginTop: 22,
      color: 'white'
    },
    modalView: {
      margin: '10%',
      backgroundColor: '#4B0082',
      borderRadius: 20,
      padding: 10,
      width: '95%',
      height: '95%',
      shadowColor: "#000",
      shadowOffset: {
        width: 0,
        height: 2
      },
      shadowOpacity: 0.25,
      shadowRadius: 4,
      elevation: 5
    },
    modalText: {
      marginBottom: 15,
      textAlign: "center",
      color: 'white'
    },
    btnClose: {
      flex: 1,
      flexDirection: 'row',
      alignSelf: 'flex-end',
    },
    input: {
      height: 40,
      margin: 12,
      borderWidth: 1,
      padding: 10,
      color: 'white',
    },
    label: {
      fontSize: 16,
      color: 'white',
      marginLeft: 12,
    },
  })
  ;

export default styles