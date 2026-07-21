from implementations.preprocess import preprocess_text
from implementations.entity_extractor import extract_entities
from implementations.soap_generator import generate_soap
import mlflow
from datetime import datetime


def generate_soap_note(conversation: str):

    mlflow.set_tracking_uri(
        "http://localhost:5000"
    )

    mlflow.set_experiment(
        "Soap_Note_Generation_System_Inference"
    )

    with mlflow.start_run(
        run_name=
        f"Soap_Note_Generation_{datetime.now().strftime('%Y%m%d_%H%M%S')}"
    ):

        cleaned_text = preprocess_text(conversation)

        entities = extract_entities(cleaned_text)

        soap_note = generate_soap(cleaned_text, entities)

        mlflow.log_param(
            "input_text",
            conversation
        )

        mlflow.log_param(
            "predicted_soap",
            soap_note
        )

        """
        mlflow.log_metric(
            "confidence",
            float(
                result["confidence"]
            )
        )
        """

        mlflow.set_tag(
            "source",
            "FastAPI"
        )

        mlflow.set_tag(
            "endpoint",
            "/generate-soap"
        )

    return soap_note