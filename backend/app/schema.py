from pydantic import BaseModel
from typing import Literal
from datetime import datetime

class Task(BaseModel):
    id: int
    title: str
    description: str
    status: Literal['pending', 'completed']
    created_at: datetime

    class Config:
        orm_mode = True
        from_attributes = True 

class TaskCreate(Task):
    pass   

class TaskUpdate(Task):
    pass

