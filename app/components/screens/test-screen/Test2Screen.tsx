import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  Pressable,
  FlatList,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import {Colors} from '../../../utils/colors';
import {Fonts} from '../../../utils/fonts';
import {Texts} from '../../../utils/texts';
import {useNavigation} from '@react-navigation/native';
import {InitializationService} from '../../../service/initializer/initialization-service';
import {useInjection} from 'inversify-react';
import {Types} from '../../../ioc/types';
import {InitializationStorage} from '../../../mobx/storage/initialization-storage';

import {Button, Card, Icon} from '@rneui/themed';
import {ApiService} from '../../../service/api/api';
import {observer} from 'mobx-react';
import {ButtonIcon} from '../../common/button/ButtonIcon';
import {InputView} from '../../common/input/InputView';

import {NavigatorConstants} from '../../../utils/navigator-constants';

export const Test2Screen = observer(() => {
  const navigation = useNavigation();
  const [people, setPeople] = useState(null);
  const [inputValues, setInputValues] = useState('');

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
        setPeople(response.data.results);
      })
      .catch(error => {
        console.log('error', error);
        navigation.navigate(NavigatorConstants.ERROR_SCREEN as never);
      });
  };

  // useEffect(() => {
  //   getDate();
  // }, []);

  console.log('peopsl---', people);
  const renderCard = (item: any, index: number) => {
    return (
      <Card containerStyle={{borderRadius: 20}}>
        <Card.Title>{item.name}</Card.Title>
        <Card.Divider />
        <Card.Image
          style={{padding: 0}}
          resizeMode="contain"
          source={require('../../../../assets/img/sword.jpeg')}
        />
        <Text style={{margin: 20, width: 200}}>{`Gender: ${item.gender}`}</Text>
        <Button
          icon={
            <Icon name="code" color="#ffffff" iconStyle={{marginRight: 10}} />
          }
          buttonStyle={{
            borderRadius: 10,
            marginLeft: 0,
            marginRight: 0,
            marginBottom: 0,
          }}
          title="VIEW NOW"
        />
      </Card>
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.mainWrapper}>
        <InputView
          value={inputValues}
          containerStyle={{width: '100%'}}
          onChange={values => setInputValues(values)}
        />
        <Text style={styles.bigText}>{'Test2Screen'}</Text>
        <ButtonIcon text={'Test2Screen'} onPress={getDate} />
        <FlatList
          disableVirtualization
          data={people}
          renderItem={({item, index}) => renderCard(item, index)}
          showsVerticalScrollIndicator={false}
          onEndReachedThreshold={1}
          onEndReached={() => console.log('onEndReached')}
        />
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
