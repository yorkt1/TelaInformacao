import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, ScrollView, Dimensions } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome'; //importar icones da rede
import FontAwesome from "@expo/vector-icons/FontAwesome"; //importar icones da rede
import Feather from "@expo/vector-icons/Feather"; //importar icones da rede
import { Ionicons } from '@expo/vector-icons';
import { useState } from 'react';

export default function App() {

  return (
    <View style={styles.container}>
      <Header />
      <ScrollView style={styles.ScrollTamanho}>
        <Body />
      </ScrollView>
      <Footer />
      <StatusBar style="auto" />
    </View>
  );
}

const window = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#24c28d',
  },

  //Cima
  Header: {
    height: '10%',
    backgroundColor: '#24c28d',
  },

  //Meio
  Body: {
    height: window.height * 0.80, // 60% da altura da janela
    borderRadius: 20,
    marginLeft: '2%',
    marginRight: '2%',
    backgroundColor: '#eaead4'
  },
  //estilização do BaixoBody
  FooterBody: {
    height: window.height * 0.1, // 60% da altura da janela
    alignItems: 'center',
    justifyContent: 'space-around',
    flexDirection: 'row',
    backgroundColor: '#eaead4',
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
  },

  //Baixo
  Footer: {
    height: '13%',
    backgroundColor: '#24c28d',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },

  //estilização do FooterEsquerda
  footerEsquerda: {
    height: '100%',
    backgroundColor: '#24c28d',
    width: '20%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },

  //estilização do FooterMeio
  footerMeio: {
    height: '100%',
    backgroundColor: '#24c28ded',
    width: '20%',
    display: 'flex',
    justifyContent: 'flex-start',
    alignItems: 'center',
    display: 'relative',
    marginTop: -40,
    borderTopRightRadius: 450,
    borderTopLeftRadius: 450,

  },

  //estilização do FooterDireita
  footerDireita: {
    height: '100%',
    backgroundColor: '#24c28d',
    width: '20%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },

  ScrollTamanho: {
    backgroundColor: '#24c28d',
  },

  header_info_plantas: {
    height:'35%',
    width:'100%',
    flexDirection: 'row',
    backgroundColor: '#eaead4'
  },

  header_esquerda: {
    height:'100%',
    width:'50%',
    backgroundColor: '#eaead4',
    alignItems: 'center',
    justifyContent: 'center',
  },

  header_direita: {
    height:'100%',
    width:'50%',
    backgroundColor: '#eaead4',
    alignItems: 'center',
    justifyContent: 'center',
  },

  header_imagem_um: {

    height: '180px',
    width:'180px',
    backgroundColor: 'yellow',
    marginBottom: '60px',
    borderRadius:25,
    borderColor: '#24c28d',
    borderWidth: '5px',

  },

  header_imagem_dois: {

    height: '180px',
    width:'180px',
    backgroundColor: 'yellow',
    marginTop: '60px',
    borderRadius:25,
    borderColor: '#24c28d',
    borderWidth: '5px',

  },
nome_plantas: {

    marginTop: '200px',
    fontSize: '25px',

  },

});

function Header() {

  return (

    <View style={styles.Header}></View>

  );

}

function Body() {


  return (

    <View style={styles.Body}>

      <View style={styles.header_info_plantas}>

        <View style={styles.header_esquerda}>

          <View style={styles.header_imagem_um}>

            <Text style={styles.nome_plantas}>NOME_PLAMTA</Text>

          </View>

        </View>

        <View style={styles.header_direita}>

        <View style={styles.header_imagem_dois}>

        </View>
          
        </View>

      </View>

      <View>

        
      </View>

    </View>

  );

}


function Footer() {

  return (

    <View style={styles.Footer}>

      <TouchableOpacity style={styles.footerEsquerda}>
        <FontAwesome
          name='home'
          size={60}
          color='#8b8a7a'
        />
      </TouchableOpacity>

      <TouchableOpacity style={styles.footerMeio}>
        <FontAwesome
          name='user'
          size={65}
          color='#8b8a7a'
        />
      </TouchableOpacity>

      <TouchableOpacity style={styles.footerDireita}>
        <FontAwesome
          name='star'
          size={60}
          color='#8b8a7a'
        />
      </TouchableOpacity>

    </View>

  );

}
