# 🩺 AI SOAP Note Generator - React + TypeScript

A modern React + TypeScript frontend application that converts a doctor-patient conversation into a structured **SOAP (Subjective, Objective, Assessment, Plan)** clinical note using an AI-powered backend API.

The application provides a clean Material UI interface, form validation, request/response visualization, API integration using Axios, and reusable React Hooks.

---

# 📌 Features

- ✅ React 19 + TypeScript
- ✅ Material UI (MUI)
- ✅ React Router
- ✅ React Hook Form Validation
- ✅ Axios API Integration
- ✅ Custom React Hooks
- ✅ Request Viewer
- ✅ Response Viewer
- ✅ Loading Indicator
- ✅ Error Handling
- ✅ Sample Conversation Loader
- ✅ Clean Component-Based Architecture
- ✅ Reusable API Layer
- ✅ Production Ready Folder Structure

---

# Application Workflow

```
Doctor-Patient Conversation
            │
            ▼
      SOAP Form
            │
            ▼
 Form Validation
            │
            ▼
 React Hook (useSoap)
            │
            ▼
 Axios API Client
            │
            ▼
 AI Backend API
            │
            ▼
 SOAP Response
            │
            ▼
Response Viewer
```

---

# Technology Stack

| Technology | Version |
|------------|----------|
| React | Latest |
| TypeScript | Latest |
| Vite | Latest |
| Material UI | Latest |
| React Hook Form | Latest |
| Axios | Latest |
| React Router | Latest |

---

# Project Structure

```
src
│
├── api
│   ├── axios.ts
│   ├── endpoints.ts
│   └── soapApi.ts
│
├── components
│   ├── Loading.tsx
│   ├── RequestViewer.tsx
│   ├── ResponseViewer.tsx
│   └── SoapForm.tsx
│
├── hooks
│   └── useSoap.ts
│
├── pages
│   └── Home.tsx
│
├── types
│   └── soap.ts
│
├── utils
│   └── formatter.ts
│
├── App.tsx
└── main.tsx
```

---

# Architecture

```
Presentation Layer
────────────────────────────────
Home
SoapForm
Loading
RequestViewer
ResponseViewer

        │

Business Layer
────────────────────────────────
useSoap Hook

        │

API Layer
────────────────────────────────
soapApi.ts
axios.ts
endpoints.ts

        │

Backend API
────────────────────────────────
FastAPI / Flask / Spring Boot
```

---

# Folder Description

## api

Contains all backend communication.

### axios.ts

- Axios configuration
- Base URL
- Request interceptor
- Response interceptor

### endpoints.ts

Stores all REST endpoint URLs.

Example:

```ts
const API = {
    GENERATE_SOAP: "/soap/generate",
    HEALTH: "/health"
}
```

---

### soapApi.ts

Contains API methods.

Example

- Generate SOAP Note
- Health Check

---

## components

Contains reusable UI components.

### SoapForm

Responsible for

- Conversation input
- Validation
- Sample conversation
- Clear button
- Submit button

---

### RequestViewer

Displays

- API request
- JSON request
- User conversation

---

### ResponseViewer

Displays

- Subjective
- Objective
- Assessment
- Plan

---

### Loading

Shows loading spinner while API request is processing.

---

## hooks

Contains reusable business logic.

### useSoap

Responsible for

- API call
- Loading state
- Error handling
- Response state
- Reset function

---

## pages

Contains application pages.

Current page

Home.tsx

Responsible for

- Layout
- Form
- Request display
- Response display

---

## types

Contains all TypeScript interfaces.

Example

```ts
SoapRequest

SoapResponse

ApiResponse

ApiError

UseSoapResult

SoapCard
```

---

## utils

Contains helper methods.

Examples

- JSON formatting
- String formatting
- Markdown formatting
- Response formatting

---

# Component Hierarchy

```
App
 │
 ▼
BrowserRouter
 │
 ▼
Home
 │
 ├──────── SoapForm
 │
 ├──────── RequestViewer
 │
 ├──────── Loading
 │
 └──────── ResponseViewer
```

---

# SOAP Request

```json
{
    "conversation": "Patient reports fever and cough for three days..."
}
```

---

# SOAP Response

```json
{
    "subjective": "...",
    "objective": "...",
    "assessment": "...",
    "plan": "..."
}
```

---

# Installation

## Clone Repository

```bash
git clone <repository-url>
```

---

## Navigate

```bash
cd project-name
```

---

## Install Dependencies

```bash
npm install
```

or

```bash
yarn
```

---

## Start Development Server

```bash
npm run dev
```

---

## Build

```bash
npm run build
```

---

## Preview

```bash
npm run preview
```

---

# Environment Variables

Example

```
VITE_API_BASE_URL=http://localhost:8000
```

---

# API Configuration

Example Axios configuration

```ts
const api = axios.create({
    baseURL: import.meta.env.VITE_API_BASE_URL
})
```

---

# Form Validation

Current validations include

- Required conversation
- Minimum length validation
- Submit state handling

Example

```text
Conversation is required.

Minimum 20 characters.
```

---

# Sample Conversation

The application includes a built-in sample conversation.

Example

```
Patient reports fever, cough and fatigue.

Temperature is 101°F.

No chest pain.

No known drug allergies.
```

---

# Error Handling

The application gracefully handles

- Network errors
- Backend validation errors
- API exceptions
- Empty responses
- Unexpected server failures

---

# Loading State

During API execution

- Submit button disabled
- Loading component displayed
- Prevents duplicate requests

---

# Future Enhancements

- Authentication
- User Login
- Patient History
- SOAP Note Editing
- Export to PDF
- Export to DOCX
- Save Notes
- Notes History
- Search Notes
- Voice Input
- Speech-to-Text
- Dark Theme
- AI Confidence Score
- Multi-language Support
- Rich Text Editor
- Clinical Coding (ICD-10)
- HL7/FHIR Integration

---

# Best Practices Used

- Separation of Concerns
- Component-Based Design
- Custom Hooks
- Strong TypeScript Typing
- Reusable API Layer
- Centralized Endpoints
- Form Validation
- Error Boundaries (recommended)
- Scalable Folder Structure
- Clean Code Principles

---

# Performance Optimizations

- React Hooks
- useCallback
- Lazy Rendering
- Reusable Components
- Efficient State Management
- Minimal Re-renders
- Typed API Responses

---

# Security Recommendations

- HTTPS APIs
- JWT Authentication
- Request Validation
- Input Sanitization
- Environment Variables
- CORS Configuration
- Rate Limiting
- Secure Headers

---

# Browser Support

- Google Chrome
- Microsoft Edge
- Mozilla Firefox
- Safari

---

# Development Guidelines

- Follow ESLint rules
- Use TypeScript strict mode
- Keep components reusable
- Avoid inline business logic
- Centralize API communication
- Write reusable hooks
- Keep interfaces in `types`

---

# Dependencies

- React
- React DOM
- React Router DOM
- TypeScript
- Material UI
- Axios
- React Hook Form

---

# License

This project is intended for educational and enterprise application development purposes. Add your preferred license (MIT, Apache 2.0, etc.) as needed.

---

# Author

Developed using modern React, TypeScript, and Material UI best practices for AI-powered clinical documentation workflows.