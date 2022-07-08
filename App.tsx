import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
} from "@apollo/client";
import { RootNavigation } from './src/navigation/RootNavigation';
import { Provider as PaperProvider } from 'react-native-paper';
import { Provider } from 'react-redux';
import { store } from './src/store/store';


const client = new ApolloClient({
  uri: 'https://rickandmortyapi.com/graphql',
  cache: new InMemoryCache()
})

const App: React.FC = () => {

  return (
    <Provider store={store}>
      <ApolloProvider client={client}>
        <PaperProvider>
          <NavigationContainer>
            <RootNavigation />
          </NavigationContainer>
        </PaperProvider>
      </ApolloProvider>
    </Provider>
  )
};

export default App;




