import ktrain

predictor = ktrain.load_predictor('models/my_model.keras')

def prediction(text):
    result = predictor.predict(text)

    return result