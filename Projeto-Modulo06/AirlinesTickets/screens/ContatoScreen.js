import React from "react";
import { SafeAreaView, View, TextInput, Text, ScrollView, Button } from "react-native";
import Icon from 'react-native-vector-icons/Ionicons';
import styles from './styles';
import api from '../conector/conector';

const ContatoScreen = () => {
  const [nome, onChangeNome] = React.useState("");
  const [email, onChangeEmail] = React.useState("");
  const [mensagem, onChangeMensagem] = React.useState("");
  const [validacao, setValidacao] = React.useState(false);
  const [sucessoCadastro, setSucessoCadastro] = React.useState(false);


  const EnviarContato = async () => {
    if (nome != "" && email != "" && mensagem != "") {
      const response = await api.post('/Contatos/AdicionarContato', { nome, email, mensagem }
      ).then(res => console.log(JSON.stringify(res.data)))
        .catch(error => console.log(JSON.stringify(error)));
      setValidacao(false);
      setSucessoCadastro(true);
    }
    else {
      setValidacao(true);
      setSucessoCadastro(false);
    }
  }

  return (
    <SafeAreaView style={[styles.container]} backgroundColor={styles.colorPrimary.backgroundColor}>
      <ScrollView >
        <View style={{ margin: 20, padding: 20, borderRadius: 18 }} backgroundColor={styles.colorSecond.backgroundColor}>
          <Text style={{ textAlign: 'center', fontSize: 30, marginBottom: 20, color: '#ffff' }}>Formulário de Contato</Text>
          {validacao &&
            <Text style={{ color: 'red', margin: 10 }}>Preencha todos os campos</Text>
          }
          {sucessoCadastro &&
            <Text style={{ color: 'green', margin: 10 }}>Entraremos em contato em breve</Text>
          }
          <Text style={styles.label}>Nome:</Text>
          <TextInput style={styles.input} onChangeText={onChangeNome} value={nome} placeholder="Airlines" />
          <Text style={styles.label}>E-mail:</Text>
          <TextInput style={styles.input} onChangeText={onChangeEmail} value={email}
            placeholder="airlinestickets@agenciaviagem.com" keyboardType="email-address" />
          <Text style={styles.label}>Mensagem:</Text>
          <TextInput style={styles.input} onChangeText={onChangeMensagem} value={mensagem}
            placeholder="mensagem" keyboardType="default" />
          <Button style={{ marginBottom: 10 }} onPress={EnviarContato}
            title="Enviar" color="#9370DB" accessibilityLabel="Enviar"
          />
        </View>

        <View style={{ margin: 20, padding: 10, borderRadius: 18 }} backgroundColor={styles.colorSecond.backgroundColor}>
          <Text style={{ textAlign: 'center', fontSize: 30, marginBottom: 20, color: '#ffff' }}>Meios de Contato</Text>
          <View style={{ flexDirection: 'row', flexWrap: 'wrap', }}>
            <View>
              <Text style={[styles.label, { marginBottom: 10 }]}><Icon name='logo-whatsapp' size={20} /> (021) 99999-7777</Text>
              <Text style={[styles.label, { marginBottom: 10 }]}><Icon name='phone-portrait-outline' size={20} /> (021) 99999-8888</Text>
              <Text style={[styles.label, { marginBottom: 10 }]}><Icon name='call-outline' size={20} /> (021) 2222-1111</Text>
              <Text style={[styles.label, { marginBottom: 10 }]}><Icon name='call-outline' size={20} /> 0800 4002-8922</Text>
            </View>
            <View>
              <Text style={[styles.label, { marginBottom: 10 }]}><Icon name='mail-outline' size={20} /> AirlinesTickets@email.com</Text>
              <Text style={[styles.label, { marginBottom: 10 }]}><Icon name='logo-facebook' size={20} /> Facebook.com/AirlinesTickets</Text>
              <Text style={[styles.label, { marginBottom: 10 }]}><Icon name='logo-twitter' size={20} /> Twitter.com/AirlinesTickets</Text>
              <Text style={[styles.label, { marginBottom: 10 }]}><Icon name='logo-instagram' size={20} /> Instagram.com/AirlinesTickets</Text>
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

export default ContatoScreen