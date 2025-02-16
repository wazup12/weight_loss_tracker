from flask import Flask, jsonify, request
from flask_sqlalchemy import SQLAlchemy
from sqlalchemy import create_engine, Column, Integer, String, select
from sqlalchemy.orm import declarative_base, sessionmaker
from sqlalchemy.ext.declarative import declared_attr
from sqlalchemy.sql import expression
from backend.database import Base, CalorieEntry, WeightEntry
from backend.routes import CalorieRoutes, WeightRoutes

import os

app = Flask(__name__)
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///:memory:'

engine = create_engine('sqlite:///:memory:')
Session = sessionmaker(bind=engine)

metadata = Base.metadata
metadata.create_all(bind=engine)

db = SQLAlchemy(app)

session = Session()

calorie_routes = CalorieRoutes(session)
weight_routes = WeightRoutes(session)

@app.route('/api/calorie', methods=['POST'])
def add_calorie():
    data = request.get_json()
    date = data.get('date')
    calories = data.get('calories')
    calorie_routes.add_calorie(date, calories)
    return jsonify({'message': 'Calorie added successfully'})

@app.route('/api/weight', methods=['POST'])
def add_weight():
    data = request.get_json()
    date = data.get('date')
    weight = data.get('weight')
    weight_routes.add_weight(date, weight)
    return jsonify({'message': 'Weight added successfully'})

@app.route('/api/data', methods=['GET'])
def get_data():
    session = Session()
    calories = session.query(CalorieEntry).all()
    weights = session.query(WeightEntry).all()
    data = []
    for calorie in calories:
        data.append(f"Calorie: {calorie.date} - {calorie.calories}")
    for weight in weights:
        data.append(f"Weight: {weight.date} - {weight.weight}")
    return jsonify(data)

if __name__ == '__main__':
    app.run(debug=True)
