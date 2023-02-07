import React, { useEffect } from 'react'
import { getFocusedRouteNameFromRoute, Route } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

import {
  FiltersLocationScreen,
  LocationDetailScreen,
  LocationsScreen,
} from 'src/screens'

import { Screens } from '../routes'

interface Props {
  route: Route<string>
  setTabVisible(val: boolean): void
}

const tabBisibleValue: Record<string, boolean> = {
  [Screens.Locations]: true,
  [Screens.LocationDetail]: false,
}
const Location = createNativeStackNavigator()

export const LocationStack = ({ setTabVisible, route }: Props) => {
  const currentScreen = getFocusedRouteNameFromRoute(route)

  useEffect(() => {
    if (!currentScreen) return

    setTabVisible(tabBisibleValue[currentScreen])
  }, [currentScreen, setTabVisible])

  return (
    <Location.Navigator initialRouteName={Screens.Locations}>
      <Location.Screen
        name={Screens.Locations}
        options={{ headerShown: true }}
        component={LocationsScreen}
      />
      <Location.Screen
        name={Screens.LocationDetail}
        options={{ headerShown: false }}
        component={LocationDetailScreen}
      />
      <Location.Screen
        name={Screens.FiltersCharacters}
        options={{ headerShown: true }}
        component={FiltersLocationScreen}
      />
    </Location.Navigator>
  )
}
