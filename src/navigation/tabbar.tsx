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
            tabBarIcon: ({ focused }) => <CharacterIcon focused={focused} />,
            tabBarLabel: 'Character',
          }}
          component={CharactersScreen}
        />

        <Tab.Screen
          name={Screens.Locations}
          options={{
            tabBarIcon: ({ focused }) => <LocationIcon focused={focused} />,
            tabBarLabel: 'Location',
          }}
          component={LocationsScreen}
        />

        <Tab.Screen
          name={Screens.Episodes}
          options={{
            tabBarIcon: ({ focused }) => <EpisodeIcon focused={focused} />,
            tabBarLabel: 'Episode',
          }}
          component={EpisodesScreen}
        />
      </Tab.Navigator>
    </>
  )
}
