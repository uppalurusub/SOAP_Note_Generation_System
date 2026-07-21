
import streamlit as st
def render_sidebar():
    with st.sidebar:
        st.header("About")
        st.write("SOAP Note Generator")
        st.info("FastAPI + Streamlit")
