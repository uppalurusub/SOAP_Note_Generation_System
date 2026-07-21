from fastapi import APIRouter
from models.soap_schema import SOAPRequest
from services.soap_service import generate_soap_note

router = APIRouter()

@router.post("/generate-soap")
def generate_soap(request: SOAPRequest):
    result = generate_soap_note(request.conversation)
    return result