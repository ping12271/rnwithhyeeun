import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { Home, Detail } from '../screen';

// import Detail from '../screen/Detail';
// import Home from '../screen/Home';

const Stack = createStackNavigator();

export default () => (
    <Stack.Navigator>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Detail" component={Detail} />
    </Stack.Navigator>
);