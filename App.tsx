import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Character } from './src/components/Character'
import { Location } from './src/components/Location'
import { Episode } from './src/components/Episode'
import { HeaderTitle } from './src/components/HeaderTitle'

type RootStackParamList = {
  Character: undefined,
  Location: undefined,
  Episode: undefined
};

const RootStack = createNativeStackNavigator<RootStackParamList>();

const App: React.FC = () => {
  return (
      <NavigationContainer>
        <RootStack.Navigator initialRouteName="Character" screenOptions={{
          headerStyle: {
            backgroundColor: 'rgba(248, 248, 248, 0.92)',
          },
          headerTitleStyle: {
            color: '081F32',
            fontWeight: '700',
            fontSize: 34,
          },
        }}>
          <RootStack.Screen name="Character" component={Character} options={{ headerTitle: () => <HeaderTitle title={'Character'} /> }} />
          <RootStack.Screen name="Location" component={Location} options={{ headerTitle: () => <HeaderTitle title={'Location'} /> }} />
          <RootStack.Screen name="Episode" component={Episode} options={{ headerTitle: () => <HeaderTitle title={'Episode'} /> }} />
        </RootStack.Navigator>
      </NavigationContainer>
  )
};

export default App;




