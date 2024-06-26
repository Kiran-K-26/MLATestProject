// import React, { useEffect } from 'react';
// import { View, Text, Button } from 'react-native';
// import { useCopilot, CopilotStep, walkthroughable } from 'react-native-copilot';
// import { useNavigation } from '@react-navigation/native';

// const WalkthroughableText = walkthroughable(Text);

// const HomeScreen = () => {
//   const navigation = useNavigation();
//   const { start, stop, reset, copilotEvents, currentStep } = useCopilot();

//   useEffect(() => {
//     copilotEvents.on('start', () => console.log('Tour started'));
//     copilotEvents.on('stop', () => console.log('Tour stopped'));
//     copilotEvents.on('stepChange', (step) => console.log('Step changed', step));

//     return () => {
//       copilotEvents.off('start');
//       copilotEvents.off('stop');
//       copilotEvents.off('stepChange');
//     };
//   }, [copilotEvents]);

//   useEffect(() => {
//     console.log('Current step:', currentStep); // Check currentStep in console
//   }, [currentStep]);

//   return (
//     <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
//       <CopilotStep text="This is the home screen" order={1} name="home">
//         <WalkthroughableText style={{ fontSize: 24 }}>Home Screen</WalkthroughableText>
//       </CopilotStep>
//       <Button
//         title="Go to Detail"
//         onPress={() => {
//           stop();
//           navigation.navigate('Details')
//         }}
//       />
//       <Button
//         title="Start Tour"
//         onPress={()=> {start();}}
//       />
//     </View>
//   );
// };

// export default HomeScreen;

// src/HomeScreen.js
import React, { useEffect, useContext } from 'react';
import { View, Text, Button } from 'react-native';
import { useCopilot, CopilotStep, walkthroughable } from 'react-native-copilot';
import { useNavigation } from '@react-navigation/native';
import { AppContext } from './AppContext';
import { Stop } from 'react-native-svg';

const WalkthroughableText = walkthroughable(Text);

const HomeScreen = () => {
  const navigation = useNavigation();
  const { start, copilotEvents, currentStep, stop } = useCopilot();
  const { updateCurrentStep } = useContext(AppContext);
  const appContext = useContext(AppContext);

  useEffect(() => {
    copilotEvents.on('stepChange', (step) => {
      console.log('Step changed', step);
      // updateCurrentStep(step);
      appContext.updateCurrentStep(step);
    });

    return () => {
      copilotEvents.off('stepChange');
    };
  }, [copilotEvents]);

  useEffect(() => {
    console.log('Current step:', currentStep); // Check currentStep in console
  }, [currentStep]);

  const handleStartTour = async () => {
    try {
      start(); // Start the Copilot tour
    } catch (error) {
      console.error('Error starting Copilot tour:', error);
    }
  };

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <CopilotStep text="This is the home screen" order={1} name="home">
        <WalkthroughableText style={{ fontSize: 24 }}>Home Screen</WalkthroughableText>
      </CopilotStep>
      <Button
        title="Go to Detail"
        onPress={() => {
          appContext.updateCopilotSteps([]);
          navigation.push('Details')
        }}
      />
      <Button
        title="Start Tour"
        onPress={handleStartTour}
      />
    </View>
  );
};

export default HomeScreen;




