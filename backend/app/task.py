from datetime import datetime
from fastapi import APIRouter, HTTPException,Depends
from .models import Task
from . import schema
from typing import List
import uuid
from sqlalchemy.orm import Session
from .database import SessionLocal

router = APIRouter()

def connect_db():
    db = SessionLocal()
    try:
        yield db
    finally:
        db.close()

@router.get("")
def get_tasks(db: Session = Depends(connect_db)):
    return db.query(Task).all()


@router.post("/add")
def create_task(task_data: schema.TaskCreate,db: Session = Depends(connect_db) ):
    new_task = Task(
        id=str(uuid.uuid4()),
        title=task_data.title,
        description=task_data.description,
        status=task_data.status,
        created_at=datetime.now(),
    )
    db.add(new_task)
    db.commit()
    db.refresh(new_task)

    return new_task


@router.put("/update/{task_id}")
def update_task( task_id: str, updated_task: schema.TaskUpdate,db: Session = Depends(connect_db)):
    task = db.query(Task).filter(Task.id == task_id).first()
    if not task:
        raise HTTPException(status_code=404, detail="Task not found")   
    
    for index, task in  updated_task.dict().items():
        setattr(task, index, task[index])
    db.commit()
    db.refresh(task)
    return task


@router.delete("/remove/{task_id}")
def delete_task( task_id: str,db: Session = Depends(connect_db)):
    db_task = db.query(Task).filter(Task.id == task_id).first()
    if not db_task:
        raise HTTPException(status_code=404, detail="Task not found")
    if db_task:
        db.delete(db_task)
        db.commit()
        return {"message": "Task deleted successfully"} 
   