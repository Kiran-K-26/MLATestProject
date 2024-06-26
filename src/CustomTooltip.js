import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { useCopilot, CopilotStep, walkthroughable } from 'react-native-copilot';

const CustomTooltip = () => 
    
    {
        const {
            isFirstStep,
            isLastStep,
            handleNext,
            handleNth,
            handlePrev,
            handleStop,
            currentStep,
          } = useCopilot();
return(
    
    <View style={styles.container}>
      <Text style={styles.title}>{currentStep.name}</Text>
      <Text style={styles.text}>{currentStep.text}</Text>
      <View style={styles.buttonContainer}>
        {currentStep.order !== 1 && (
          <TouchableOpacity onPress={handlePrev}>
            <Text style={styles.button}>Previous</Text>
          </TouchableOpacity>
        )}
        {currentStep.order !== currentStep.totalSteps ? (
          <TouchableOpacity onPress={handleNext}>
            <Text style={styles.button}>Next</Text>
          </TouchableOpacity>
        ) : (
          <TouchableOpacity onPress={handleStop}>
            <Text style={styles.button}>Finish</Text>
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
    }
    
    

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    padding: 10,
    borderRadius: 5,
  },
  title: {
    fontWeight: 'bold',
    marginBottom: 5,
  },
  text: {
    marginBottom: 10,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  button: {
    color: '#007bff',
  },
});

export default CustomTooltip;
