import React, { useEffect } from 'react'
import { getFocusedRouteNameFromRoute, Route } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

import {
  EpisodeDetailScreen,
  EpisodesScreen,
  FiltersEpisodeScreen,
} from 'src/screens'

import { Screens } from '../routes'

interface Props {
  route: Route<string>
  setTabVisible(val: boolean): void
}

const tabBisibleValue: Record<string, boolean> = {
  [Screens.Episodes]: true,
  [Screens.EpisodeDetail]: false,
}
const Episode = createNativeStackNavigator()

export const EpisodeStack = ({ setTabVisible, route }: Props) => {
  const currentScreen = getFocusedRouteNameFromRoute(route)

  useEffect(() => {
    if (!currentScreen) return

    setTabVisible(tabBisibleValue[currentScreen])
  }, [currentScreen, setTabVisible])

  return (
    <Episode.Navigator initialRouteName={Screens.Episodes}>
      <Episode.Screen
        name={Screens.Episodes}
        options={{ headerShown: false }}
        component={EpisodesScreen}
      />
      <Episode.Screen
        name={Screens.EpisodeDetail}
        options={{ headerShown: false }}
        component={EpisodeDetailScreen}
      />
      <Episode.Screen
        name={Screens.FiltersEpisodes}
        options={{ headerShown: false }}
        component={FiltersEpisodeScreen}
      />
    </Episode.Navigator>
  )
}
