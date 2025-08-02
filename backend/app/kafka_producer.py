
from aiokafka import AIOKafkaProducer
import asyncio
import json

producer = None

async def start_producer():
    global producer
    producer = AIOKafkaProducer(
        bootstrap_servers="3.27.197.180:9092"
    )
    await producer.start()

async def stop_producer():
    await producer.stop()

async def send_task_event(event: dict):
    await producer.send_and_wait(
        "task-events",
        json.dumps(event).encode("utf-8")
    )
 