
// src/components/SoapForm.tsx

import React from "react";
import {
  Box,
  Button,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import AutoAwesomeIcon from "@mui/icons-material/AutoAwesome";
import ClearIcon from "@mui/icons-material/Clear";
import { useForm } from "react-hook-form";

interface SoapFormProps {
  onSubmit: (conversation: string) => Promise<void> | void;
}

interface FormData {
  conversation: string;
}

const SAMPLE_CONVERSATION = `Patient reports fever, cough and fatigue for the past 3 days.
Temperature is 101°F.
Patient denies chest pain or shortness of breath.
No known drug allergies.`;

const SoapForm: React.FC<SoapFormProps> = ({
  onSubmit,
}) => {
  const {
    register,
    handleSubmit,
    reset,
    setValue,
    formState: { errors, isSubmitting },
  } = useForm<FormData>({
    defaultValues: {
      conversation: "",
    },
  });

  const submitHandler = async (data: FormData) => {
    await onSubmit(data.conversation);
  };

  const handleClear = () => {
    reset();
  };

  const handleSample = () => {
    setValue("conversation", SAMPLE_CONVERSATION);
  };

  return (
    <Box component="form" onSubmit={handleSubmit(submitHandler)}>
      <Typography
        variant="subtitle1"
        fontWeight={600}
        mb={2}
      >
        Doctor - Patient Conversation
      </Typography>

      <TextField
        fullWidth
        multiline
        minRows={12}
        label="Conversation"
        placeholder="Enter doctor-patient conversation here..."
        {...register("conversation", {
          required: "Conversation is required",
          minLength: {
            value: 20,
            message:
              "Conversation should contain at least 20 characters",
          },
        })}
        error={!!errors.conversation}
        helperText={errors.conversation?.message}
      />

      <Stack
        direction="row"
        spacing={2}
        justifycontent="space-between"
        mt={3}
      >
        <Button
          variant="outlined"
          color="secondary"
          startIcon={<ClearIcon />}
          onClick={handleClear}
        >
          Clear
        </Button>

        <Button
          variant="outlined"
          onClick={handleSample}
        >
          Load Sample
        </Button>

        <Button
          type="submit"
          variant="contained"
          startIcon={<AutoAwesomeIcon />}
          disabled={isSubmitting}
        >
          {isSubmitting
            ? "Generating..."
            : "Generate SOAP Note"}
        </Button>
      </Stack>
    </Box>
  );
};

export default SoapForm;

