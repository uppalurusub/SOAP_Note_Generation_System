# 🩺 SOAP Note Generation System

## Overview

The **SOAP Note Generation System** is an NLP-powered healthcare application that automatically converts doctor-patient conversations into structured **SOAP (Subjective, Objective, Assessment, Plan)** clinical notes.

The project utilizes Natural Language Processing (NLP), Named Entity Recognition (NER), text preprocessing, rule-based clinical parsing, and Large Language Models (LLMs) to generate structured clinical documentation that assists healthcare professionals in reducing manual documentation effort.

---

# Features

- Convert free-text clinical conversations into SOAP notes
- Clinical text preprocessing
- Named Entity Recognition (NER)
- Rule-based SOAP section extraction
- LLM-based SOAP generation support (FLAN-T5)
- FastAPI REST API
- Streamlit User Interface
- MLflow experiment tracking
- Modular architecture
- Easy deployment

---

# Project Architecture

```
Doctor-Patient Conversation
            │
            ▼
     Text Preprocessing
            │
            ▼
     Entity Extraction
            │
            ▼
 Clinical Conversation Parser
            │
            ▼
     SOAP Note Generator
            │
            ▼
     FastAPI REST API
            │
            ▼
      Streamlit UI
            │
            ▼
      MLflow Tracking
```


# Technology Stack

| Category | Technologies |
|-----------|-------------|
| Language | Python |
| API | FastAPI |
| UI | Streamlit |
| NLP | spaCy |
| Transformers | Hugging Face Transformers |
| LLM | Google FLAN-T5 Base |
| Deep Learning | PyTorch |
| Experiment Tracking | MLflow |
| Data Processing | Pandas |
| Logging | Loguru |

---

# Installation

## Clone Repository

```bash
git clone https://github.com/your-repository/SOAP_Note_Generation_System.git

cd SOAP_Note_Generation_System

python -m spacy download en_core_web_sm
```

---

## Create Virtual Environment

### Windows

```bash
python -m venv venv

venv\Scripts\activate
```

### Linux / Mac

```bash
python3 -m venv venv

source venv/bin/activate
```

---

## Install Dependencies

```bash
pip install -r requirements.txt
```

---

## Download spaCy Model

```bash
python -m spacy download en_core_web_sm
```

---

# Running MLflow

Start the MLflow server:

```bash
mlflow server \
--backend-store-uri sqlite:///mlflow.db \
--default-artifact-root ./mlruns \
--host 0.0.0.0 \
--port 5000
```

MLflow UI:

```
http://localhost:5000
```

---

# Running FastAPI

```bash
uvicorn app.main:app --reload
```

API Documentation

```
http://localhost:8000/docs
```

Swagger UI

```
http://localhost:8000/redoc
```

---

# Running Streamlit

```bash
streamlit run ui/app.py
```

Open

```
http://localhost:8501
```

---

# API Endpoint

## Generate SOAP Note

### POST

```
/generate-soap
```

---

## Request

```json
{
  "conversation": "Doctor: What brings you in today? Patient: I have cough and fever for three days."
}
```

---

## Response

```json
{
  "subjective": "Patient reports cough and fever for three days.",
  "objective": "Vitals and examination findings.",
  "assessment": "Possible diagnosis related to viral infection.",
  "plan": "Prescribe medications, hydration, rest and follow-up visit."
}
```

---

# Processing Pipeline

1. Receive doctor-patient conversation
2. Text preprocessing
3. Clinical entity extraction
4. Clinical conversation parsing
5. Subjective extraction
6. Objective extraction
7. Assessment generation
8. Treatment plan generation
9. Return SOAP note
10. Log inference in MLflow

---

# Components

## Text Preprocessing

- Remove unwanted characters
- Normalize whitespace
- Clean conversation
- Prepare text for NLP

---

## Entity Extraction

Uses spaCy Named Entity Recognition to identify:

- Diseases
- Organizations
- Clinical entities

---

## Clinical Parser

Splits conversation into:

- Subjective
- Objective

---

## SOAP Generator

Generates

- Subjective
- Objective
- Assessment
- Plan

---

## LLM Engine

Uses

```
google/flan-t5-base
```

to generate improved SOAP notes from clinical conversations.

---

# MLflow Tracking

Each prediction logs:

- Input conversation
- Generated SOAP note
- Source
- Endpoint
- Run timestamp

---

# Sample Workflow

```
Conversation
      │
      ▼
Preprocessing
      │
      ▼
Entity Recognition
      │
      ▼
Clinical Parsing
      │
      ▼
SOAP Generation
      │
      ▼
FastAPI Response
      │
      ▼
Streamlit Dashboard
      │
      ▼
MLflow Logging
```

---

# Current Limitations

- Rule-based assessment generation
- Static treatment plan
- Limited medical ontology
- No ICD-10 mapping
- No SNOMED CT integration
- No FHIR support
- No authentication
- No database persistence

---

# Future Enhancements

- GPT-4 / Llama integration
- Medical-specific LLMs
- SNOMED CT support
- ICD-10 coding
- FHIR interoperability
- Clinical summarization
- Drug interaction detection
- Medication recommendation
- Voice-to-SOAP transcription
- PDF report generation
- Docker deployment
- Kubernetes deployment
- Azure deployment
- AWS deployment
- Role-based authentication
- Database integration

---

# Dependencies

- FastAPI
- Uvicorn
- Streamlit
- spaCy
- Transformers
- Torch
- Sentence Transformers
- Pandas
- Loguru
- MLflow

---

# Author

SOAP Note Generation System

Healthcare NLP Project

Developed using Python, FastAPI, Streamlit, spaCy, Hugging Face Transformers, and MLflow.

---

# License

This project is intended for educational and research purposes.
