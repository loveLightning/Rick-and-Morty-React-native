// import React from 'react'
// import { Image } from 'react-native'
// import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'

// import { HeaderTitle } from '../components/HeaderTitle/HeaderTitle'
// import { CharacterScreen } from '../screens/CharacterScreen/CharacterScreen'
// import { EpisodeScreen } from '../screens/EpisodeScreen/EpisodeScreen'
// import { LocationScreen } from '../screens/LocationScreen/LocationScreen'

// export const BottomTubNavigation = () => {
//   const Tab = createBottomTabNavigator()

//   return (
//     <Tab.Navigator
//       initialRouteName="Character"
//       screenOptions={{
//         tabBarStyle: {
//           backgroundColor: 'rgba(248, 248, 248, 0.92)',
//           height: 50,
//         },
//         tabBarActiveTintColor: '#5856D6',
//         headerStyle: {
//           backgroundColor: 'rgba(248, 248, 248, 0.92)',
//           height: 80,
//         },
//         headerTitleStyle: {
//           color: '081F32',
//           fontWeight: '700',
//           fontSize: 34,
//         },
//       }}>
//       <Tab.Screen
//         name="Character"
//         component={CharacterScreen}
//         options={{
//           tabBarIcon: () => (
//             <Image
//               style={{ width: 30, height: 30 }}
//               source={require('../../assets/images/character.png')}
//             />
//           ),
//           headerTitle: () => <HeaderTitle title={'Character'} />,
//         }}
//       />
//       <Tab.Screen
//         name="Location"
//         component={LocationScreen}
//         options={{
//           tabBarIcon: () => (
//             <Image
//               style={{ width: 30, height: 30 }}
//               source={require('../../assets/images/location.png')}
//             />
//           ),
//           headerTitle: () => <HeaderTitle title={'Location'} />,
//         }}
//       />
//       <Tab.Screen
//         name="Episode"
//         component={EpisodeScreen}
//         options={{
//           tabBarIcon: () => (
//             <Image
//               style={{ height: 30, width: 30 }}
//               source={require('../../assets/images/episode.png')}
//             />
//           ),
//           headerTitle: () => <HeaderTitle title={'Episode'} />,
//         }}
//       />
//     </Tab.Navigator>
//   )
// }
