import requests

#before we use User-Agent
url = "https://zhihu.com/explore"
r = requests.get(url)
print(r.status_code)
print(r.text)

#when we use User-Agent"
headers = {"User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/72.0.3626.119 Safari/537.36"}
r = requests.get(url,headers = headers)
print(r.status_code)
print(r.request.headers)
