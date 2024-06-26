import React from 'react';
import { View, Text, Button } from 'react-native';
import { copilot, walkthroughable, CopilotStep } from '@okgrow/react-native-copilot';

const WalkthroughableText = walkthroughable(Text);

const DetailScreen = ({ start }) => {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <CopilotStep text="This is the detail screen" order={1} name="detail">
        <WalkthroughableText style={{ fontSize: 24 }}>Detail Screen</WalkthroughableText>
      </CopilotStep>
      <Button
        title="Start Tour"
        onPress={start}
      />
    </View>
  );
};

export default copilot()(DetailScreen);
