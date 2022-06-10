import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Character } from '../Character/Character';
import { Location } from '../Location/Location';
import { Episode } from '../Episode/Episode';

const Tab = createBottomTabNavigator();

export const MyTabs: React.FC = () => {
    return (
        <Tab.Navigator>
            <Tab.Screen name="Character" component={Character} />
            <Tab.Screen name="Location" component={Location} />
            <Tab.Screen name="Episode" component={Episode} />
        </Tab.Navigator>
    )
}

