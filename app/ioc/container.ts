import { Container } from 'inversify';
import { Types } from './types';

//import { Navigator } from '../service/navigator/navigator';

const container = new Container();

//container.bind<NavigationStorage>(Types.NavigationStorage).to(NavigationStorage).inSingletonScope();

//container.bind<Navigator>(Types.Navigator).to(Navigator).inSingletonScope();

export default container;
