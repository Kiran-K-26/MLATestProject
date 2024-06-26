// src/AppContext.js
import React, { createContext, useState } from 'react';

const AppContext = createContext();

const AppProvider = ({ children }) => {
  const [copilotSteps, setCopilotSteps] = useState([]);
  const [currentStep, setCurrentStep] = useState(null);

  const updateCopilotSteps = (steps) => {
    setCopilotSteps(steps);
  };

  const updateCurrentStep = (step) => {
    setCurrentStep(step);
  };

  return (
    <AppContext.Provider value={{ copilotSteps, currentStep, updateCopilotSteps, updateCurrentStep }}>
      {children}
    </AppContext.Provider>
  );
};

export { AppContext, AppProvider };
