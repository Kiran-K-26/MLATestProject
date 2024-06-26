import React, { createContext, useState } from 'react';

const AppContext = createContext();

const AppProvider = ({ children }) => {
  const [currentStep, setCurrentStep] = useState(null);

  const updateCurrentStep = (step) => {
    setCurrentStep(step);
  };

  return (
    <AppContext.Provider value={{ currentStep, updateCurrentStep }}>
      {children}
    </AppContext.Provider>
  );
};

export { AppContext, AppProvider };
