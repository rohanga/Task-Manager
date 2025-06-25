from sqlalchemy import Column, String, DateTime,Enum

from .database import Base
from datetime import datetime
import enum

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