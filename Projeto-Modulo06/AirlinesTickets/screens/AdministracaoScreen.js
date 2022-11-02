import React from "react";
import { SafeAreaView, View, TextInput, Text, ScrollView, Button, Modal, TouchableHighlight } from "react-native";
import Icon from 'react-native-vector-icons/Ionicons';
import styles from './styles';
import api from '../conector/conector';
import CheckBox from '@react-native-community/checkbox';

const AdministracaoScreen = () => {

  const [contatos, setContatos] = React.useState([]);
  const [visibleContatos, setContatosVisible] = React.useState(false);
  const [viagens, setViagens] = React.useState([]);
  const [visibleViagens, setViagensVisible] = React.useState(false);
  const [viagem, setViagem] = React.useState({});
  const [contato, setContato] = React.useState({});
  const [ModalEditarContato, setModalEditarContato] = React.useState(false);
  const [ModalEditarViagem, setModalEditarViagem] = React.useState(false);
  const [ModalExcluir, setModalExcluir] = React.useState(false);
  const [funcao, setFuncao] = React.useState('');
  const [validacao, setValidacao] = React.useState(false);
  const [sucessoCadastro, setSucessoCadastro] = React.useState(false);
  const [toggleCheckBox, setToggleCheckBox] = React.useState(false);
  const [dataErrada, setDataErrada] = React.useState(false);
  const [excluido, setExcluido] = React.useState(false);
  const [valor, setValor] = React.useState('');
  const [destino, setDestino] = React.useState('');
  const [nome, setNome] = React.useState("");
  const [idade, setIdade] = React.useState();
  const [cpf, setCpf] = React.useState('');
  const [origem, setOrigem] = React.useState('');
  const [data_ida, setDataIda] = React.useState('');
  const [data_volta, setDataVolta] = React.useState('');
  const [email, onChangeEmail] = React.useState("");
  const [mensagem, onChangeMensagem] = React.useState("");

  const buscarContatos = async () => {
    setContatosVisible(true);
    setViagensVisible(false);
    await api.get('/Contatos/BuscarContatos'
    ).then(res => setContatos(res.data))
      .catch(error => console.log(JSON.stringify(error)));
  }

  const buscarViagens = async () => {
    setContatosVisible(false);
    setViagensVisible(true);
    await api.get('/Clientes/BuscarClientes'
    ).then(res => { setViagens(res.data); })
      .catch(error => console.log(JSON.stringify(error)));
  }

  const funcaoTipo = ({ funcao, dado }) => {
    setFuncao(funcao);
    setSucessoCadastro(false);
    setDataErrada(false);
    setValidacao(false);

    if (funcao == "Excluir Contato") {
      setContato(dado);
      setModalEditarContato(false); setModalExcluir(true); setModalEditarViagem(false); setExcluido(false);
    } else if (funcao == "Excluir Viagem") {
      setViagem(dado);
      setModalEditarContato(false); setModalExcluir(true); setModalEditarViagem(false); setExcluido(false);
    } else if (funcao == "Alterar Contato") {
      setContato(dado);
      setNome(dado.nome);
      onChangeMensagem(dado.mensagem);
      onChangeEmail(dado.email);
      setModalEditarContato(true); setModalExcluir(false); setModalEditarViagem(false);
    } else if (funcao == "Alterar Viagem") {
      console.log(dado.viagem.dataVolta);
      if (dado.viagem.dataVolta != "1970-01-01T00:00:00") {
        setToggleCheckBox(true);
      }
      else {
        setToggleCheckBox(false);
      }
      setNome(dado.nome);
      setIdade(dado.idade.toString());
      setCpf(dado.cpf);
      setOrigem(dado.viagem.origem);
      setDestino(dado.viagem.destino);
      setValor(dado.viagem.valor);
      setDataIda(new Date(dado.viagem.dataIda).toLocaleString().substring(0, 10));
      setDataVolta(new Date(dado.viagem.dataVolta).toLocaleString().substring(0, 10));
      setViagem(dado);
      setModalEditarContato(false); setModalExcluir(false); setModalEditarViagem(true);
    }
  }

  const AlterarPassagem = async () => {
    console.log(data_ida);
    if (origem !== '' && destino !== '' && valor !== '' && data_ida !== '' &&
      nome !== '' && cpf !== '' && idade !== '') {

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
        dataVoltaFormat = '1970-01-01T00:00:00:000Z';
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

      var viagemEdit = {idViagem: viagem.viagem.idViagem, origem, destino, valor, dataIda: dataInicioFormat, dataVolta: dataVoltaFormat };
      await api.put("/Clientes/AlterarCliente/" + `${viagem.idCliente}`, {idCliente: viagem.idCliente, nome, cpf, idade, viagemId: viagem.viagem.idViagem, viagem: viagemEdit }
      ).then(res => {
        buscarViagens();
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

  const AlterarContato = async () => {
    if (nome != "" && email != "" && mensagem != "") {
      const response = await api.put('/Contatos/AlterarContato/' + `${contato.idContato}`, {idContato: contato.idContato, nome, email, mensagem }
      ).then(res => buscarContatos())
        .catch(error => console.log(JSON.stringify(error)));
      setValidacao(false);
      setSucessoCadastro(true);
    }
    else {
      setValidacao(true);
      setSucessoCadastro(false);
    }
  }

  const excluirViagemContato = async () => {
    if (funcao == "Excluir Contato") {
      await api.delete("/Contatos/ApagarContato/" + `${contato.idContato}`
      ).then(res => { setExcluido(true); buscarContatos(); })
        .catch(error => console.log(JSON.stringify(error)));

    } else if (funcao == "Excluir Viagem") {
      console.log(viagem.idCliente);
      await api.delete("/Clientes/ApagarCliente/" + `${viagem.idCliente}`
      ).then(res => { setExcluido(true); buscarViagens(); })
        .catch(error => console.log(JSON.stringify(error)));
    }

  }

  return (
    <SafeAreaView style={[styles.container]} backgroundColor={styles.colorPrimary.backgroundColor}>
      <ScrollView >
        <View style={{ padding: 20, margin: 10, borderRadius: 18 }} backgroundColor={styles.colorSecond.backgroundColor}>
          <Text style={{ textAlign: 'center', fontSize: 30, marginBottom: 20, color: '#ffff' }}>Administração Airlines Tickets</Text>
          <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'space-between' }}>
            <View style={{ width: '45%' }}>
              <Button onPress={buscarContatos}
                title="Mensagens" color="#9370DB" accessibilityLabel="Mensagens" />
            </View>
            <View style={{ width: '45%' }}>
              <Button onPress={buscarViagens}
                title="Viagens" color="#9370DB" accessibilityLabel="Viagens" />
            </View>
          </View>
        </View>

        {visibleViagens &&
          <View style={{ margin: 20, padding: 10, borderRadius: 18 }} backgroundColor={styles.colorSecond.backgroundColor}>
            <Text style={{ textAlign: 'center', fontSize: 30, marginBottom: 20, color: '#ffff' }}>Viagens</Text>
            {viagens.length >= 1 &&
              viagens.map((item) => {
                return <View style={{ margin: 20, padding: 20, borderRadius: 18 }} backgroundColor={styles.colorPrimary.backgroundColor} key={`viagem-${item.destino}`}>
                  <Text style={[styles.title, { marginBottom: 12 }]}>Passagem <Icon name='airplane' size={30} /></Text>
                  <Text>Cliente:  {item.nome}</Text>
                  <Text>Idade:  {item.idade}</Text>
                  <Text>CPF:  {item.cpf}</Text>
                  <Text>Origem:  {item.viagem.origem}</Text>
                  <Text>Destino:  {item.viagem.destino}</Text>
                  <Text>Valor:  {item.viagem.valor}</Text>
                  <Text>Data Ida:  {new Date(item.viagem.dataIda).toLocaleString().substring(0, 10)}</Text>
                  {item.viagem.dataVolta != "1970-01-01T00:00:00" &&
                    <Text>Data Volta:  {new Date(item.viagem.dataVolta).toLocaleString().substring(0, 10)}</Text>
                  }
                  <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'space-evenly', marginTop: 40 }}>
                    <TouchableHighlight onPress={() => { funcaoTipo({ funcao: "Excluir Viagem", dado: item }); }}><Icon name='trash' size={30} /></TouchableHighlight>
                    <TouchableHighlight onPress={() => { funcaoTipo({ funcao: "Alterar Viagem", dado: item }); }}><Icon name='open' size={30} /></TouchableHighlight>
                  </View>
                </View>
              })
            }
            {viagens.length == 0 &&
              <Text>Nenhum Registro</Text>
            }
          </View>
        }

        {visibleContatos &&
          <View style={{ margin: 20, padding: 10, borderRadius: 18 }} backgroundColor={styles.colorSecond.backgroundColor}>
            <Text style={{ textAlign: 'center', fontSize: 30, marginBottom: 20, color: '#ffff' }}>Mensagens</Text>
            {contatos.length >= 1 &&
              contatos.map((item) => {
                return <View style={{ margin: 20, padding: 20, borderRadius: 18 }} backgroundColor={styles.colorPrimary.backgroundColor} key={`mensagem-${item.mensagem}`}>
                  <Text style={[styles.title, { marginBottom: 12 }]}>Mensagem <Icon name='mail' size={30} /></Text>
                  <Text>Nome:  {item.nome}</Text>
                  <Text>E-mail:  {item.email}</Text>
                  <Text>Mensagem:  {item.mensagem}</Text>
                  <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'space-evenly', marginTop: 40 }}>
                    <TouchableHighlight onPress={() => { funcaoTipo({ funcao: "Excluir Contato", dado: item }); }}><Icon name='trash' size={30} /></TouchableHighlight>
                    <TouchableHighlight onPress={() => { funcaoTipo({ funcao: "Alterar Contato", dado: item }); }}><Icon name='open' size={30} /></TouchableHighlight>
                  </View>
                </View>
              })
            }
            {contatos.length == 0 &&
              <Text>Nenhum Registro</Text>
            }
          </View>
        }

        {ModalEditarViagem &&
          <Modal animationType="slide" transparent={true} visible={ModalEditarViagem} onRequestClose={() => {
            setModalEditarViagem(!ModalEditarViagem);
          }}>
            <ScrollView >
              <View style={styles.centeredView}>
                <View style={[styles.modalView, { paddingBottom: 30 }]}>
                  <Icon name='close-outline' style={styles.btnClose} color={'white'} size={30} onPress={() => setModalEditarViagem(!ModalEditarViagem)} />
                  <Text style={{ textAlign: 'center', fontSize: 30, marginBottom: 20, color: '#ffff' }}>Alterar Passagem</Text>
                  {validacao &&
                    <Text style={{ color: 'red', margin: 10 }}>Preencha todos os campos</Text>
                  }
                  {dataErrada &&
                    <Text style={{ color: 'red', margin: 10 }}>Data Inválida</Text>
                  }
                  {sucessoCadastro &&
                    <Text style={{ color: 'green', margin: 10 }}>Passagem Alterada com sucesso, boa viagem!</Text>
                  }
                  <Text style={styles.label}>Nome:</Text>
                  <TextInput style={styles.input} onChangeText={setNome} value={nome} placeholder="Airlines" />
                  <Text style={styles.label}>Idade:</Text>
                  <TextInput style={styles.input} onChangeText={setIdade} value={idade}
                    placeholder="18" keyboardType="numeric" maxLength={3} />
                  <Text style={styles.label}>CPF:</Text>
                  <TextInput style={styles.input} onChangeText={setCpf}
                    value={cpf} placeholder="12322131221" keyboardType="number-pad" maxLength={14} />
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
                  <TextInput style={styles.input}
                    onChangeText={setDataIda} value={data_ida}
                    placeholder="10/10/2022" keyboardType="numeric" maxLength={10} />
                  {toggleCheckBox &&
                    <>
                      <Text style={styles.label}>Data Volta:</Text>
                      <TextInput style={styles.input} onChangeText={setDataVolta}
                        value={data_volta} placeholder="10/10/2022" keyboardType="numeric" maxLength={10} />
                    </>
                  }
                  <Button style={{ marginBottom: 10 }} onPress={AlterarPassagem}
                    title="Alterar" color="#9370DB" accessibilityLabel="Alterar" />
                </View>
              </View>
            </ScrollView>
          </Modal>
        }

        {ModalEditarContato &&
          <Modal animationType="slide" transparent={true} visible={ModalEditarContato} onRequestClose={() => {
            setModalEditarContato(!ModalEditarContato)
          }}>
            <ScrollView >
              <View style={styles.centeredView}>
                <View style={[styles.modalView, { paddingBottom: 30 }]}>
                  <Icon name='close-outline' style={styles.btnClose} color={'white'} size={30} onPress={() => setModalEditarContato(!ModalEditarContato)} />
                  <Text style={{ textAlign: 'center', fontSize: 30, marginBottom: 20, color: '#ffff' }}>Formulário de Alteração da Mensagem</Text>
                  {validacao &&
                    <Text style={{ color: 'red', margin: 10 }}>Preencha todos os campos</Text>
                  }
                  {sucessoCadastro &&
                    <Text style={{ color: 'green', margin: 10 }}>Mensagem alterada com sucesso!</Text>
                  }
                  <Text style={styles.label}>Nome:</Text>
                  <TextInput style={styles.input} onChangeText={setNome} value={nome} placeholder="Airlines" />
                  <Text style={styles.label}>E-mail:</Text>
                  <TextInput style={styles.input} onChangeText={onChangeEmail} value={email}
                    placeholder="airlinestickets@agenciaviagem.com" keyboardType="email-address" />
                  <Text style={styles.label}>Mensagem:</Text>
                  <TextInput style={styles.input} onChangeText={onChangeMensagem} value={mensagem}
                    placeholder="mensagem" keyboardType="default" />
                  <Button style={{ marginBottom: 10 }} onPress={AlterarContato}
                    title="Alterar" color="#9370DB" accessibilityLabel="Alterar"
                  />
                </View>
              </View>
            </ScrollView>
          </Modal>
        }

        {ModalExcluir &&
          <Modal animationType="slide" transparent={true} visible={ModalExcluir} onRequestClose={() => {
            setModalExcluir(!ModalExcluir)
          }}>
            <ScrollView >
              <View style={styles.centeredView}>
                <View style={[styles.modalView, { paddingBottom: 0 }]}>
                  <Icon name='close-outline' style={styles.btnClose} color={'white'} size={30} onPress={() => setModalExcluir(!ModalExcluir)} />
                  <Text style={{ textAlign: 'center', fontSize: 30, marginBottom: 20, color: '#ffff' }}>{funcao}</Text>
                  <Text style={{ color: 'red', margin: 10 }}>Tem certeza que deseja excluir?</Text>
                  {excluido &&
                    <Text style={{ color: 'green', margin: 10 }}>Foi excluido com sucesso!</Text>
                  }
                  <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'space-between' }}>
                    <View style={{ width: '45%' }}>
                      <Button
                        title="Excluir" color="#9370DB" accessibilityLabel="Excluir" onPress={excluirViagemContato} />
                    </View>
                    <View style={{ width: '45%' }}>
                      <Button title="Cancelar" color="#9370DB"
                        accessibilityLabel="Cancelar" onPress={() => setModalExcluir(!ModalExcluir)} />
                    </View>
                  </View>
                </View>
              </View>
            </ScrollView>
          </Modal>
        }
      </ScrollView>
    </SafeAreaView>
  )
}

export default AdministracaoScreen