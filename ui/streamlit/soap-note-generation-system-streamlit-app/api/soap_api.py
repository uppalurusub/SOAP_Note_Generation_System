
import requests
API_URL="http://localhost:8000/generate-soap"

def generate_soap(conversation:str):
    payload={"conversation":conversation}
    r=requests.post(API_URL,json=payload,timeout=120)
    r.raise_for_status()
    return r.json()
