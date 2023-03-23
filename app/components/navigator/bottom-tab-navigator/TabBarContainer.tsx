import React from 'react';
import {StyleSheet, View} from 'react-native';
import {ComponentSize} from '../../../utils/component-size';
import {Colors} from '../../../utils/colors';
import {observer} from 'mobx-react';
import {useInjection} from 'inversify-react';
import {Types} from '../../../ioc/types';
import Animated from 'react-native-reanimated';
import {Navigator} from '../../../service/navigator/navigator';
import {NavigatorConstants} from '../../../utils/navigator-constants';

import {Button} from '@rneui/themed';
import {useNavigation} from '@react-navigation/native';

export interface TabBarContainerProps {
  children: React.ReactElement | React.ReactElement[];
}

export const TabBarContainer = observer((props: TabBarContainerProps) => {
  const navigator: Navigator = useInjection(Types.Navigator);
  const navigation = useNavigation();

  const routeName = navigator.getNavigator()?.getCurrentRoute()?.name;

  const renderContent = () => {
    if (routeName === NavigatorConstants.TEST2_SCREEN) {
      return (
        <>
          <Button
            title={routeName}
            onPress={() =>
              navigation.navigate(NavigatorConstants.TEST1_SCREEN as never)
            }
            containerStyle={{
              width: 50,
            }}
          />
          <Button
            title={routeName}
            containerStyle={{
              width: 50,
              marginHorizontal: 40,
            }}
          />
          <Button
            title={routeName}
            containerStyle={{
              width: 50,
            }}
          />
        </>
      );
    }

    if (routeName === NavigatorConstants.TEST3_SCREEN) {
      return (
        <>
          <Button
            title={routeName}
            containerStyle={{
              width: 50,
              marginHorizontal: 50,
            }}
          />
          <Button
            title={routeName}
            containerStyle={{
              width: 50,
            }}
          />
        </>
      );
    }

    return props.children;
  };

  return (
    <View style={styles.container}>
      <Animated.View style={[styles.mainWrapper]}>
        {renderContent()}
      </Animated.View>
    </View>
  );
});
const styles = StyleSheet.create({
  container: {
    alignSelf: 'center',
    width: ComponentSize.TAB_BAR_WIDTH,
    height: ComponentSize.TAB_BAR_HEIGHT,
    bottom: 34,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
  },
  mainWrapper: {
    position: 'absolute',
    left: 0,
    top: 0,
    bottom: 0,
    right: 0,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    elevation: 10,
    shadowRadius: 13,
    shadowColor: 'rgb(0, 114, 206)',
    shadowOpacity: 0.24,
    flexDirection: 'row',
    paddingVertical: 4,
    borderRadius: 70,
    backgroundColor: Colors.B3B3B3,
    opacity: 1,
    zIndex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
