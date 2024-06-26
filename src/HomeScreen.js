import React from 'react';
import { View, Text, Button } from 'react-native';
import { copilot, walkthroughable, CopilotStep } from '@okgrow/react-native-copilot';

const WalkthroughableText = walkthroughable(Text);

const HomeScreen = ({ navigation, start }) => {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <CopilotStep text="This is the home screen" order={1} name="home">
        <WalkthroughableText style={{ fontSize: 24 }}>Home Screen</WalkthroughableText>
      </CopilotStep>
      <Button
        title="Go to Detail"
        onPress={() => navigation.navigate('Details')}
      />
      <Button
        title="Start Tour"
        onPress={start}
      />
    </View>
  );
};

export default copilot()(HomeScreen);
