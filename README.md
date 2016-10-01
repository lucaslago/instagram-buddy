
# Motivation
On 1st of June **Instagram** changed its policy so in order to search for a hashtag as a third
party provider the entry of an Instagram login/pass is required. 
This policy change broke a few websites that used to consume that API directly from the client (browser).

Since it's been a while since i've been wanting to do some web scraping using NodeJS, I decided to create this small API in order
to obtain hashtags from Instagram's official web site without requiring a login/pass from the client side.

[More info about the policy changes here](https://www.google.com.br/url?sa=t&rct=j&q=&esrc=s&source=web&cd=7&ved=0ahUKEwiys9uAnrHPAhVClpAKHSJuAEMQFghAMAY&url=https%3A%2F%2Fwww.dialogfeed.com%2Fupdate-instagram-api-changes-restrictions-solutions%2F&usg=AFQjCNEGK1LO7MX6y0zCPrjevs-5rQSYPw&cad=rja)

# Running the API
1. Clone the project
1. ```npm install```
1. ```npm start```

# API Reference
```/GET scrapes/{hashtag}```
* Replace {hashtag} with the hashtag you want to search for.
E.g: 
```curl
curl -X GET "http://localhost:8080/scrape/arroz"
```

