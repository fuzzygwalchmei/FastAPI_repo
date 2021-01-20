from fastapi import FastAPI
from datetime import datetime

app = FastAPI()

#import saved ML model and vector
import pickle
nb_classifier = pickle.load(open('./Count_model.sav', 'rb'))
vector = pickle.load(open('./count_vector.sav', 'rb'))

@app.get('/')
def get(text: str):    
    text = text.lower().replace('[^a-zA-Z\s\@]', '')
    vectored_new = vector.transform([text])
    pred = nb_classifier.predict(vectored_new)
    p_prob = nb_classifier.predict_proba(vectored_new)[0]

    return {'prediction':str(pred[0]),'probability': f"{max(p_prob)*100:.2f}%"}

@app.get('/time')
def time():
    
    return datetime.now().strftime('%H:%M:%S')
