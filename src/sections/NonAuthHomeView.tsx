// src/sections/NonAuthHomeView.tsx
"use client";
import React from "react";
import { Typography, Container } from "@mui/material";

const NonAuthHomeView: React.FC = () => {
  return (
    <Container>
      <Typography variant="body1" gutterBottom>
        Prosím prihláste sa!
      </Typography>
    </Container>
  );
};

export default NonAuthHomeView;