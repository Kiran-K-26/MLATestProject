// import 'react-native-gesture-handler';
// import React from 'react';
// import { NavigationContainer } from '@react-navigation/native';
// import { createStackNavigator } from '@react-navigation/stack';
// import HomeScreen from './src/HomeScreen';
// import DetailsScreen from './src/DetailScreen';
// import { CopilotProvider } from 'react-native-copilot';
// import CustomTooltip from './src/CustomTooltip'; // Ensure this path is correct

// const Stack = createStackNavigator();

// const App = () => {
//   return ( 
//     <CopilotProvider overlay="svg">
//       <NavigationContainer>
//         <Stack.Navigator initialRouteName="Home">
//           <Stack.Screen name="Home" component={HomeScreen} key="HomeScreenKey" />
//           <Stack.Screen name="Details" component={DetailsScreen} key="DetailScreenKey" />
//         </Stack.Navigator>
//       </NavigationContainer>
//     </CopilotProvider>
//   );
// };

// export default App;


// App.js
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './src/HomeScreen';
import DetailsScreen from './src/DetailScreen';
import { CopilotProvider } from 'react-native-copilot';
import { AppProvider } from './src/AppContext'; // Adjust the path as per your project structure

const Stack = createStackNavigator();

const App = () => {
  return (
    <AppProvider>
      <CopilotProvider>
        <NavigationContainer>
          <Stack.Navigator initialRouteName="Home">
            <Stack.Screen name="Home" component={HomeScreen} />
            <Stack.Screen name="Details" component={DetailsScreen} />
          </Stack.Navigator>
        </NavigationContainer>
      </CopilotProvider>
    </AppProvider>
  );
};

export default App;


