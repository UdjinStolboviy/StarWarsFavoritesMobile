import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigatorConstants} from '../../utils/navigator-constants';

import {useInjection} from 'inversify-react';
import {Types} from '../../ioc/types';
import {Navigator} from '../../service/navigator/navigator';
import {RootStackParamList} from './types';
import {InitialNavigator} from './InitialNavigator';
import {ErrorNavigator} from './ErrorNavigator';
import {BottomTabNavigator} from './bottom-tab-navigator/BottomTabNavigator';
import {Test1Screen} from '../screens/test-screen/Test1Screen';

const Stack = createStackNavigator<RootStackParamList>();

export interface RootNavigationContainerProps {
  initialRouteName: keyof RootStackParamList | undefined;
}

export const RootNavigationContainer = (
  props: RootNavigationContainerProps,
) => {
  const navigator: Navigator = useInjection(Types.Navigator);

  return (
    <NavigationContainer ref={ref => navigator.setNavigator(ref)}>
      <Stack.Navigator initialRouteName={props.initialRouteName}>
        <Stack.Screen
          name={NavigatorConstants.INITIAL_STACK}
          options={{
            headerShown: false,
          }}
          component={InitialNavigator}
        />
        <Stack.Screen
          name={NavigatorConstants.ERROR_STACK}
          options={{headerShown: false, gestureEnabled: false}}
          component={ErrorNavigator}
        />
        <Stack.Screen
          name={NavigatorConstants.BOTTOM_TAB_STACK}
          options={{headerShown: false, gestureEnabled: false}}
          component={BottomTabNavigator}
        />
        <Stack.Screen
          component={Test1Screen}
          options={{
            headerShown: false,
            cardStyle: {backgroundColor: 'rgba(1, 1, 1, 0.2)'},
          }}
          name={NavigatorConstants.TEST1_SCREEN}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
