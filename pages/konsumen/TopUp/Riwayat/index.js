import { StyleSheet, Text, View,Dimensions,SafeAreaView,ScrollView,TouchableOpacity,Image,FlatList } from 'react-native'
// import React from 'react'
import React, { useState,useEffect } from 'react'
import { Button, TextInput } from 'react-native-paper'
import CheckBox from '@react-native-community/checkbox';
import { useNavigation } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';
import { baseUrl } from '../../../baseUrl';

export default function RiwayatTopUp() {

  const [dataPribadi, setDataPribadi] = useState({});
  const [ambilData, data] = useState([]);




  const navigation = useNavigation();
  const handleDetail = () => {
    navigation.navigate('DetailTopUp')
  }

  

  useEffect(() => {
    const fetchData = async () => {
      try {
        const token = await AsyncStorage.getItem('token');
        const response = await axios.get(`${baseUrl.url}/riwayatpembayaran`, {

          headers: {
            Authorization: `Bearer ${token}`
          },

        });
        data(response.data["data"]);
        console.log(response.data)
      } catch (error) {
        console.error(error);
      }
    };
    fetchData();
  }, [dataPribadi.token]);

  

  return (
    <>
      <SafeAreaView style={styles.container}>

        <View style={{ marginBottom: 40 }}>
          <View style={styles.header}>
            <Text style={styles.text}>Semua</Text>
            <Text style={styles.text}>Transaksi</Text>
            <Text style={styles.text}>Pending</Text>
            <Text style={styles.text}>Selesai</Text>
          </View>
          <ScrollView style={styles.scrollView}>
            <View>
              <View style={styles.search}>
                <Text style={{ color: 'black' }}>Cari semua riwyat TopUp</Text>
              </View>
            </View>
      
            <FlatList
              nestedScrollEnabled={true}
              scrollEnabled={false}
              data={ambilData}
              renderItem={({ item }) => (
                <View>
                  <View style={styles.boxmessage}>
                    <View style={styles.information}>
                      <View style={styles.foto}>
                        <View>
                          <Text style={styles.info}>
                            Status : {item.transaction_status}
                          </Text>
                          <Text style={styles.info}>
                            Midtrans.Sistem
                          </Text>
                          <Text style={styles.info}>
                           {item.created_at}
                          </Text>
                          <Text style={styles.info}>
                            Harap segara lakukan pembayaran jika 
                          </Text>
                          <Text style={styles.info}>
                            belum melakukan pembayaran expired : 
                          </Text>
                        </View>
                      </View>
                      <View>
                        <View style={styles.info}>
                          <Image
                            source={require('../../../img/message.png')}
                            resizeMode="cover"
                            style={styles.img}
                          />
                        </View>
                      </View>
                    </View>
                    <TouchableOpacity style={styles.info2} onPress={handleDetail}>
                      <Text style={styles.info}>
                        Lihat Detail
                      </Text>
                    </TouchableOpacity>
                  </View>
                </View>
              )}
              keyExtractor={(item, index) => index.toString()}
            />
          </ScrollView>
        </View>
      </SafeAreaView>
      <View style={{ backgroundColor: '#0B111F', padding: 20 }} />
    </>
  )
              }

const { width } = Dimensions.get('window');
const styles = StyleSheet.create({
  foto:{
    // backgroundColor:'white'
    flexDirection:'row',
    // width:70,
    // height:70
    alignItems: 'center',
  },
  img10:{
    // width:'1%'
    width:50,
    height:50,
    marginRight:4
  },
  information: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    // flex: 1,
    alignContent:'center'
  },
  info: {
    color: 'white',
    fontWeight:'bold',
    fontSize:15,
    // backgroundColor:'white'
    
  },
  info2: {
    color: 'white',
    fontWeight:'bold',
    fontSize:15,
    alignSelf:'flex-end'
    
  },
  // leftInfo: {
  //   alignSelf: 'flex-start',
  // },
  // rightInfo: {
  //   alignSelf: 'flex-end',
  // },
  boxmessage: {
    backgroundColor: '#0B111F',
    padding: 10,
    marginTop: 10,
    borderRadius: 1,
    alignSelf: 'center',
    width: '100%', // Ensure the container is wide enough
    borderRadius:4
  },
  container: {
    flex: 1,
    backgroundColor: '#EDA01F',
    // justifyContent: 'center', // Center the content vertically
    // alignItems: 'center', // Center the content horizontally
  },
 paketcepat:{
    textAlign:'center',color:'white' ,marginTop:20 , fontWeight:'bold' , fontSize:18,marginLeft:20
  },
  scrollView: {
    // backgroundColor: 'pink',
    marginHorizontal: 1,
  },
  img:{
    height:50, width: 50, alignSelf: 'center'
  },
  mobil: {
    width: 180,
    height: 180,

  },
  infopaket: {
    color: 'white',

    marginTop:-60
  },
  textdetailcontainer: {
    padding: 10,
    alignSelf: 'flex-end',
    marginTop: 40,
  },
  mobilcontainer: {
    // padding: 10,
    marginTop: -135,
    marginRight: 330,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center', 
  },

    
    search:{
        backgroundColor:'white',
        marginTop:20,
        padding:10,
        borderRadius:8
    },

    container:{
        flex:1,
        backgroundColor:'#EDA01F',
        padding:10

    },

    header:{
        flexDirection: 'row',
        alignItems: 'center',

        // width: width * 0.4, 
        // height: width * 0.4, 

        justifyContent:'space-between',
        // marginTop:'20',
        

        
    }   ,


    text:{
    //   borderRadius:1099999,
       backgroundColor:'white',
       padding:10,
       borderRadius:2,
       color:'black',
    //    paddingLeft:10,
    //    paddingRight:10
    width:120,
    textAlign:'center',
    borderColor:'black', // Added border color
    borderWidth:1,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    fontWeight:'bold'


    }

})