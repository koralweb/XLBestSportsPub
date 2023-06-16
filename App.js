import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';
import {faBars} from '@fortawesome/free-solid-svg-icons/faBars';
import {faShoppingBasket} from '@fortawesome/free-solid-svg-icons/faShoppingBasket';
import {faCheck} from '@fortawesome/free-solid-svg-icons/faCheck';
import {faTimesCircle} from '@fortawesome/free-solid-svg-icons/faTimesCircle';

import {library} from '@fortawesome/fontawesome-svg-core';
import screenList from './src/screenList';
import {faTh} from '@fortawesome/free-solid-svg-icons/faTh';
import {faUser} from '@fortawesome/free-solid-svg-icons/faUser';
import {faPhone} from '@fortawesome/free-solid-svg-icons/faPhone';

library.add(
  faBars,
  faShoppingBasket,
  faCheck,
  faTimesCircle,
  faTh,
  faUser,
  faPhone,
);

const Stack = createNativeStackNavigator();

const App = () => {
  const renderScreens = () => {
    return screenList.map(screen => (
      <Stack.Screen
        key={screen.title}
        name={screen.name}
        component={screen.component}
        options={{headerShown: false}}
      />
    ));
  };

  return (
    <NavigationContainer>
      <Stack.Navigator>{renderScreens()}</Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
