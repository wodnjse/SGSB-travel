from fastapi import FastAPI , HTTPException, Path
import json

app = FastAPI()

@app.get('/data/seoul')
def get_d():
    with open('./json/seoul.json','r',encoding='utf-8') as f:
        return json.loads(f.read())

@app.get('/data/sc')
def get_d():
    with open('./json/sc.json','r',encoding='utf-8') as f:
        return json.loads(f.read())

@app.get('/data/gd')
def get_d():
    with open('./json/gd.json','r',encoding='utf-8') as f:
        return json.loads(f.read())

@app.get('/data/busan')
def get_d():
    with open('./json/busan.json','r',encoding='utf-8') as f:
        return json.loads(f.read())