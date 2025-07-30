from aiokafka import AIOKafkaConsumer
import asyncio
import json
from .web_soc_manager import manager

async def consume():
    consumer = AIOKafkaConsumer(
        "task-events",
        bootstrap_servers="localhost:9092",
        group_id="task-group"
    )
    await consumer.start()
    try:
        async for msg in consumer:
            event = json.loads(msg.value.decode("utf-8"))
            await manager.broadcast(json.dumps(event))
    finally:
        await consumer.stop()
 