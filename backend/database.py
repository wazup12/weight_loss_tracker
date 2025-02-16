from sqlalchemy import create_engine, Column, Integer, String
from sqlalchemy.orm import declarative_base, sessionmaker
from sqlalchemy.sql import expression

# Create an engine
engine = create_engine('sqlite:///:memory:')

# Create a session
Session = sessionmaker(bind=engine)

# Define the base
Base = declarative_base()

class CalorieEntry(Base):
    __tablename__ = 'calorie_entry'
    id = Column(Integer, primary_key=True)
    date = Column(String)
    calories = Column(Integer)

class WeightEntry(Base):
    __tablename__ = 'weight_entry'
    id = Column(Integer, primary_key=True)
    date = Column(String)
    weight = Column(Integer)

# Create tables
metadata = Base.metadata
metadata.create_all(bind=engine)

# Create a session to add some values
session = Session()
session.add_all([
    CalorieEntry(date='2023-11-20', calories=2000),
    WeightEntry(date='2023-11-20', weight=150)
])

# Commit the changes
session.commit()
