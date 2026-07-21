// src/types/soap.ts

/**
 * SOAP Request Model
 */
export interface SoapRequest {
  conversation: string;
}

/**
 * SOAP Response Model
 */
export interface SoapResponse {
  subjective: string;
  objective: string;
  assessment: string;
  plan: string;
}

/**
 * Generic API Response
 */
export interface ApiResponse<T> {
  success: boolean;
  message: string;
  data: T;
}

/**
 * API Error Response
 */
export interface ApiError {
  detail?: string;
  message?: string;
  status?: number;
}

/**
 * Form State
 */
export interface SoapFormState {
  conversation: string;
}

/**
 * Response Card Model
 */
export interface SoapCard {
  key: keyof SoapResponse;
  title: string;
  value: string;
}

/**
 * Loading State
 */
export interface LoadingState {
  loading: boolean;
}

/**
 * API Hook Result
 */
export interface UseSoapResult {
  data: SoapResponse | null;
  loading: boolean;
  error: string | null;
  generateSoap: (request: SoapRequest) => Promise<void>;
}