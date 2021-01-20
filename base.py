from fastapi import FastAPI
from routers import app, second


fast_app = FastAPI()

fast_app.include_router(app.router)
fast_app.include_router(second.router)


@fast_app.get("/")
def home():
    return {"text": "Welcome to the API home page."}
