import {SafeAreaView, StyleSheet, Text, View, Pressable} from 'react-native';
import React, {useEffect, useState} from 'react';
import {Colors} from '../../../utils/colors';
import {Fonts} from '../../../utils/fonts';
import {Texts} from '../../../utils/texts';
import {useNavigation} from '@react-navigation/native';
import {InitializationService} from '../../../service/initializer/initialization-service';
import {useInjection} from 'inversify-react';
import {Types} from '../../../ioc/types';
import {InitializationStorage} from '../../../mobx/storage/initialization-storage';

import {Button} from '@rneui/themed';
import {ApiService} from '../../../service/api/api';
import {observer} from 'mobx-react';
import {ButtonIcon} from '../../common/button/ButtonIcon';

export const Test2Screen = observer(() => {
  const navigation = useNavigation();
  const [people, setPeople] = useState(null);

  const initService: InitializationService = useInjection(
    Types.InitializationService,
  );
  const initStorage: InitializationStorage = useInjection(
    Types.InitializationStorage,
  );
  const apiService: ApiService = useInjection(Types.ApiService);

  const getDate = () => {
    apiService
      .getPeople()
      .then(response => {
        initStorage.setInitializationSuccessful(true);
        setPeople(response.data);
      })
      .catch(error => {
        console.log('error', error);
      });
  };

  // useEffect(() => {
  //   getDate();
  // }, []);

  console.log('peopsl---', initStorage.getInitializationSuccessful());

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.mainWrapper}>
        <Text style={styles.bigText}>{'Test2Screen'}</Text>
        <ButtonIcon text={'Test2Screen'} onPress={getDate} />
      </View>
    </SafeAreaView>
  );
});

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.FFFFFF,
    justifyContent: 'center',
    alignItems: 'center',
  },
  mainWrapper: {
    paddingHorizontal: 20,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  bigText: {
    marginTop: 24,
    textAlign: 'center',
    fontSize: 20,
    lineHeight: 24,
    color: Colors.B3B3B3,
  },
});
