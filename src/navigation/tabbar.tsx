import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { useTheme } from 'styled-components/native'

import { CharacterIcon, EpisodeIcon, LocationIcon } from 'src/icons'
import { CharactersScreen, EpisodesScreen, LocationsScreen } from 'src/screens'

import { Screens, Stacks } from './routes'

const Tab = createBottomTabNavigator()

export const TabBar = () => {
  const { grey, extra_blue } = useTheme()

  return (
    <>
      <Tab.Navigator
        initialRouteName={Stacks.Characters}
        screenOptions={{
          headerShown: true,
          tabBarActiveTintColor: extra_blue,
          tabBarInactiveTintColor: grey[0],
          tabBarHideOnKeyboard: true,
        }}>
        <Tab.Screen
          name={Screens.Characters}
          options={{
            tabBarIcon: CharacterIcon,
            tabBarLabel: 'Character',
          }}
          component={CharactersScreen}
        />

        <Tab.Screen
          name={Screens.Locations}
          options={{
            tabBarIcon: LocationIcon,
            tabBarLabel: 'Location',
          }}
          component={LocationsScreen}
        />

        <Tab.Screen
          name={Screens.Episodes}
          options={{
            tabBarIcon: EpisodeIcon,
            tabBarLabel: 'Episode',
          }}
          component={EpisodesScreen}
        />
      </Tab.Navigator>
    </>
  )
}
