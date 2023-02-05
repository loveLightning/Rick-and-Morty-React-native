import React, { useEffect } from 'react'
import { SafeAreaProvider } from 'react-native-safe-area-context'
import { enableScreens } from 'react-native-screens'
import { ApolloProvider } from '@apollo/client'
import { NavigationContainer } from '@react-navigation/native'
import { ThemeProvider } from 'styled-components'

import { client } from 'src/apollo'
import { FiltersCharactersProvider } from 'src/context'
import { RootNavigation } from 'src/navigation'
import { AppTheme } from 'src/theme'
import { isIOS } from 'src/utils'

const App: React.FC = () => {
  useEffect(() => {
    if (!isIOS) {
      return
    }
    enableScreens(false)
  }, [])

  return (
    <ThemeProvider theme={AppTheme}>
      <FiltersCharactersProvider>
        <NavigationContainer>
          <ApolloProvider client={client}>
            <SafeAreaProvider>
              <RootNavigation />
            </SafeAreaProvider>
          </ApolloProvider>
        </NavigationContainer>
      </FiltersCharactersProvider>
    </ThemeProvider>
  )
}

export default App
