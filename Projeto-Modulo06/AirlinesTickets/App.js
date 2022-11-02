import React from 'react';
import {  ScrollView, StatusBar, useColorScheme} from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer} from '@react-navigation/native';
import HomeScreen from './screens/HomeScreen';
import AdministracaoScreen from './screens/AdministracaoScreen';
import DestinosScreen from './screens/DestinosScreen';
import PromocoesScreen from './screens/PromocoesScreen';
import Icon from 'react-native-vector-icons/Ionicons';
import ContatoScreen from './screens/ContatoScreen';
import styles from './screens/styles';

const Tab = createBottomTabNavigator();

const App = () => {
  const isDarkMode = useColorScheme() === 'dark';

  return (
    <NavigationContainer>
      <StatusBar barStyle={'dark-content'} backgroundColor={styles.colorSecond.backgroundColor}/>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            if (route.name === 'Inicio') {
              iconName = focused? 'home' : 'home-outline';
            } else if (route.name === 'Destino') {
              iconName = focused ? 'airplane' : 'airplane-outline';
            }else if (route.name === 'Promoções') {
              iconName = focused ? 'pricetags' : 'pricetags-outline';
            }else if (route.name === 'Contato') {
              iconName = focused ? 'mail' : 'mail-outline';
            }else if (route.name === 'Administração') {
              iconName = focused ? 'options' : 'options-outline';
            }

            return  <Icon name={iconName} size={size} color={color} />;
          },
          tabBarActiveTintColor: '#4B0082',
          tabBarInactiveTintColor: 'gray',
        })}
      >
        <Tab.Screen name="Inicio" component={HomeScreen} />
        <Tab.Screen name='Destino' component={DestinosScreen}/>
        <Tab.Screen name='Promoções' component={PromocoesScreen}/>
        <Tab.Screen name='Contato' component={ContatoScreen}/>
        <Tab.Screen name='Administração' component={AdministracaoScreen}/>
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default App;