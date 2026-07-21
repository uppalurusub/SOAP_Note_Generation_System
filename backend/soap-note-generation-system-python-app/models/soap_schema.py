from pydantic import BaseModel

class SOAPRequest(BaseModel):
    conversation: str

class SOAPResponse(BaseModel):
    subjective: str
    objective: str
    assessment: str
    plan: str