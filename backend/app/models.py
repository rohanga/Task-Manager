"""Task Manager Backend - SQLAlchemy Models
This module defines the SQLAlchemy models for the Task Manager application.
It includes the Task model with fields for task attributes and status.
"""
from datetime import datetime
import enum
from sqlalchemy import Column, String, DateTime,Enum
from .database import Base

class TaskStatus(enum.Enum):
    pending = "pending"
    completed = "completed"

class Task(Base):
    __tablename__ = "tasks"

    id = Column(String, primary_key=True, index=True)
    title = Column(String, index=True)
    description = Column(String, index=True)
    status = Column(Enum(TaskStatus), default=TaskStatus.pending)
    created_at = Column(DateTime, default=datetime.utcnow)

    def __repr__(self):
        return f"<Task(id={self.id}, title={self.title}, status={self.status})>"