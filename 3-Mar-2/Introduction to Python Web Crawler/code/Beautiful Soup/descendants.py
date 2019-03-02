import requests
from bs4 import BeautifulSoup
import bs4

r = requests.get("https://www.baidu.com")
print(r.status_code)
r.encoding = 'utf-8'
soup = BeautifulSoup(r.text, "html.parser")
for tag in soup.body.descendants:
	if isinstance(tag, bs4.element.Tag):
		print(tag.name)

