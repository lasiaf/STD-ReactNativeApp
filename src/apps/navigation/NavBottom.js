import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import {
  UserScreen,
  MenuScreen
} from '@presentation/screens';

const Tab = createBottomTabNavigator();

export default function NavBottom() {
  return (
    <Tab.Navigator>

      <Tab.Screen 
        name="Home" 
        component={MenuScreen}
      />

      <Tab.Screen 
        name="Profile" 
        component={UserScreen} 
      />

    </Tab.Navigator>
  );
}