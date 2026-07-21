
// src/components/RequestViewer.tsx

import React, { useState } from "react";
import {
  Box,
  Card,
  CardContent,
  Chip,
  Collapse,
  Divider,
  IconButton,
  Stack,
  Typography,
} from "@mui/material";

import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";
import ContentCopyIcon from "@mui/icons-material/ContentCopy";

import type { SoapRequest } from "../types/soap";
import {
  characterCount,
  formatJson,
  truncateText,
  wordCount,
} from "../utils/formatter";

interface RequestViewerProps {
  request: SoapRequest;
}

const RequestViewer: React.FC<RequestViewerProps> = ({
  request,
}) => {
  const [expanded, setExpanded] = useState(false);

  if (!request?.conversation) {
    return null;
  }

  const handleCopy = async () => {
    await navigator.clipboard.writeText(
      request.conversation
    );
  };

  return (
    <Card elevation={2}>
      <CardContent>
        <Stack
          direction="row"
          justifycontent="space-between"
          alignitems="center"
          mb={2}
        >
          <Typography variant="h6">
            Submitted Request
          </Typography>

          <IconButton onClick={handleCopy}>
            <ContentCopyIcon />
          </IconButton>
        </Stack>

        <Typography
          variant="subtitle2"
          color="text.secondary"
          gutterBottom
        >
          Conversation
        </Typography>

        <Box
          sx={{
            p: 2,
            bgcolor: "#f8f9fa",
            borderRadius: 2,
            whiteSpace: "pre-wrap",
            wordBreak: "break-word",
          }}
        >
          {truncateText(request.conversation, 600)}
        </Box>

        <Divider sx={{ my: 2 }} />

        <Stack
          direction="row"
          spacing={1}
          flexwrap="wrap"
        >
          <Chip
            color="primary"
            label={`Words: ${wordCount(
              request.conversation
            )}`}
          />

          <Chip
            color="secondary"
            label={`Characters: ${characterCount(
              request.conversation
            )}`}
          />
        </Stack>

        <Divider sx={{ my: 2 }} />

        <Stack
          direction="row"
          justifycontent="space-between"
          alignitems="center"
        >
          <Typography variant="subtitle1">
            JSON Payload
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
              color: "#ffffff",
              borderRadius: 2,
              overflow: "auto",
              fontFamily: "monospace",
              fontSize: 14,
            }}
          >
            <pre
              style={{
                margin: 0,
                whiteSpace: "pre-wrap",
              }}
            >
              {formatJson(request)}
            </pre>
          </Box>
        </Collapse>
      </CardContent>
    </Card>
  );
};

export default RequestViewer;

