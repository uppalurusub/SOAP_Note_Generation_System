from implementations.clinical_parser import split_conversation

def generate_soap(text, entities):

    sections = split_conversation(text)

    subjective = sections["subjective"]

    objective = sections["objective"]

    assessment = generate_assessment(entities)

    plan = generate_plan(entities)

    return {
        "subjective": subjective,
        "objective": objective,
        "assessment": assessment,
        "plan": plan
    }

def generate_assessment(entities):

    disease_terms = []

    for ent in entities:
        if ent["label"] in ["DISEASE", "ORG"]:
            disease_terms.append(ent["text"])

    if disease_terms:
        return f"Possible diagnosis related to {', '.join(disease_terms)}"

    return "Clinical evaluation required."

def generate_plan(entities):

    return (
        "Prescribe medications, hydration, "
        "rest and follow-up visit."
    )