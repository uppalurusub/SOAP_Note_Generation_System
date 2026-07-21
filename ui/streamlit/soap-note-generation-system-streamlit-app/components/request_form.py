
import streamlit as st

def render_request_form():
    st.subheader("Patient Conversation")
    return st.text_area(
        "Enter the conversation",
        height=300,
        placeholder="Doctor: What brings you in today?\nPatient: I've had a persistent cough..."
    )
