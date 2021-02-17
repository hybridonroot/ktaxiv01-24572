import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import UserProfile206589Navigator from '../features/UserProfile206589/navigator';
import Maps206570Navigator from '../features/Maps206570/navigator';
import Settings206548Navigator from '../features/Settings206548/navigator';
import Settings206533Navigator from '../features/Settings206533/navigator';
import NotificationList206532Navigator from '../features/NotificationList206532/navigator';
import Maps206531Navigator from '../features/Maps206531/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
UserProfile206589: { screen: UserProfile206589Navigator },
Maps206570: { screen: Maps206570Navigator },
Settings206548: { screen: Settings206548Navigator },
Settings206533: { screen: Settings206533Navigator },
NotificationList206532: { screen: NotificationList206532Navigator },
Maps206531: { screen: Maps206531Navigator },

    /** new navigators can be added here */
    SplashScreen: {
      screen: SplashScreen
    }
};

const DrawerAppNavigator = createDrawerNavigator(
  {
    ...AppNavigator,
  },
  {
    contentComponent: SideMenu
  },
);

const AppContainer = createAppContainer(DrawerAppNavigator);

export default AppContainer;
