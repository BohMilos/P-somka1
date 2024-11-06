// src/sections/AuthHomeView.tsx
"use client";
import React from "react";
import { Session } from "next-auth";
import { Typography, Container} from "@mui/material";

interface AuthHomeViewProps {
  session: Session;
}

const AuthHomeView: React.FC<AuthHomeViewProps> = ({ session }) => {
  return (
    <Container>
      <Typography variant="h4" component="h1" gutterBottom>
        Vitajte, {session.user?.name}!
      </Typography>
    </Container>
  );
};

export default AuthHomeView;