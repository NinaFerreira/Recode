import React, { useState } from "react";
import { View, FlatList, Text, Button, Image, SafeAreaView, Modal, TextInput, ScrollView } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import styles from './styles';
import api from '../conector/conector';
import { MaskedTextInput } from "react-native-mask-text";
import CheckBox from '@react-native-community/checkbox';

const DATA = [
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    title: 'Nova York, EUA',
    valor: '7.600',
    img: require('../img/new.jpg'),
  },
  {
    id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
    title: 'Maragogi Alagoas',
    valor: '1,500.00',
    img: require('../img/maragogi-alagoas.jpg'),
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d72',
    title: 'Londres',
    valor: '7.200',
    img: require('../img/londres.jpg'),
  },
  {
    id: '58694a0f-3da1-471f-bd96-21312312312fs',
    title: 'Pernambuco',
    valor: '1.000',
    img: require('../img/pernambuco.jpg'),
  },
  {
    id: '58694a0f-3da1-471f-bd96-321321fsa2312',
    title: 'Santa Barbara',
    valor: '800',
    img: require('../img/santabarbara.jpg'),
  },
  {
    id: '58694a0f-3da1-471f-bd96-231321dasaaad5',
    title: 'Recife',
    valor: '1.500',
    img: require('../img/recife.jpg'),
  },
  {
    id: '58694a0f-3da1-471f-bd96-dasdasdas231d',
    title: 'Paris',
    valor: '5.200',
    img: require('../img/PARIS.jpg'),
  }, {
    id: '58694a0f-3da1-471f-bd96-321321fsadas12',
    title: 'Havai',
    valor: '10.000',
    img: require('../img/havai.jpg'),
  },
];

