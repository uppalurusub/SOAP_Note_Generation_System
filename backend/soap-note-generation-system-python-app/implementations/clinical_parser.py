def split_conversation(text: str):

    subjective_keywords = [
        "pain",
        "fever",
        "cough",
        "fatigue"
    ]

    objective_keywords = [
        "temperature",
        "bp",
        "pulse",
        "oxygen"
    ]

    subjective = []
    objective = []

    for sentence in text.split("."):

        if any(word in sentence for word in subjective_keywords):
            subjective.append(sentence)

        if any(word in sentence for word in objective_keywords):
            objective.append(sentence)

    return {
        "subjective": ". ".join(subjective),
        "objective": ". ".join(objective)
    }