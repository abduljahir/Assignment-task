import React, { useEffect, useMemo, useState } from "react";
import { Button, Card, CardContent } from "@mui/material";
import { gsap } from "gsap";

const FlowDiagram = ({ steps, currentStep, setStep, prev}) => {
  
  useEffect(() => {
    const timeline = gsap.timeline();
    timeline.to(".path-highlight", {
      motionPath: {
        path: "#flow-path",
        align: "#flow-path",
        alignOrigin: [0.5, 0.5],
        start: currentStep / (steps.length - 1),
        end: (currentStep + 1) / steps.length,
      },
      duration: 0.5,
    });
  }, [currentStep]);

  const check = useMemo(() => {
    return currentStep;
  }, [currentStep]);

  console.log(check);

  return (
    <>
      <Card
        sx={{
          width: "100%",
          borderRadius: "20px",
          background:
            "linear-gradient(to bottom right, #ffffff, rgb(198, 231, 245))",
          paddingLeft: "30px",
          paddingRight: "30px",
          zIndex: "-1",
        }}
      >
        <CardContent>
          <div className="flow-card position-relative">
            {prev === "s1" && <span id="emoji" className={`emoji s1`}></span>}
            {prev === "s2" && <span id="emoji" className={`emoji s2`}></span>}
            {prev === "s3" && <span id="emoji" className={`emoji s3`}></span>}
            {prev === "s4" && <span id="emoji" className={`emoji s4`}></span>}
            {prev === "s5" && <span id="emoji" className={`emoji s5`}></span>}
            <div className="spl">
              {steps.map((step, idx) => (
                <div className="inside" key={idx}>
                  <Button
                    variant="contained"
                    onClick={() => setStep(idx)}
                    className={idx % 2 === 1 ? "even " : "odd"}
                    sx={{
                      borderRadius: "20px",
                      transform:
                        currentStep === idx ? "scale(1.1)" : "scale(1)",
                      transition: "0.3s",
                      paddingLeft: "30px",
                      paddingRight: "30px",
                      background: currentStep === idx ? "#f107a3" : "white",
                      color: currentStep === idx ? "white" : "black",
                      border: "2px solid rgba(168, 77, 193, 0.84)",
                    }}
                  >
                    {`step ${idx + 1}`}
                  </Button>
                </div>
              ))}
            </div>
          </div>
        </CardContent>
      </Card>
    </>
  );
};

export default FlowDiagram;
