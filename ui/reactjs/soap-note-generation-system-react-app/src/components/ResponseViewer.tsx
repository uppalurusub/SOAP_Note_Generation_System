// src/components/ResponseViewer.tsx

import React, { useState } from "react";
import {
  Box,
  Card,
  CardContent,
  Chip,
  Collapse,
  Divider,
  Grid,
  IconButton,
  Paper,
  Stack,
  Tooltip,
  Typography,
} from "@mui/material";

import AssignmentIcon from "@mui/icons-material/Assignment";
import VisibilityIcon from "@mui/icons-material/Visibility";
import PsychologyIcon from "@mui/icons-material/Psychology";
import MedicationIcon from "@mui/icons-material/Medication";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";
import ContentCopyIcon from "@mui/icons-material/ContentCopy";
import DownloadIcon from "@mui/icons-material/Download";

import type { SoapResponse } from "../types/soap";
import {
  exportSoapNote,
  formatJson,
  formatSoapResponse,
} from "../utils/formatter";

interface ResponseViewerProps {
  response: SoapResponse;
}

const ResponseViewer: React.FC<ResponseViewerProps> = ({
  response,
}) => {
  const [expanded, setExpanded] = useState(false);

  if (!response) return null;

  const cards = formatSoapResponse(response);

  const icons = [
    <AssignmentIcon />,
    <VisibilityIcon />,
    <PsychologyIcon />,
    <MedicationIcon />,
  ];

  const copyResponse = async () => {
    await navigator.clipboard.writeText(
      exportSoapNote(response)
    );
  };

  const downloadResponse = () => {
    const blob = new Blob(
      [exportSoapNote(response)],
      {
        type: "text/plain;charset=utf-8",
      }
    );

    const url = window.URL.createObjectURL(blob);

    const a = document.createElement("a");
    a.href = url;
    a.download = "SOAP_Note.txt";
    a.click();

    window.URL.revokeObjectURL(url);
  };

  return (
    <Box>
      <Stack
        direction="row"
        justifycontent="space-between"
        alignitems="center"
        mb={3}
      >
        <Typography
          variant="h5"
          fontWeight="bold"
        >
          SOAP Note
        </Typography>

        <Stack direction="row" spacing={1}>
          <Tooltip title="Copy SOAP Note">
            <IconButton onClick={copyResponse}>
              <ContentCopyIcon />
            </IconButton>
          </Tooltip>

          <Tooltip title="Download">
            <IconButton
              onClick={downloadResponse}
            >
              <DownloadIcon />
            </IconButton>
          </Tooltip>
        </Stack>
      </Stack>

      <Grid container spacing={2}>
        {cards.map((card, index) => (
          <Grid
            size={{ xs: 12, md: 5 }}
            key={card.key}
          >
            <Card
              elevation={3}
              sx={{
                borderRadius: 3,
                height: "100%",
              }}
            >
              <CardContent>
                <Stack
                  direction="row"
                  spacing={1}
                  alignitems="center"
                  mb={2}
                >
                  {icons[index]}

                  <Typography
                    variant="h6"
                    fontWeight={600}
                  >
                    {card.title}
                  </Typography>
                </Stack>

                <Divider sx={{ mb: 2 }} />

                <Typography
                  variant="body1"
                  sx={{
                    whiteSpace: "pre-wrap",
                  }}
                >
                  {card.value}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>

      <Paper
        elevation={2}
        sx={{
          mt: 4,
          p: 2,
          borderRadius: 3,
        }}
      >
        <Stack
          direction="row"
          justifycontent="space-between"
          alignitems="center"
        >
          <Typography variant="h6">
            Raw JSON
          </Typography>

          <IconButton
            onClick={() =>
              setExpanded(!expanded)
            }
          >
            {expanded ? (
              <ExpandLessIcon />
            ) : (
              <ExpandMoreIcon />
            )}
          </IconButton>
        </Stack>

        <Collapse in={expanded}>
          <Box
            sx={{
              mt: 2,
              p: 2,
              bgcolor: "#272822",
              color: "#fff",
              borderRadius: 2,
              overflow: "auto",
              fontFamily: "monospace",
            }}
          >
            <pre
              style={{
                margin: 0,
                whiteSpace: "pre-wrap",
              }}
            >
              {formatJson(response)}
            </pre>
          </Box>
        </Collapse>
      </Paper>

      <Stack
        direction="row"
        spacing={1}
        mt={3}
        flexwrap="wrap"
      >
        <Chip
          color="primary"
          label="Subjective"
        />

        <Chip
          color="success"
          label="Objective"
        />

        <Chip
          color="warning"
          label="Assessment"
        />

        <Chip
          color="secondary"
          label="Plan"
        />
      </Stack>
    </Box>
  );
};

export default ResponseViewer;

