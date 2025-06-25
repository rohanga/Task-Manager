"""
In this file we define the task router for handling CRUD operations on tasks.
It includes endpoints for creating, reading, updating, and deleting tasks.
"""
import uuid
from datetime import datetime
from fastapi import APIRouter, HTTPException,Depends
from sqlalchemy.orm import Session
from . import schema
from .database import SessionLocal
from .models import Task

router = APIRouter()

def connect_db():
    db = SessionLocal()
    try:
        yield db
    finally:
        db.close()

@router.get("/tasks")
def get_tasks(db: Session = Depends(connect_db)):
    print("Fetching all tasks")
    return db.query(Task).all()


@router.post("/task")
def create_task(task_data: schema.TaskCreate,db: Session = Depends(connect_db) ):
    print("Creating a new task:", task_data)

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


@router.put("/task/{task_id}")
def update_task( task_id: str, updated_task: schema.TaskUpdate,db: Session = Depends(connect_db)):
    task = db.query(Task).filter(Task.id == task_id).first()
    if not task:
        raise HTTPException(status_code=404, detail="Task not found")   
    
    for field, value in  updated_task.dict().items():
        setattr(task, field, value)
    db.commit()
    db.refresh(task)
    return task


@router.delete("/task/{task_id}")
def delete_task( task_id: str,db: Session = Depends(connect_db)):
    db_task = db.query(Task).filter(Task.id == task_id).first()
    if not db_task:
        raise HTTPException(status_code=404, detail="Task not found")
    if db_task:
        db.delete(db_task)
        db.commit()
        return {"message": "Task deleted successfully"} 
   