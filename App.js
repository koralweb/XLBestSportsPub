import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';
import HomeScreen from './src/screens/HomeScreen';
import CartScreen from './src/screens/CartScreen';
import {faBars} from '@fortawesome/free-solid-svg-icons/faBars';
import {faShoppingBasket} from '@fortawesome/free-solid-svg-icons/faShoppingBasket';
import {faCheck} from '@fortawesome/free-solid-svg-icons/faCheck';
import {faTimesCircle} from '@fortawesome/free-solid-svg-icons/faTimesCircle';

import {library} from '@fortawesome/fontawesome-svg-core';

library.add(faBars, faShoppingBasket, faCheck, faTimesCircle);

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Cart"
          component={CartScreen}
          options={{headerShown: false}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
