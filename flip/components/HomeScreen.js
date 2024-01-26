import React , { useState } from 'react';
import { View, Text, Pressable,StyleSheet,Image,ActivityIndicator } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
const HomeScreen = ({ navigation }) => {

  const handleCart=()=>
  { 
    console.log("entered cart");
    navigation.navigate('Cart');
  };
  return (
    <View style={styles.vi}>
      <View style={styles.vie}>
      <Image
        source={require('../assets/product.png')}  
        style={styles.compimg}
      />
       <Icon
        name="shopping-cart"
        size={30}
        color="black"
        onPress={handleCart}
        style={styles.carticon}
      />
      
      </View>
      <Text>Product Details</Text>
      
    </View>
  );
};
const styles = StyleSheet.create({
  input: {
    height: 40,
    width: 300,
    marginLeft: 50,
    marginRight:20,
    backgroundColor: "#fff",
  },
  compimg:{
    height:40,
    width:100,
    marginTop:15,
  },
  vi:{
    marginTop:250,
  },
  carticon:{
    marginLeft:350,
    color:"white",
    marginTop:-40,
  },
  but:{
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 20,
    width:80,
    paddingHorizontal: 12,
    borderRadius: 4,
    marginLeft:160,
    marginTop:11,
    fontSize:50,
    backgroundColor: 'black',
    color:"black",
  },
  vie:{
    backgroundColor:'blue',
    width:400,
    height:60,
   marginBottom:150,
   alignContent:"flex-start",
   marginTop:-213,
  },
  loading:{
    width:400,
    height:700,
  }
});

export default HomeScreen;
