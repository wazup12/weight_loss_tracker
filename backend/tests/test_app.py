import unittest
import requests
from backend.app import app

class TestApp(unittest.TestCase):

    def test_add_calorie(self):
        url = '/api/calorie'
        headers = {'Content-Type': 'application/json'}
        data = {'date': '2023-11-20', 'calories': 2000}
        response = requests.post(url, headers=headers, json=data)
        self.assertEqual(response.status_code, 200)

    def test_add_weight(self):
        url = '/api/weight'
        headers = {'Content-Type': 'application/json'}
        data = {'date': '2023-11-20', 'weight': 150}
        response = requests.post(url, headers=headers, json=data)
        self.assertEqual(response.status_code, 200)
    
    def test_get_data(self):
        url = '/api/data'
        response = requests.get(url)
        self.assertEqual(response.status_code, 200)

if __name__ == '__main__':
    unittest.main()
