import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Character } from './src/components/Character/Character'
import { Location } from './src/components/Location/Location'
import { Episode } from './src/components/Episode/Episode'
import { HeaderTitle } from './src/components/HeaderTitle/HeaderTitle'
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  useQuery,
  gql
} from "@apollo/client";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Image } from 'react-native';

type RootStackParamList = {
  Character: undefined,
  Location: undefined,
  Episode: undefined
};

const RootStack = createNativeStackNavigator<RootStackParamList>();

const Tab = createBottomTabNavigator();

const client = new ApolloClient({
  uri: 'https://rickandmortyapi.com/graphql',
  cache: new InMemoryCache()
})

const App: React.FC = () => {
  return (
    <ApolloProvider client={client}>
      <NavigationContainer>
        <Tab.Navigator initialRouteName="Character" screenOptions={{
          headerStyle: {
            backgroundColor: 'rgba(248, 248, 248, 0.92)',
            height: 90,
          },
          headerTitleStyle: {
            color: '081F32',
            fontWeight: '700',
            fontSize: 34,
          },
          tabBarStyle: {
            backgroundColor: 'rgba(248, 248, 248, 0.92)',
          }
        }}>
          <Tab.Screen name="Character" component={Character} options={{ headerTitle: () => <HeaderTitle title={'Character'} /> }} />
          <Tab.Screen name="Location" component={Location} options={{ headerTitle: () => <HeaderTitle title={'Location'} /> }} />
          <Tab.Screen name="Episode" component={Episode} options={{
            headerTitle: () => <HeaderTitle title={'Episode'} />,
            tabBarIcon: () => (
              <Image style={{ height: 30, width: 30 }} source={{uri: './assets/images/character.svg'}} />
            ),
          }} />
        </Tab.Navigator>
      </NavigationContainer>
    </ApolloProvider>

  )
};

export default App;




