from pydantic import BaseModel
from typing import Literal
from datetime import datetime


class TaskBase(BaseModel):
    title: str
    description: str
    status: Literal['pending', 'completed']


class TaskCreate(TaskBase):
    pass   

class TaskUpdate(TaskBase):
    pass

class Task(TaskBase):
    id:int
    created_at: datetime

    class Config:
        orm_mode = True
        from_attributes = True 
