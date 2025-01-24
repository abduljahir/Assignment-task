import React, { useEffect } from "react";
import { Card, CardContent, Typography, IconButton } from "@mui/material";
import { ArrowBack, ArrowForward } from "@mui/icons-material";
import RefreshIcon from "@mui/icons-material/Refresh";

const StepCard = ({ currentStep, onNext, onPrev, onRefresh, steps }) => {
  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === "ArrowRight" && currentStep < steps.length - 1) {
        onNext();
      } else if (event.key === "ArrowLeft" && currentStep > 0) {
        onPrev();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [currentStep, onNext, onPrev, steps.length]);

  return (
    <Card
      sx={{
        width: "100%",
        maxWidth: 500,
        height: "335px",
        maxHeight: 500,
        padding: 2,
        background: "linear-gradient(45deg, #7b2ff7, #f107a3)",
        color: "white",
        borderRadius: "20px",
        marginTop: "115px",
      }}
    >
      <CardContent>
        <Typography
          variant="h4"
          fontWeight="bold"
          gutterBottom
          sx={{ marginBottom: "80px" }}
        >
          {`Step ${currentStep + 1}:`}
        </Typography>
        <Typography variant="body1" gutterBottom sx={{ textAlign: "center" }}>
          {steps[currentStep].description}
        </Typography>

        <div
          style={{
            display: "flex",
            justifyContent: `${
              currentStep !== 0 ? "space-between" : "flex-end"
            }`,
            marginTop: "100px",
          }}
        >
          {currentStep !== 0 && (
            <IconButton
              onClick={onRefresh}
              sx={{ marginRight: "auto", bgcolor: "white", color: "black" }}
            >
              <RefreshIcon />
            </IconButton>
          )}
          <div style={{ display: "flex" }}>
            {currentStep !== 0 && (
              <IconButton
                onClick={onPrev}
                sx={{ marginRight: "10px", bgcolor: "white", color: "black" }}
              >
                <ArrowBack />
              </IconButton>
            )}
            {currentStep !== steps.length - 1 && (
              <IconButton
                onClick={onNext}
                sx={{ bgcolor: "white", color: "black" }}
              >
                <ArrowForward />
              </IconButton>
            )}
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default StepCard;
