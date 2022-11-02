import React from "react";
import { View, FlatList, Text, Button, Image, SafeAreaView } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import styles from './styles';

const DATA = [
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    title: 'Promoção de Natal',
    subtitle: 'Desconto de 25% - NATAL25',
    texto: 'Um desconto de 25% para você e sua familia viagarem com o melhor preço no natal, aplique o Cupom NATAL25 na pagina de pagamentos.',
    img: require('../img/natal.jpg'),
  },
  {
    id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
    title: 'Promoção de Ano Novo',
    subtitle: 'Desconto de 30% - NOVO30',
    texto: 'Um desconto de 30% para você e sua familia viagarem com o melhor preço no novo ano que está por vim, aplique o Cupom NOVO30 na pagina de pagamentos.',
    img: require('../img/novo.jpg'),
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d72',
    title: 'Promoção de Ferias',
    subtitle: 'Desconto de 15% - FERIAS15',
    texto: 'Um desconto de 15% para você e sua familia viagarem com o melhor preço nas ferias, aplique o Cupom FERIAS15 na pagina de pagamentos.',
    img: require('../img/ferias.jpg'),
  },
  {
    id: '58694a0f-3da1-471f-bd96-321321321232',
    title: 'Promoção de Carnaval',
    subtitle: 'Desconto de 20% - CARNAVAL20',
    texto: 'Se prepare para o carnaval com um desconto de 15% para você e sua familia viagarem com o melhor preço, aplique o Cupom CARNAVAL15 na pagina de pagamentos.',
    img: require('../img/carnaval.jpg'),
  },
];

const PromocoesScreen = () => {

  const renderItem = ({ item }) => (
    <Item title={item.title} img={item.img} subtitle={item.subtitle} texto={item.texto} />
  );

  const Item = ({ title, img, texto, subtitle }) => (
    <View style={styles.item}>
      <Image style={styles.tinyLogo} source={img} />
      <Text style={styles.title}>{title} <Icon name='airplane' size={30} /></Text>
      <Text style={styles.subtitle}>{subtitle}</Text>
      <Text style={styles.texto}>{texto}</Text>

    </View>
  );

  return (
    <SafeAreaView style={styles.container} backgroundColor={styles.colorPrimary.backgroundColor}>
      <FlatList data={DATA} renderItem={renderItem} keyExtractor={item => item.id} />

    </SafeAreaView>
  )
}

export default PromocoesScreen