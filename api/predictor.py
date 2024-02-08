import ktrain

predictor = ktrain.load_predictor('models/my_model.keras')

def prediction(text):
    result = predictor.predict(text)

    return result

# import ktrain

# predictor = ktrain.load_predictor('models/my_model.keras')

# a = predictor.predict("That's a good idea . I hear Mary and Sally often go there to play pingpong.Perhaps we can make a foursome with them .")

# print(a)