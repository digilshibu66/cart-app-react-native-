import React , { useState,useEffect }from 'react';
import { View, Text,ScrollView ,FlatList,StyleSheet,TouchableOpacity,Image, Pressable} from 'react-native';
import axios from 'axios';

const CartScreen = () => {
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    fetchCartItems();
  }, []);
  
  const fetchCartItems = async () => {
    try {
      const response = await axios.get('http://192.168.1.36:3000/products');
      setCartItems(response.data);
      //console.log(response.data);
    } catch (error) {
      console.error(error);
    }
  };
  const totalPrice = cartItems.reduce((acc, item) => acc + item.price, 0);

    const onPress = ()=>{
        console.log("pressed");
    };

    const handleDeleteCartItem = async (id) => {
      //console.log(id);
      try {
        //await axios.delete(`http://192.168.1.36:3000/products/${id}`);
        fetchCartItems();
      } catch (error) {
        console.error(error);
      }
    };
    const renderItem = ({ item }) => (
      <View style={styles.productview}>
      <View style={styles.line1}>
        <View>
        <Image source={{ uri: 'data:image/png;base64,'+item.image }} style={styles.image} />
        <Text style={styles.textname}>{item.name}</Text>
        <Text style={styles.oldprice}>₹{item.oldprice}</Text>
        <Text style={styles.price}>₹{item.price}</Text>
        </View>
        <View style={styles.deleteview}>
          <Pressable style={styles.delete} onPress={handleDeleteCartItem(item.id)}>
            <Text style={styles.carttext}>Delete</Text>
          </Pressable>
        </View>
        <View>
          <TouchableOpacity style={styles.buynow} onPress={onPress}>
            <Text style={styles.carttext}>Buy Now</Text>
          </TouchableOpacity>
        </View>
      </View>
      </View>
    );
  return (
  <View>
    <View style={styles.mycartview}>
    <Text style={styles.mycart}>My Cart</Text>
    <View style={styles.line}>
    <TouchableOpacity style={styles.buttonf} onPress={onPress}>
        <Text style={styles.fiptext}>Cart Items({cartItems.length})</Text>
      </TouchableOpacity>
    </View>
    </View>
  
   
    <View style={styles.addressview}>
      <Text style={styles.deliver}>Deliver to:</Text>
      <Text style={styles.address}>Digil,777777</Text>
      <Text style={styles.landmark}>Newyork,USA</Text>
    </View>

    <FlatList
        data={cartItems}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        style={styles.container}
      />
      
    <ScrollView style={styles.scrollv}>
    </ScrollView>
    
    <View style={styles.placeorder}>
    <Text style={styles.placetext}>
    ₹{totalPrice}/-
    </Text>
        <TouchableOpacity style={styles.checkoutButton} onPress={() => alert('Proceed to checkout')}>
        <Text style={styles.checkoutButtonText}>Place Order</Text>
      </TouchableOpacity>
    </View>
    </View>
  );
};

const styles = StyleSheet.create({
  textname:{
    fontSize:20,
    fontWeight:"bold",
    marginTop:-190,
    marginLeft:140,
    position:"absolute",
  },
  address:{
    fontWeight:"bold",
    marginLeft:100,
    marginTop:-20,
    fontSize:15,

  },
  landmark:{
    color:"lightgrey",
    fontSize:15,
    fontWeight:"normal",
    marginLeft:20,
  },
  container: {
    flexGrow: 1,
    marginTop: 1,
    marginBottom:800,
  },
    mycartview:{
        backgroundColor:"white",
    },
    image:{
      height:100,
      width:100,
      marginTop:-190,
      marginLeft:20,
      position:"absolute",
      backgroundColor:"black",
    },
    carttext:{
        color:"grey",
        fontSize:15,
        fontWeight:"500",
    },
    mycart:{
        marginTop:50,
        fontWeight:"500",
        fontSize:20,
        marginLeft:20,
        width:90,
        height:30,
    },
    price:{
      position:"absolute",
      marginTop:-100,
      marginLeft:140,
      fontSize:25,
      fontWeight:"bold",

    },
    placetext:{
         position:"absolute",
         fontSize:30,
         marginTop:10,
         marginLeft:30,
         fontWeight:"bold"
    },
    checkoutButtonText: {
        color: 'white',
        fontWeight: 'bold',
        fontSize: 16,
      },
    checkoutButton: {
        backgroundColor: 'black',
        padding: 10,
        borderRadius: 8,
        marginTop: 10,
        marginLeft:220,
        width:150,
        position:"sticky",
        alignItems: 'center',
      },
    productview:{
        width:400,
        backgroundColor:"white",
        marginTop:10,
        height:265,
    },
    addressview:{
        backgroundColor:"white",
        width:400,
        marginTop:5,
        height:70,
    },
    line:{
        marginLeft:220,
        marginTop:20,
        marginBottom:20,
        
    },
    line1:{
        borderColor:'lightgrey',
        borderTopWidth:1,
        marginLeft:0,
        marginTop:215,
        marginBottom:20,
        height:1000,
    },
    oldprice:{
      position:"absolute",
      marginTop:-150,
      marginLeft:150,
      fontSize:15,
      color:"lightgrey",
      textDecorationLine:"line-through",
    },
    scrollv:{ 
        marginTop:0,
         flex: 0,
        marginRight:30,
        width:400,
        height:1000,
     },
     deliver:{
        marginLeft:20,
        marginTop:10,
        fontSize:15,
        fontWeight:"400",
     },
     buttonf:{
        width:70,
        flexDirection:"row",
     },
     buttong:{
        width:70,
        flexDirection:"row",
        marginLeft:170,
        marginTop:-25,
     },
     fiptext:{
        fontSize:20,
        fontWeight:"500",
        marginLeft:-90,
     },
     placeorder:{
        backgroundColor:"white",
        marginTop:780,
        marginRight:0,
        width:400,
        height:95,
        position:"absolute"
     },
     delete:{
        marginLeft:70,
        marginTop:10,
     },
     buynow:{
        marginLeft:250,
        marginTop:-20,
     },
     deleteview:{
        borderColor:'lightgrey',
        borderRightWidth:1,
        marginRight:210,
     },

});
export default CartScreen;
