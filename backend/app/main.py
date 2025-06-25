"""In this file we create a FastAPI app and include the task router.
We also set up CORS middleware to allow requests from specific origins.
"""
from fastapi import FastAPI, Depends,Request
from fastapi.responses import JSONResponse
from fastapi.exceptions import RequestValidationError
from fastapi.middleware.cors import CORSMiddleware
from .database import engine, Base
from . import task

app = FastAPI(  
              title="Task Manager API",
              description="An API to manage tasks (CRUD)",
              docs_url="/docs",

              version="1.0.0")

@app.exception_handler(RequestValidationError)
async def validation_exception_handler(request:Request, exc: RequestValidationError):
    errors=exc.errors()
    formated_errors = [{
        "field": error["loc"][-1],
        "message": error["msg"],
    } for error in errors]
    return JSONResponse(
        status_code=422,
        content={"detail": formated_errors}
    )
    
    
    
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