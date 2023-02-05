import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

import {
  FiltersLocationScreen,
  LocationDetailScreen,
  LocationsScreen,
} from 'src/screens'

import { Screens } from '../routes'

const Location = createNativeStackNavigator()

export const LocationStack = () => {
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
