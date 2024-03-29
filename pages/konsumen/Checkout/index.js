import React from 'react';
import { Dimensions, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default function Checkout() {
  const { width } = Dimensions.get('window');

  return (
    <View style={styles.container}>
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Alamat Pengiriman --- | </Text>
        <View style={styles.addressBody}>
          <Text style={styles.addressText}>Delia Putri Andari</Text>
          <Text style={styles.addressText}>(+62)0895335992932</Text>
          <Text style={styles.addressText}>
            Jalan Asoy Geboy Blok Pinggir Jalan RT/RW 01/02 Cibaduyut KAB.Tanggerang Banten
          </Text>
        </View>
      </View>

      <View style={styles.section}>
        <View style={styles.subSection}>
          <Text style={styles.sectionTitle}>Produk Yang Dipesan</Text>
          <Text style={styles.sectionTitle}> LOGO HERE</Text>
        </View>
        <View style={styles.buttonsContainer}>
          <View style={styles.buttonlist}></View>
          <View style={styles.button}>
            <Text style={styles.orderPackText}>PAKET</Text>
            <Text style={styles.orderPackText}>CEPAT</Text>
          </View>
          <View style={styles.buttontrash}></View>
        </View>
      </View>

      <View style={styles.section}>
        <Text style={styles.paymentMethod}>METODE PEMBAYARAN</Text>
        <View style={styles.paymentLogos}>
          <Image source={require('../../img/Logo-Dana.png')} style={styles.paymentLogo} />
          <Image source={require('../../img/Logo-BNI.png')} style={styles.paymentLogo} />
          <Image source={require('../../img/Logo-CIMB.png')} style={styles.paymentLogo} />
          <Image
            source={require('../../img/Logo-Sponsor-Liga-terbaik-Dunia-Akhirat.png')}
            style={styles.paymentLogo}
          />
        </View>
      </View>

      <View style={styles.checkoutSection}>
        <View style={styles.priceContainer}>
          <Text style={styles.priceText}>Jumlah :</Text>
          <Text style={styles.priceText}>Rp350.000</Text>
        </View>
        <View style={styles.checkoutButton}>
          <TouchableOpacity>
            <Text style={styles.checkoutButtonText}>Bayar Sekarang</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#EDA01F',
    padding: 10,
  },
  section: {
    backgroundColor: '#0B111F',
    borderRadius: 10,
    marginBottom: 10,
    padding: 10,
  },
  sectionTitle: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  addressBody: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  addressText: {
    color: '#fff',
    fontSize: 13,
    fontWeight: 'bold',
  },
  subSection: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  buttonsContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  button: {
    backgroundColor: 'white',
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
    marginHorizontal: 5,
    paddingVertical: 10,
  },
  buttonlist: {
    backgroundColor: 'white',
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
    // flex: 1,
    padding:10,
    marginHorizontal: 5,
    paddingVertical: 10,
  },
  buttontrash: {
    backgroundColor: 'white',
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
    // flex: 1,
    padding:30,
    // marginHorizontal: 5,
    // paddingVertical: 10,
    borderRadius:10,
  },
  orderPackText: {
    color: '#eda01f',
    fontSize: 20,
    fontWeight: 'bold',
    fontStyle: 'italic',
  },
  paymentMethod: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 18,
    marginBottom: 10,
  },
  paymentLogos: {
    flexDirection: 'row',
    alignItems: 'center',

  },
  paymentLogo: {
    width: Dimensions.get('window').width * 0.1,
    height: Dimensions.get('window').width * 0.1,
    borderRadius: 3,
    marginLeft: 5,


    backgroundColor:'#EDA01F'
  },
  checkoutSection: {
    backgroundColor: '#0B111F',
    borderRadius: 10,
    marginBottom: 10,
    padding: 10,
  },
  priceContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  priceText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  checkoutButton: {
    alignItems: 'flex-end',
  },
  checkoutButtonText: {
    backgroundColor: '#EDA01F',
    paddingVertical: 10,
    paddingHorizontal: 20,
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
    borderRadius: 10,
  },
});