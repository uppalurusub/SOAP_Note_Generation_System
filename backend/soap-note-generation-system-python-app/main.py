from fastapi import FastAPI
from routers.soap_router import router as soap_router

app = FastAPI(title="SOAP Note Generation")

app.include_router(soap_router)

from fastapi.middleware.cors import CORSMiddleware

app.add_middleware(
    CORSMiddleware,
    allow_origins=[
        "http://localhost:5173",
        "http://127.0.0.1:5173",
    ],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)