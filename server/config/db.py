from sqlalchemy import create_engine, MetaData
#from sqlalchemy.ext.declarative import declarative_base
from sqlalchemy.orm import sessionmaker
import sqlalchemy
import databases

################################

#synchronous

# SQLALCHEMY_DATABASE_URL = "mysql+mysqlconnector://root:projectDB@localhost:3306/db"

# engine = create_engine(
#     SQLALCHEMY_DATABASE_URL
# )

# SessionLocal = sessionmaker(autocommit=False, autoflush=False, bind=engine)

# Base = declarative_base()

#########################################################

DATABASE_URL = "mysql+mysqlconnector://root:projectDB@localhost:3306/db"

database = databases.Database(DATABASE_URL)


metadata = sqlalchemy.MetaData()

engine = create_engine(
    DATABASE_URL
)
#metadata.create_all(engine)
#meta = MetaData()
#conn = engine.connect()