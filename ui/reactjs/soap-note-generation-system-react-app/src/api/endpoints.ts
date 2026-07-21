
// src/api/endpoints.ts

/**
 * API Endpoint Constants
 * Centralized location for all backend routes.
 */

export const API = {
  // SOAP Note APIs
  GENERATE_SOAP: "/generate-soap",

  // Health Check
  HEALTH: "/health",

  // Future APIs
  GENERATE_SUMMARY: "/generate-summary",
  GENERATE_ICD: "/generate-icd",
  GENERATE_PRESCRIPTION: "/generate-prescription",
  GENERATE_DIAGNOSIS: "/generate-diagnosis",
  GENERATE_CLINICAL_NOTE: "/generate-clinical-note",
} as const;

export default API;

