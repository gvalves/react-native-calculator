import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import { Layout } from '~/components/Layout';
import { MainScreen } from '~/screens/MainScreen';

const Stack = createStackNavigator();

const App: React.FC = () => {
  return (
    <NavigationContainer>
      <Layout>
        <Stack.Navigator>
          <Stack.Screen name="Main" component={MainScreen} />
        </Stack.Navigator>
      </Layout>
    </NavigationContainer>
  );
};

export { App };