const DestinosScreen = () => {
  const [modalVisible, setModalVisible] = React.useState(false);
  const [valor, setValor] = React.useState('');
  const [destino, setDestino] = React.useState('');
  const [nome, setNome] = React.useState("");
  const [idade, setIdade] = React.useState();
  const [cpf, setCpf] = React.useState('');
  const [origem, setOrigem] = React.useState('');
  const [data_ida, setDataIda] = React.useState('');
  const [data_volta, setDataVolta] = React.useState('');
  const [validacao, setValidacao] = React.useState(false);
  const [sucessoCadastro, setSucessoCadastro] = React.useState(false);
  const [toggleCheckBox, setToggleCheckBox] = React.useState(false);
  const [dataErrada, setDataErrada] = React.useState(false);

  const renderItem = ({ item }) => (
    <Item title={item.title} img={item.img} valor={item.valor} />
  );

  const Item = ({ title, img, valor }) => (
    <View style={styles.item}>
      <Image style={styles.tinyLogo} source={img} />
      <Text style={styles.title}>{title} <Icon name='airplane' size={30} /></Text>
      <Text style={styles.price}>R$: {valor}</Text>
      <Button onPress={() => { setModalVisible(!modalVisible); setValor(valor); setDestino(title); }} title="Comprar" color="#9370DB" accessibilityLabel="Comprar" style={'margin: 10'} />
    </View>
  );

  const ComprarPassagem = async () => {
    if (origem !== '' && destino !== '' && valor !== '' && data_ida !== '' && nome !== '' && cpf !== '' && idade !== '') {

      if (data_ida.length == 10) {
        var dataInicioFormat = data_ida.split('/');
        if ((parseInt(dataInicioFormat[0]) >= 1) && (parseInt(dataInicioFormat[0]) <= 31)
          && (parseInt(dataInicioFormat[1]) >= 1) && (parseInt(dataInicioFormat[1]) <= 12)) {
          dataInicioFormat = dataInicioFormat[2] + '-' + dataInicioFormat[1] + '-' + dataInicioFormat[0] + "T00:00:00Z";
          dataInicioFormat = new Date(dataInicioFormat).toISOString();
          setDataErrada(false);
        }
        else {
          setDataErrada(true);
          return false;
        }

      }
      else {
        setDataErrada(true);
        return false;
      }

      if (!toggleCheckBox) {
        dataVoltaFormat = "1970-01-01T00:00:00.000Z";
        setDataErrada(false);
      }
      else if (toggleCheckBox) {
        if (data_volta.length == 10) {
          var dataVoltaFormat = data_volta.split('/');
          if (parseInt(dataVoltaFormat[0]) >= 1 && parseInt(dataVoltaFormat[0]) <= 31 &&
            parseInt(dataVoltaFormat[1]) >= 1 && parseInt(dataVoltaFormat[1]) <= 12) {
            dataVoltaFormat = dataVoltaFormat[2] + '-' + dataVoltaFormat[1] + '-' + dataVoltaFormat[0] + "T00:00:00Z";
            dataVoltaFormat = new Date(dataVoltaFormat).toISOString();
            setDataErrada(false);
          }
        }
        else {
          setDataErrada(true);
          return false;
        }
      }

      var viagem = {origem, destino, valor, dataIda: dataInicioFormat, dataVolta: dataVoltaFormat };
      await api.post('/Clientes/AdicionarCliente', { nome, idade: 10, cpf, viagem }
      ).then(res => {
        console.log(JSON.stringify(res.data));
        setValidacao(false);
        setSucessoCadastro(true);
      })
        .catch(error => console.log(JSON.stringify(error)));
    }
    else {
      setValidacao(true);
      setSucessoCadastro(false);
    }
  };

  return (
    <SafeAreaView style={styles.container} backgroundColor={styles.colorPrimary.backgroundColor}>
      <FlatList data={DATA} renderItem={renderItem} keyExtractor={item => item.id} />
      <Modal animationType="slide" transparent={true} visible={modalVisible} onRequestClose={() => {
        setModalVisible(!modalVisible);
      }}>
        <ScrollView >
          <View style={styles.centeredView}>
            <View style={[styles.modalView, { paddingBottom: 30 }]}>
              <Icon name='close-outline' style={styles.btnClose} color={'white'} size={30} onPress={() => setModalVisible(!modalVisible)} />
              <Text style={{ textAlign: 'center', fontSize: 30, marginBottom: 20, color: '#ffff' }}>Comprar Passagem</Text>
              {validacao &&
                <Text style={{ color: 'red', margin: 10 }}>Preencha todos os campos</Text>
              }
              {dataErrada &&
                <Text style={{ color: 'red', margin: 10 }}>Data Inválida</Text>
              }
              {sucessoCadastro &&
                <Text style={{ color: 'green', margin: 10 }}>Passagem comprada com sucesso, boa viagem!</Text>
              }
              <Text style={styles.label}>Nome:</Text>
              <TextInput style={styles.input} onChangeText={setNome} value={nome} placeholder="Airlines" />
              <Text style={styles.label}>Idade:</Text>
              <TextInput style={styles.input} onChangeText={setIdade} value={idade}
                placeholder="18" keyboardType="numeric" maxLength={3} />
              <Text style={styles.label}>CPF:</Text>
              <MaskedTextInput style={styles.input} mask="999.999.999-99" onChangeText={setCpf} value={cpf}
                placeholder="12322131221" keyboardType="number-pad" maxLength={14} />
              <Text style={styles.label}>Origem:</Text>
              <TextInput style={styles.input} onChangeText={setOrigem} value={origem}
                placeholder="cidade" keyboardType="default" />
              <Text style={styles.label}>Destino:</Text>
              <TextInput style={styles.input} editable={false} value={destino}
                placeholder="cidade" keyboardType="default" />
              <Text style={styles.label}>Valor:</Text>
              <TextInput style={styles.input} editable={false}
                value={valor} placeholder="100.00" keyboardType="numeric" />
              <Text style={styles.label}>Ida e Volta?</Text>
              <CheckBox style={styles.input} disabled={false} tintColors={{ true: '#9370DB' }}
                value={toggleCheckBox} onValueChange={setToggleCheckBox} />
              <Text style={styles.label}>Data Ida:</Text>
              <MaskedTextInput style={styles.input} mask="99/99/9999"
                onChangeText={setDataIda} value={data_ida}
                placeholder="10/10/2022" keyboardType="numeric" maxLength={10} />
              {toggleCheckBox &&
                <>
                  <Text style={styles.label}>Data Volta:</Text>
                  <MaskedTextInput style={styles.input} mask="99/99/9999" onChangeText={setDataVolta}
                    value={data_volta} placeholder="10/10/2022" keyboardType="numeric" maxLength={10} />
                </>
              }
              <Button style={{ marginBottom: 10 }} onPress={ComprarPassagem}
                title="Comprar" color="#9370DB" accessibilityLabel="Comprar" />
            </View>
          </View>
        </ScrollView>
      </Modal>
    </SafeAreaView>
  )
}

export default DestinosScreen