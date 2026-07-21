// src/utils/formatter.ts

import type { SoapResponse } from "../api/soapApi";

/**
 * Convert null or undefined to a friendly placeholder.
 */
export const formatText = (
  value?: string | null,
  placeholder = "Not Available"
): string => {
  if (!value || value.trim() === "") {
    return placeholder;
  }

  return value.trim();
};

/**
 * Convert API response into display cards.
 */
export const formatSoapResponse = (response: SoapResponse) => {
  return [
    {
      key: "subjective",
      title: "Subjective",
      value: formatText(response.subjective),
    },
    {
      key: "objective",
      title: "Objective",
      value: formatText(response.objective),
    },
    {
      key: "assessment",
      title: "Assessment",
      value: formatText(response.assessment),
    },
    {
      key: "plan",
      title: "Plan",
      value: formatText(response.plan),
    },
  ];
};

/**
 * Pretty print JSON.
 */
export const formatJson = (data: unknown): string => {
  return JSON.stringify(data, null, 2);
};

/**
 * Count words in conversation.
 */
export const wordCount = (text: string): number => {
  if (!text.trim()) return 0;

  return text
    .trim()
    .split(/\s+/)
    .filter(Boolean).length;
};

/**
 * Count characters.
 */
export const characterCount = (text: string): number => {
  return text.length;
};

/**
 * Short preview for request viewer.
 */
export const truncateText = (
  text: string,
  maxLength = 150
): string => {
  if (text.length <= maxLength) {
    return text;
  }

  return `${text.substring(0, maxLength)}...`;
};

/**
 * Generate timestamp.
 */
export const formatDateTime = (date = new Date()): string => {
  return date.toLocaleString();
};

/**
 * Export SOAP note as plain text.
 */
export const exportSoapNote = (
  response: SoapResponse
): string => {
  return `
=========================
SOAP NOTE
=========================

Subjective
-----------
${formatText(response.subjective)}

Objective
----------
${formatText(response.objective)}

Assessment
-----------
${formatText(response.assessment)}

Plan
----
${formatText(response.plan)}
`;
};