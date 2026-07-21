from transformers import pipeline

generator = pipeline(
    "text2text-generation",
    model="google/flan-t5-base"
)

def generate_llm_soap(conversation: str):

    prompt = f"""
    Convert the following clinical conversation
    into SOAP format:

    {conversation}
    """

    result = generator(
        prompt,
        max_length=256
    )

    return result[0]["generated_text"]