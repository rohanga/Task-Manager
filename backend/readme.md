# 📚 Project Setup: Amazon RDS PostgreSQL + Alembic + FastAPI

---

## ✅ 1. Create Amazon RDS PostgreSQL Databases

- Create **Development**, **Testing**, and **Production** PostgreSQL databases using the AWS Free Tier.
- In your RDS **security group**, add an **inbound rule** with your local machine’s IP address to allow connections.

---

## ✅ 2. Add Database URLs

- Copy each database’s **connection URL** from the AWS RDS console.
- Paste the URL(s) into your `databases.py` file.

**Example `databases.py`**:

```python
from sqlalchemy import create_engine
from sqlalchemy.ext.declarative import declarative_base
from sqlalchemy.orm import sessionmaker

DATABASE_URL = "postgresql://<username>:<password>@<host>:<port>/<database_name>"

engine = create_engine(DATABASE_URL)
SessionLocal = sessionmaker(autocommit=False, autoflush=False, bind=engine)

Base = declarative_base()
```




---

## ✅ 3. Install Alembic

Install Alembic in your FastAPI project:

```bash
pip install alembic
```
## ✅ 4. Initialize Alembic

Run this command to create the Alembic folder structure:

This creates:

migrations/env.py

alembic.ini

```bash
alembic init migrations
```
## ✅ 5. Edit alembic.ini with databases url 

## ✅ 6. Create Migration

Run the following to generate a migration for your tables:


```bash
alembic revision --autogenerate -m "create tasks table"

```

## ✅ 6. Apply Migrations 

Apply the migration to create the tables in your database:



```bash
alembic upgrade head


```

### If You have pdadmin install then you will see table is created or not or use psql cmd line