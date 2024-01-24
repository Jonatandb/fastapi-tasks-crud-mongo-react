
from typing import Optional
from bson import ObjectId
from pydantic import BaseModel, Field


class PyObjectId:
    @classmethod
    def __get_validators__(cls):
        yield cls.validate

    @classmethod
    def validate(cls, v):
        if not ObjectId.is_valid(v):
            raise ValueError('Invalid ObjectId')


class Task(BaseModel):
    id: Optional[PyObjectId] = Field(alias='_id')
    title: str
    description: Optional[str] = None
    completed: bool = False

    class Config:
        orm_mode = True
        allow_population_by_field_name = True
        json_enconders = {ObjectId: str}


class UpdateTask(BaseModel):
    title: Optional[str] = None
    description: Optional[str] = None
    completed: Optional[bool] = False

    class Config:
        orm_mode = True
        allow_population_by_field_name = True
        json_enconders = {ObjectId: str}
