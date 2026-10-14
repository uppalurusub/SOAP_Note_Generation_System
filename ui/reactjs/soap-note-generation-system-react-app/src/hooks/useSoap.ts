import { useCallback, useState } from "react";

import { generateSoap } from "../api/soapApi";
import type {
  SoapRequest,
  SoapResponse,
  UseSoapResult,
} from "../types/soap";

export const useSoap = (): UseSoapResult => {
  const [data, setData] = useState<SoapResponse | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  /**
   * Generate SOAP Note
   */
  const generate = useCallback(
    async (request: SoapRequest): Promise<void> => {
      try {
        setLoading(true);
        setError(null);

        const response = await generateSoap(request);

        setData(response);
      } catch (err: any) {
        console.error("SOAP API Error:", err);

        setError(
          err?.response?.data?.detail ||
            err?.message ||
            "Failed to generate SOAP note."
        );
      } finally {
        setLoading(false);
      }
    },
    []
  );

  /**
   * Reset State
   */
  const reset = () => {
    setData(null);
    setError(null);
  };

  return {
    data,
    loading,
    error,
    generateSoap: generate,
    reset,
  };
};

export default useSoap;

