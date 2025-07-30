"""In this file we create a FastAPI app and include the task router.
We also set up CORS middleware to allow requests from specific origins.
"""
from fastapi import FastAPI, Depends,Request,WebSocket,WebSocketDisconnect
from fastapi.responses import JSONResponse
from fastapi.exceptions import RequestValidationError
from fastapi.middleware.cors import CORSMiddleware
from .database import engine, Base
from . import task
from kafka import KafkaProducer
from .kafka_producer import start_producer, stop_producer
import asyncio
from .kafka_consumer import consume
from .web_soc_manager import manager



app = FastAPI(  
              title="Task Manager API",
              description="An API to manage tasks (CRUD)",
              docs_url="/docs",

              version="1.0.0")



# producer = KafkaProducer(
#     bootstrap_servers='localhost:9092'
# )

# @app.on_event("startup")
# async def startup_event():
#     await start_producer()
#     asyncio.create_task(consume())

# @app.on_event("shutdown")
# async def shutdown_event():
#     await stop_producer()


# @app.websocket("/ws")
# async def websocket_endpoint(websocket: WebSocket):
#     await manager.connect(websocket)
#     try:
#         while True:
#             await websocket.receive_text()  # Optional
#     except WebSocketDisconnect:
#         manager.disconnect(websocket)


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