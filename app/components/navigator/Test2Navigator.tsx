import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigatorConstants} from '../../utils/navigator-constants';
import {Test2Screen} from '../screens/test-screen/Test2Screen';

const Stack = createStackNavigator();

export const Test2Navigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{headerShown: false}}
      initialRouteName={NavigatorConstants.TEST2_SCREEN}>
      <Stack.Screen
        component={Test2Screen}
        name={NavigatorConstants.TEST2_SCREEN}
      />
    </Stack.Navigator>
  );
};
