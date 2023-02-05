// import React from 'react'
// import { createNativeStackNavigator } from '@react-navigation/native-stack'

// export type RootStackParamList = {
//   Character: undefined
//   Location: undefined
//   Episode: undefined
//   BottomTubNavigation: undefined
//   Filter: undefined
//   CharacterDetail: undefined
//   LocationDetail: undefined
// }
// import { CharacterDetail } from '../components/Character/ListCharacter/CharacterDetail/CharacterDetail'
// import { Filter } from '../components/Filter/Filter'
// import { HeaderFilter } from '../components/HeaderFilter/HeaderFilter'
// import { LocationDetail } from '../components/Location/ListLocation/LocationDetail/LocationDetail'
// import { BottomTubNavigation } from './BottomTubNavigation'

// export const RootNavigation = () => {
//   const RootStack = createNativeStackNavigator<RootStackParamList>()

//   return (
//     <RootStack.Navigator initialRouteName="BottomTubNavigation">
//       <RootStack.Screen
//         name="BottomTubNavigation"
//         component={BottomTubNavigation}
//         options={{ headerShown: false }}
//       />
//       <RootStack.Screen
//         name="Filter"
//         component={Filter}
//         options={{
//           headerBackVisible: false,
//           headerTitle: () => <HeaderFilter title={'Filter'} />,
//         }}
//       />
//       <RootStack.Screen
//         name="CharacterDetail"
//         component={CharacterDetail}
//         options={{
//           headerShown: false,
//         }}
//       />
//       <RootStack.Screen
//         name="LocationDetail"
//         component={LocationDetail}
//         options={{
//           headerShown: false,
//         }}
//       />
//     </RootStack.Navigator>
//   )
// }
