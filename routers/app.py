from fastapi import APIRouter
from pydantic import BaseModel
import requests


router = APIRouter(prefix="/app", tags=["app"])

db = []


class City(BaseModel):
    name: str
    timezone: str


# @router.get('/')
# def index():
#     return {'key': 'value'}


@router.get("/cities")
def get_cities():
    results = []
    for city in db:
        r = requests.get(f"http://worldtimeapi.org/api/timezone/{city['timezone']}")
        r.raise_for_status()
        current_time = r.json()["datetime"]
        results.append(
            {
                "name": city["name"],
                "timezone": city["timezone"],
                "current_time": current_time,
            }
        )
    return results


@router.get("/cities/{city_id}")
def get_city(city_id: int):
    return db[city_id - 1]


@router.post("/cities")
def create_city(city: City):
    db.append(city.dict())
    return db[-1]


@router.delete("/cities/{city_id}")
def delete_city(city_id: int):
    db.pop(city_id - 1)
    return {}
