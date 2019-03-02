import requests

data = {
	"name": "Tom",
	"age" : "19" 
}

r = requests.get("https://httpbin.org/get", params=data)
print(r.status_code)
print(r.text)
