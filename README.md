# 🩺 SOAP Note Generation System

An AI-powered **SOAP Note Generation System** that automatically converts clinician–patient conversations into structured **SOAP (Subjective, Objective, Assessment, Plan)** clinical notes.

The solution consists of:

- **Backend:** FastAPI + Python + NLP + MLflow
- **Frontend:** React + TypeScript + Vite + Material UI
- **Experiment Tracking:** MLflow

The application helps healthcare providers reduce documentation time while producing standardized clinical notes from free-text conversations.

---

# Architecture

```
                +----------------------+
                |   React Frontend     |
                |  (Vite + TypeScript) |
                +----------+-----------+
                           |
                    REST API (HTTP)
                           |
                           ▼
              +------------------------+
              |     FastAPI Backend    |
              +-----------+------------+
                          |
        +-----------------+------------------+
        |                 |                  |
        ▼                 ▼                  ▼
 Preprocessing      Entity Extraction   SOAP Generator
        |                 |                  |
        +-----------------+------------------+
                          |
                          ▼
                  Structured SOAP Note
                          |
                          ▼
                     MLflow Tracking
```

---

# Features

- Automatic SOAP note generation
- Clinical conversation preprocessing
- Medical entity extraction
- Subjective section generation
- Objective section generation
- Assessment generation
- Treatment plan generation
- REST API
- Interactive React UI
- MLflow experiment tracking
- Modular architecture
- Production-ready FastAPI design

---

# Project Structure

```
SOAP_Note_Generation_System/

│
├── backend/
│   └── soap-note-generation-system-python-app/
│       ├── implementations/
│       ├── models/
│       ├── routers/
│       ├── services/
│       ├── utils/
│       └── main.py
│
├── ui/
│   └── reactjs/
│       └── soap-note-generation-system-react-app/
│           ├── src/
│           ├── public/
│           ├── package.json
│           └── vite.config.ts
│
└── requirements.txt
```

---

# Technology Stack

## Backend

- Python 3.11+
- FastAPI
- Pydantic
- MLflow
- Uvicorn

### NLP Components

- Text preprocessing
- Clinical entity extraction
- SOAP note generation
- Clinical summarization

---

## Frontend

- React 19
- TypeScript
- Vite
- Material UI
- Axios
- React Hook Form
- React Router

---

# Backend Modules

## Router

```
routers/
    soap_router.py
```

Exposes REST endpoints.

---

## Service Layer

```
services/
    soap_service.py
```

Responsible for

- preprocessing
- entity extraction
- SOAP generation
- MLflow logging

---

## Implementations

```
implementations/

preprocess.py
clinical_parser.py
entity_extractor.py
soap_generator.py
summarizer.py
llm_engine.py
```

Each module performs an independent NLP task.

---

## Models

```
models/

soap_schema.py
```

Contains

- SOAPRequest
- SOAPResponse

---

# Frontend Modules

```
src/

api/
components/
pages/
types/
utils/
```

Main responsibilities

- Collect conversation
- Call FastAPI endpoint
- Display generated SOAP note
- Handle errors
- Responsive UI

---

# API Endpoint

## Generate SOAP Note

```
POST /generate-soap
```

### Request

```json
{
  "conversation": "Patient reports headache for three days with nausea and mild fever."
}
```

---

### Response

```json
{
  "subjective": "...",
  "objective": "...",
  "assessment": "...",
  "plan": "..."
}
```

---

# Backend Installation

## Clone repository

```bash
git clone <repository-url>
```

---

## Create virtual environment

Windows

```bash
python -m venv venv

venv\Scripts\activate
```

Linux / Mac

```bash
python3 -m venv venv

source venv/bin/activate
```

---

## Install dependencies

```bash
pip install -r requirements.txt
```

---

## Start MLflow

```bash
mlflow ui
```

or

```bash
mlflow server \
--backend-store-uri sqlite:///mlflow.db \
--default-artifact-root ./mlruns \
--host 0.0.0.0 \
--port 5000
```

---

## Run FastAPI

```bash
uvicorn main:app --reload
```

Server

```
http://localhost:8000
```

Swagger

```
http://localhost:8000/docs
```

---

# Frontend Installation

Navigate to frontend

```bash
cd ui/reactjs/soap-note-generation-system-react-app
```

Install packages

```bash
npm install
```

Run application

```bash
npm run dev
```

Application

```
http://localhost:5173
```

---

# Application Workflow

```
Doctor-Patient Conversation

        │

        ▼

Text Cleaning

        │

        ▼

Clinical Entity Extraction

        │

        ▼

SOAP Generation

        │

        ▼

Subjective

Objective

Assessment

Plan

        │

        ▼

Display in React UI

        │

        ▼

Log to MLflow
```

---

# MLflow Tracking

The backend tracks inference information including

- Input conversation
- Generated SOAP note
- Endpoint information
- Source information
- Experiment runs

Experiment Name

```
Soap_Note_Generation_System_Inference
```

---

# Example Workflow

Input

```
Doctor:
What brings you in today?

Patient:
I've had chest pain for two days. It worsens when climbing stairs and I'm feeling short of breath.
```

Output

```
Subjective
------------
Chest pain for two days with exertional dyspnea.

Objective
-----------
History suggests exertional chest discomfort.

Assessment
------------
Possible angina. Further cardiac evaluation recommended.

Plan
------
ECG
Cardiac enzymes
Cardiology consultation
Medication review
```

---

# Future Enhancements

- Large Language Model integration
- GPT-powered SOAP generation
- SNOMED CT mapping
- ICD-10 coding
- FHIR integration
- Electronic Health Record (EHR) integration
- Voice-to-text transcription
- Multi-language support
- Authentication & authorization
- Docker deployment
- Kubernetes deployment
- Azure/AWS deployment
- CI/CD pipelines
- Role-based access control
- Audit logging

---

# Testing

Backend

```bash
pytest
```

Frontend

```bash
npm test
```

---

# Production Deployment

Backend

- FastAPI
- Gunicorn
- Nginx

Frontend

- React Production Build
- Nginx
- Azure Static Web Apps
- AWS S3 + CloudFront

Containerization

- Docker
- Docker Compose
- Kubernetes

---

# Security Considerations

- HTTPS
- CORS configuration
- Input validation
- Authentication
- Authorization
- HIPAA-compliant deployment
- Secure API communication
- Audit logging

---

# Use Cases

- Hospitals
- Clinics
- Telemedicine
- Primary Care
- Emergency Care
- Clinical Documentation
- Medical Scribes
- Healthcare AI Platforms

---

# License

This project is intended for educational and research purposes.

---

# Author

SOAP Note Generation System

Built using

- FastAPI
- React
- TypeScript
- Material UI
- MLflow
- Python