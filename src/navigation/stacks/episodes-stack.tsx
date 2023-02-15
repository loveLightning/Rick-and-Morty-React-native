import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

import {
  EpisodeDetailScreen,
  EpisodeFiltersScreen,
  EpisodesScreen,
} from 'src/screens'

import { Screens } from '../routes'

const Episode = createNativeStackNavigator()

export const EpisodesStack = () => {
  return (
    <Episode.Navigator initialRouteName={Screens.Episodes}>
      <Episode.Screen
        name={Screens.Episodes}
        options={{ headerShown: true }}
        component={EpisodesScreen}
      />
      <Episode.Screen
        name={Screens.EpisodeDetail}
        options={{ headerShown: true }}
        component={EpisodeDetailScreen}
      />
      <Episode.Screen
        name={Screens.EpisodeFilters}
        options={{ headerShown: true }}
        component={EpisodeFiltersScreen}
      />
    </Episode.Navigator>
  )
}
