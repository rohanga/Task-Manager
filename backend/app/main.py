from fastapi import FastAPI, Depends
from fastapi.middleware.cors import CORSMiddleware
from .database import engine, Base
from . import task

app = FastAPI()
origins = ["http://localhost:4200"]
app.add_middleware(
    "fastapi.middleware.cors.CORSMiddleware",
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

Base.metadata.create_all(bind=engine)


app.include_router(task.router, prefix="/tasks", tags=["tasks"])