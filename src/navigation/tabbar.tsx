import React, { useState } from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { useTheme } from 'styled-components/native'

import { CharacterIcon, EpisodeIcon, LocationIcon } from 'src/icons'

import { Stacks } from './routes'
import { CharacterStack, EpisodeStack, LocationStack } from './stacks'

const Tab = createBottomTabNavigator()

export const TabBar = () => {
  const { grey, extra_blue } = useTheme()
  const [tabVisible, setTabVisible] = useState(true)
  const display = tabVisible ? 'flex' : 'none'

  return (
    <>
      <Tab.Navigator
        initialRouteName={Stacks.Characters}
        screenOptions={{
          headerShown: false,
          tabBarActiveTintColor: extra_blue,
          tabBarInactiveTintColor: grey[0],
          tabBarStyle: {
            display,
          },
          tabBarHideOnKeyboard: true,
        }}>
        <Tab.Screen
          name={Stacks.Characters}
          options={{
            tabBarIcon: CharacterIcon,
            tabBarLabel: 'Character',
          }}>
          {(props) => (
            <CharacterStack setTabVisible={setTabVisible} {...props} />
          )}
        </Tab.Screen>
        <Tab.Screen
          name={Stacks.Locations}
          component={LocationStack}
          options={{
            tabBarIcon: LocationIcon,
            tabBarLabel: 'Location',
          }}
        />
        <Tab.Screen
          name={Stacks.Episodes}
          component={EpisodeStack}
          options={{
            tabBarIcon: EpisodeIcon,
            tabBarLabel: 'Episode',
          }}
        />
      </Tab.Navigator>
    </>
  )
}
