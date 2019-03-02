import requests

url = "https://github.com/favicon.ico"
r = requests.get(url)
print(r.status_code)

path = "C://Users//Administrator//Desktop//favicon.ico"
with open(path,"wb") as f:
	f.write(r.content)
