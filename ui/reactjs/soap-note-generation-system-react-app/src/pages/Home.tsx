// src/pages/Home.tsx

import { useState } from "react";
import {
  Box,
  Grid,
  Paper,
  Typography,
  Divider,
  Alert,
} from "@mui/material";

import SoapForm from "../components/SoapForm";
import RequestViewer from "../components/RequestViewer";
import ResponseViewer from "../components/ResponseViewer";
import Loading from "../components/Loading";

import { useSoap } from "../hooks/useSoap";
import type { SoapRequest } from "../types/soap";

const Home = () => {
  const { data, loading, error, generateSoap } = useSoap();

  const [request, setRequest] = useState<SoapRequest>({
    conversation: "",
  });

  const handleSubmit = async (conversation: string) => {
    const payload: SoapRequest = {
      conversation,
    };

    setRequest(payload);

    await generateSoap(payload);
  };

  return (
    <Box sx={{ py: 4 }}>
      <Typography
        variant="h4"
        fontWeight="bold"
        gutterBottom
      >
        SOAP Note Generator
      </Typography>

      <Typography
        variant="body1"
        color="text.secondary"
        mb={3}
      >
        Convert doctor-patient conversations into structured
        SOAP notes using AI.
      </Typography>

      <Grid container spacing={3}>
        {/* Request Panel */}
        <Grid size={{ xs: 12, md: 5 }}>
          <Paper
            elevation={3}
            sx={{
              p: 3,
              borderRadius: 3,
              height: "100%",
            }}
          >
            <Typography variant="h6" gutterBottom>
              Patient Conversation
            </Typography>

            <Divider sx={{ mb: 2 }} />

            <SoapForm onSubmit={handleSubmit} />

            <Box mt={4}>
              <RequestViewer request={request} />
            </Box>
          </Paper>
        </Grid>

        {/* Response Panel */}
        <Grid size={{ xs: 12, md: 5 }}>
          <Paper
            elevation={3}
            sx={{
              p: 3,
              borderRadius: 3,
              minHeight: 650,
            }}
          >
            <Typography variant="h6" gutterBottom>
              Generated SOAP Note
            </Typography>

            <Divider sx={{ mb: 2 }} />

            {loading && <Loading />}

            {!loading && error && (
              <Alert severity="error">
                {error}
              </Alert>
            )}

            {!loading && !error && data && (
              <ResponseViewer response={data} />
            )}

            {!loading && !error && !data && (
              <Alert severity="info">
                Enter a patient conversation and click
                <strong> Generate SOAP Note </strong>
                to view the generated SOAP note.
              </Alert>
            )}
          </Paper>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Home;

