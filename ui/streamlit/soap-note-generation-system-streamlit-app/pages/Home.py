
import streamlit as st
from components.sidebar import render_sidebar
from components.request_form import render_request_form
from components.response_view import render_response
from api.soap_api import generate_soap

st.set_page_config(page_title="SOAP Note Generator",page_icon="🩺",layout="wide")
render_sidebar()
st.title("🩺 SOAP Note Generator")
st.markdown("Generate structured SOAP notes from doctor-patient conversations.")
conversation=render_request_form()

if st.button("Generate SOAP Note",type="primary"):
    if not conversation.strip():
        st.warning("Please enter a conversation.")
        st.stop()
    try:
        with st.spinner("Generating SOAP Note..."):
            result=generate_soap(conversation)
        st.subheader("SOAP Prediction")
        render_response(result)
    except Exception as e:
        st.exception(e)
