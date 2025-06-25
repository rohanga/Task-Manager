"""In this file we create a FastAPI app and include the task router.
We also set up CORS middleware to allow requests from specific origins.
"""
from fastapi import FastAPI, Depends
from fastapi.middleware.cors import CORSMiddleware
from .database import engine, Base
from . import task

app = FastAPI(  
              title="Task Manager API",
              description="An API to manage tasks (CRUD)",
              docs_url="/docs",         # Swagger UI

              version="1.0.0")
origins = ["http://localhost:4200","https://task-manager-ejbm.onrender.com"]
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"], 
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

Base.metadata.create_all(bind=engine)


app.include_router(task.router, tags=["tasks"])