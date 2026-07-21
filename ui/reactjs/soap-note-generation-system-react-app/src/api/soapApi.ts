
// src/api/soapApi.ts

import apiClient from "./axios";
import API from "./endpoints";

import type {
  SoapRequest,
  SoapResponse,
} from "../types/soap";

/**
 * Generate SOAP Note
 */
export const generateSoap = async (
  request: SoapRequest
): Promise<SoapResponse> => {
  try {
    const response = await apiClient.post<SoapResponse>(
      API.GENERATE_SOAP,
      request
    );

    return response.data;
  } catch (error) {
    throw error;
  }
};

/**
 * Health Check (Optional)
 */
export const healthCheck = async (): Promise<string> => {
  const response = await apiClient.get(API.HEALTH);

  return response.data;
};

