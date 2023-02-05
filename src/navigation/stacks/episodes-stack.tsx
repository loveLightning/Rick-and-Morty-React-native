import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

import {
  EpisodeDetailScreen,
  EpisodesScreen,
  FiltersEpisodeScreen,
} from 'src/screens'

import { Screens } from '../routes'

const Episode = createNativeStackNavigator()

export const EpisodeStack = () => {
  return (
    <Episode.Navigator initialRouteName={Screens.Episodes}>
      <Episode.Screen
        name={Screens.Episodes}
        options={{ headerShown: true }}
        component={EpisodesScreen}
      />
      <Episode.Screen
        name={Screens.EpisodeDetail}
        options={{ headerShown: false }}
        component={EpisodeDetailScreen}
      />
      <Episode.Screen
        name={Screens.FiltersCharacters}
        options={{ headerShown: true }}
        component={FiltersEpisodeScreen}
      />
    </Episode.Navigator>
  )
}
