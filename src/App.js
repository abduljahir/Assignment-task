import React, { useEffect, useState } from 'react';
import StepCard from './Component/StepCard';
import FlowDiagram from './Component/FlowDiagram';
import { Box, Container } from '@mui/material';
import './App.css'
const steps = [
  { description: 'This is the content for Step 1.' },
  { description: 'This is the content for Step 2.' },
  { description: 'This is the content for Step 3.' },
  { description: 'This is the content for Step 4.' },
];

function App() {
  const [currentStep, setStep] = useState(0);
  const [previous, setPrevious] = useState(1);
  const [prev, setPrev] = useState()
  const [getTransition,setTransition] = useState()
  const handleNext = () => {
   
    if (currentStep < steps.length - 1) {
      setStep(currentStep + 1)
      setPrevious(currentStep)
      setTransition(`${currentStep}->${currentStep+1}`)
    };

  };

  const handlePrev = () => {
    
    if (currentStep > 0) {
      setStep(currentStep - 1)
      setPrevious(currentStep)
      setTransition(`${currentStep}->${currentStep-1}`)
    };
  };
  const handleRefresh = () => {
    setStep(0);
  }
  
console.log(getTransition)
  useEffect(() => {
    console.log(currentStep)
    if (getTransition == "0->1") {
      setPrev('s1')
    } else if (getTransition == "1->2") {
      setPrev('s2')
    } else if (getTransition == "2->3") {
      setPrev('s3')
    }
    else if (getTransition == "0->2") {
      setPrev('s4')
    }
    else if (getTransition == "0->3") {
      setPrev('s5')
    }else if(currentStep==2){
      setPrevious(currentStep -1)
      setPrev('s4')

    } else if(currentStep==3){
      setPrevious(currentStep -1)
      setPrev('s5')

    }
    else if(currentStep==1){
      setPrevious(currentStep -1)
      setPrev('s1')

    }else {
      console.log("null")
      setPrev(null)
    }
  }, [currentStep])

  return (
    <Container
      sx={{
        display: 'flex',
        flexDirection: { xs: 'column', md: 'row' },
        alignItems: 'center',
        gap: 4,
        marginTop: 15,

      }}
    >
      <Box sx={{ flex: 1 }}>
        <StepCard
          currentStep={currentStep}
          onNext={handleNext}
          onPrev={handlePrev}
          onRefresh={handleRefresh}
          steps={steps}
        />
      </Box>
      <Box sx={{ flex: 1 }}>
        <FlowDiagram steps={steps}
          currentStep={currentStep}
          setStep={setStep}
          prev={prev}
        />
      </Box>
    </Container>
  );
}

export default App;