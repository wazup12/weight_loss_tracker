from flask import Blueprint

class CalorieRoutes(Blueprint):
    def __init__(self, session):
        self.session = session

    def add_calorie(self, date, calories):
        new_calorie = CalorieEntry(date=date, calories=calories)
        self.session.add(new_calorie)
        self.session.commit()

class WeightRoutes(Blueprint):
    def __init__(self, session):
        self.session = session

    def add_weight(self, date, weight):
        new_weight = WeightEntry(date=date, weight=weight)
        self.session.add(new_weight)
        self.session.commit()
