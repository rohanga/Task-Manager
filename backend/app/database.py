"""In this file we coonect postgres databases with our fast api app.
We use SQLAlchemy to connect to the database and create a session.
"""
from sqlalchemy import create_engine
from sqlalchemy.ext.declarative import declarative_base
from sqlalchemy.orm import sessionmaker
DATABASE_URL="postgresql://postgres:Rohan$1234@taskmanager.cjs8p2p9gdau.ap-southeast-2.rds.amazonaws.com:5432/taskmanager"

# DATABASE_URL = "postgresql://taskmanager_n5ov_user:1dnxfand2x92pmhNoBJ858sgKirgnirW@dpg-d1dnpbadbo4c73e3j25g-a.oregon-postgres.render.com/taskmanager_n5ov"

engine = create_engine(DATABASE_URL)
SessionLocal = sessionmaker(autocommit=False, autoflush=False, bind=engine)
Base = declarative_base()
  