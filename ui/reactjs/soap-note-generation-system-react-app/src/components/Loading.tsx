
// src/components/Loading.tsx

import React from "react";
import {
  Box,
  CircularProgress,
  Paper,
  Typography,
} from "@mui/material";

interface LoadingProps {
  message?: string;
}

const Loading: React.FC<LoadingProps> = ({
  message = "Generating SOAP Note..."
}) => {
  return (
    <Paper
      elevation={2}
      sx={{
        p: 5,
        borderRadius: 3,
      }}
    >
      <Box
        display="flex"
        flexdirection="column"
        justifycontent="center"
        alignitems="center"
        gap={2}
      >
        <CircularProgress size={60} />

        <Typography
          variant="h6"
          color="text.secondary"
          align="center"
        >
          {message}
        </Typography>

        <Typography
          variant="body2"
          color="text.secondary"
          align="center"
        >
          Please wait while the AI generates the SOAP note...
        </Typography>
      </Box>
    </Paper>
  );
};

export default Loading;

