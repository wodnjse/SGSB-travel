from fastapi import FastAPI , HTTPException, Path
import json

app = FastAPI()

@app.get('/data/{city}')
def get_d(city):
    with open('./json/%s.json' % city, 'r', encoding='utf-8') as f:
        return json.loads(f.read())
