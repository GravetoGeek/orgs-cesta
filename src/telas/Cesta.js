import React from 'react';
import { Image, StyleSheet, Dimensions, View } from 'react-native';
import topo from '../../assets/topo.png';
import logo from '../../assets/logo.png';
import CustomText from '../components/CustomText';

const width = Dimensions.get('screen').width;

export default function Cesta() {
  return <>
    <Image source={topo} style={style.topo} />
    <CustomText style={style.title}>Detalhe da cesta</CustomText>
    <View style={style.cesta}>
      <CustomText style={style.nome}>Cesta de verduras</CustomText>
      <View style={style.fazenda}>
        <Image source={logo} style={style.imagemFazenda} />
        <CustomText style={style.nomeFazenda}>Jenny Jack Farm</CustomText>
      </View>

      <CustomText style={style.descricao}>Uma cesta com produtos selecionados cuidadosamente da fazenda direto para sua cozinha</CustomText>
      <CustomText style={style.preco}>R$ 40,00</CustomText>
    </View>
  </>
}

const style = StyleSheet.create({
  topo: {
    width: '100%',
    height: 578 / 768 * width,
  },
  title: {
    width: '100%',
    position: 'absolute',
    textAlign: 'center',
    fontSize: 26,
    lineHeight: 26,
    color: 'white',
    fontWeight: 'bold',
    padding: 16,
  },
  cesta: {
    paddingVertical: 8,
    paddingHorizontal: 16,
  },
  nome: {
    fontSize: 26,
    lineHeight: 42,
    color: '#464646',
    fontWeight: 'bold',
  },
  fazenda: {
    flexDirection: 'row',
    paddingVertical: 12,
  },
  imagemFazenda: {
    width: 32,
    height: 32,
  },
  nomeFazenda: {
    fontSize: 16,
    lineHeight: 26,
    marginLeft: 12,

  },
  descricao: {
    color: '#a3a3a3',
    fontSize: 16,
    lineHeight: 26,
  },
  preco: {
    color: '#2a9f85',
    fontWeight: 'bold',
    fontSize: 26,
    lineHeight: 42,
    marginTop: 8,
  }
})