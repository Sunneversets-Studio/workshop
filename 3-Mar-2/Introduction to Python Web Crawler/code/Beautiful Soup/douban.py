import requests
from bs4 import BeautifulSoup
import bs4
import re

def getHTML(url):
	try:
		r = requests.get(url)
		r.raise_for_status()
		r.encoding = r.apparent_encoding
		return r.text
	except:
		return ''

def getInfo(text):
	title = []
	soup = BeautifulSoup(text,"html.parser")
	for a in soup.find_all(name="a",href=re.compile("https://movie.douban.com/subject/")):
		if isinstance(a.span,bs4.element.Tag):
			title.append(a.span.string)
	return title

def show(title):
	for i, t in enumerate(title):
		print("No.",i+1,"is:",t)

def main():
	url = "https://movie.douban.com/top250?start=0&filter="
	HTML = getHTML(url)
	if HTML=="":
		print("cannot get HTML")
		return
	info = getInfo(HTML)
	show(info)

if __name__ == "__main__":
	main()