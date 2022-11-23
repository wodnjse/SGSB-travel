import requests
from bs4 import BeautifulSoup as bs
import pandas as pd
import time
import json
import numpy as np

headers = {'User-Agent' : 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/103.0.0.0 Safari/537.36',
           'Accept-Language':'ko-KR,ko'}

url = 'https://www.diningcode.com/search.dc?query=%EA%B2%BD%EB%B3%B5%EA%B6%81'

r = requests.get(url, headers = headers)

soup = bs(r.text, 'html.parser')

print(soup)

