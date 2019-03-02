from bs4 import BeautifulSoup
soup = BeautifulSoup("<p>data</p>", "html.parser")
print(soup.prettify())
