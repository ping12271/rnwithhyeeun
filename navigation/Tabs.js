import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Home, Tv, Search, Profile } from '../screen';

const Tabs = createBottomTabNavigator();

export default () => (
    <Tabs.Navigator>
        <Tabs.Screen name="Home" component={Home} />
        <Tabs.Screen name="Tv" component={Tv} />
        <Tabs.Screen name="Search" component={Search} />
        <Tabs.Screen name="Profile" component={Profile} />
    </Tabs.Navigator>
)