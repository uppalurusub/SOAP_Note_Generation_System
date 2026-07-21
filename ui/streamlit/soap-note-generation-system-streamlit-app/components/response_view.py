
import streamlit as st

def render_response(result:dict):
    col1,col2=st.columns(2)
    with col1:
        st.subheader("Subjective")
        st.info(result.get("subjective","Not available"))
        st.subheader("Assessment")
        st.warning(result.get("assessment","Not available"))
    with col2:
        st.subheader("Objective")
        st.success(result.get("objective","Not available"))
        st.subheader("Plan")
        st.success(result.get("plan","Not available"))
