import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

import {
  LocationDetailScreen,
  LocationFiltersScreen,
  LocationsScreen,
} from 'src/screens'

import { Screens } from '../routes'

const Location = createNativeStackNavigator()

export const LocationsStack = () => {
  return (
    <Location.Navigator initialRouteName={Screens.Locations}>
      <Location.Screen
        name={Screens.Locations}
        options={{ headerShown: true }}
        component={LocationsScreen}
      />
      <Location.Screen
        name={Screens.LocationDetail}
        options={{ headerShown: true }}
        component={LocationDetailScreen}
      />
      <Location.Screen
        name={Screens.LocationFilters}
        options={{ headerShown: true }}
        component={LocationFiltersScreen}
      />
    </Location.Navigator>
  )
}
