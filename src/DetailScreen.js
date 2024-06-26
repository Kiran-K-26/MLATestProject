// import React, {useEffect} from 'react';
// import { View, Text, Button } from 'react-native';
// import { CopilotProvider, useCopilot, CopilotStep, walkthroughable } from 'react-native-copilot';

// const WalkthroughableText = walkthroughable(Text);

// const DetailScreen = () => {
//   const { start, stop, reset, copilotEvents } = useCopilot();

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
//   return (
//     <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
//       <CopilotStep text="This is the detail screen" order={1} name="detail">
//         <WalkthroughableText style={{ fontSize: 24 }}>Detail Screen</WalkthroughableText>
//       </CopilotStep>
//       <Button
//         title="Start Tour"
//         onPress={()=> {
//           stop();
//           start();
//         }}
//       />
//     </View>
//   );
// };

// export default DetailScreen;

// src/DetailScreen.js
import React, { useEffect, useContext } from 'react';
import { View, Text, Button } from 'react-native';
import { useCopilot, CopilotStep, walkthroughable } from 'react-native-copilot';
import { AppContext } from './AppContext';

const WalkthroughableText = walkthroughable(Text);

const DetailScreen = () => {
  const { start, copilotEvents, currentStep } = useCopilot();
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

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <CopilotStep text="This is the detail screen" order={2} name="detail">
        <WalkthroughableText style={{ fontSize: 24 }}>Detail Screen</WalkthroughableText>
      </CopilotStep>
      <Button
        title="Start Tour"
        onPress={() => start()}
      />
    </View>
  );
};

export default DetailScreen;



