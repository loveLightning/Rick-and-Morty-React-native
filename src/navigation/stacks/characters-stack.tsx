import React, { useEffect } from 'react'
import { getFocusedRouteNameFromRoute, Route } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

import {
  CharacterDetailScreen,
  CharactersScreen,
  FiltersCharacterScreen,
} from 'src/screens'

import { Screens } from '../routes'

interface Props {
  route: Route<string>
  setTabVisible(val: boolean): void
}

const tabBisibleValue: Record<string, boolean> = {
  [Screens.Characters]: true,
  [Screens.CharacterDetail]: false,
}

const Character = createNativeStackNavigator()

export const CharacterStack = ({ setTabVisible, route }: Props) => {
  const currentScreen = getFocusedRouteNameFromRoute(route)

  useEffect(() => {
    if (!currentScreen) return

    setTabVisible(tabBisibleValue[currentScreen])
  }, [currentScreen, setTabVisible])

  return (
    <Character.Navigator initialRouteName={Screens.Characters}>
      <Character.Screen
        name={Screens.Characters}
        options={{ headerShown: true }}
        component={CharactersScreen}
      />
      <Character.Screen
        name={Screens.CharacterDetail}
        options={{ headerShown: true }}
        component={CharacterDetailScreen}
      />
      <Character.Screen
        name={Screens.FiltersCharacters}
        options={{ headerShown: true }}
        component={FiltersCharacterScreen}
      />
    </Character.Navigator>
  )
}
