
import requests
from bs4 import BeautifulSoup as bs
import pandas as pd
import time
import json
import numpy as np

headers = {'User-Agent' : 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/103.0.0.0 Safari/537.36',
           'Accept-Language':'ko-KR,ko'}

url = 'https://www.google.com/travel/things-to-do/see-all?dest_mid=%2Fm%2F01vsb_&dest_state_type=sattd&dest_src=yts&q=%EA%B2%BD%EA%B8%B0%EB%8F%84&ved=0CAAQ8IAIahcKEwigx7_EgsT7AhUAAAAAHQAAAAAQCQ'

r = requests.get(url, headers = headers)
r.status_code

soup = bs(r.text, 'html.parser')
soup

datas = []
for i in range(1,99):
  ja = soup.select_one('#yDmH0d > c-wiz.zQTmif.SSPGKf > div > div.lteUWc > div > c-wiz > div > div > div.mNY2uf.zpbwad > div:nth-child(3) > c-wiz > div > div.XzK3Bf > div > div.kQb6Eb > div:nth-child('+str(i)+') > div > div > div.Ld2paf > div.GwjAi > div.rbj0Ud.AdWm1c > div')
  st = soup.select_one('#yDmH0d > c-wiz.zQTmif.SSPGKf > div > div.lteUWc > div > c-wiz > div > div > div.mNY2uf.zpbwad > div:nth-child(3) > c-wiz > div > div.XzK3Bf > div > div.kQb6Eb > div:nth-child('+str(i)+') > div > div > div.Ld2paf > div.GwjAi > div.tP34jb > span > span > span.KFi5wf.lA0BZ')
  if ja == None or st == None:
    continue
  else:
    data = {
    '명소':ja.text,
    '별점':st.text
    }
  datas.append(data)

with open('./json/gd.json','w',encoding='utf-8') as f:
  f.write(json.dumps(datas,ensure_ascii=False))


# spot_info = soup.find_all('div', class_='skFvHc YmWhbc')
# spot_info

# rate_ls = soup.find_all('span', class_='KFi5wf lA0BZ')
# rate_ls

# spot_name = []
# rate = []

# a = 0
# for i in spot_info:
#   if i.text == '명동':
#     break
#   a+=1
# spot_info.pop(3)
# spot_info

# for i in spot_info:
#   spot_name.append(i.text)
# spot_name

# for i in rate_ls :
#   rate.append(i.text)
# rate
  