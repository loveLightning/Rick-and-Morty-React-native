import React, { useEffect } from 'react'
import { SafeAreaProvider } from 'react-native-safe-area-context'
import { enableScreens } from 'react-native-screens'
import SplashScreen from 'react-native-splash-screen'
import { ApolloProvider } from '@apollo/client'
import { NavigationContainer } from '@react-navigation/native'
import { ThemeProvider } from 'styled-components'

import { client } from 'src/apollo'
import { RootNavigation } from 'src/navigation'
import { AppTheme } from 'src/theme'
import { isIOS } from 'src/utils'

import {
  CharactersProvider,
  EpisodesProvider,
  LocationsProvider,
} from './context'

const App: React.FC = () => {
  useEffect(() => {
    if (!isIOS) {
      return
    }
    enableScreens(false)
  }, [])

  useEffect(() => {
    SplashScreen.hide()
  }, [])

  return (
    <ThemeProvider theme={AppTheme}>
      <CharactersProvider>
        <LocationsProvider>
          <EpisodesProvider>
            <NavigationContainer>
              <ApolloProvider client={client}>
                <SafeAreaProvider>
                  <RootNavigation />
                </SafeAreaProvider>
              </ApolloProvider>
            </NavigationContainer>
          </EpisodesProvider>
        </LocationsProvider>
      </CharactersProvider>
    </ThemeProvider>
  )
}

export default App
