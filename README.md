# EchoServer

Standalone simple server to respond to different HTTP methods, so you can for example test making requests.

## API
It will respond to any method and the body will consist of information you sent in.
By default it sends back JSON.

### Query params
  
#### delay=[integer]

Delays the response by [integer] seconds

#### status=[integer]

Sends back a status (ie error,404,500) instead of a normal response.

## Content

```/api/content/``` is a sample content API

```/api/content/countries/``` lists some countries and their capital


## Config
Defalut configuration for deployment

```
module.exports = {
    "port": 3333,
    "mountpath": "echoserver" // set to '' if '/'
}
```
will make api available at `http://localhost:3333/echoserver/api`


## Example

POST `/api/any/thing/you?want=including&query=and&body`  
will result in:

```
{
  "method": "POST",
  "body": {
    "text": "You can send body",
    "number": 1223123
  },
  "url": "/any/thing/you?want=including&query=and&body",
  "baseUrl": "/echoserver/api",
  "query": {
    "want": "including",
    "query": "and",
    "body": ""
  },
  "youSentHeaders": {
    "0": "[object Object]",
    "accept": "application/json, text/plain, */*",
    "content-type": "application/json;charset=utf-8",
    "user-agent": "axios/0.18.0",
    "content-length": "45",
    "host": "localhost:3333",
    "connection": "close"
  },
  "rawHeaders": [
    "0",
    "[object Object]",
    "Accept",
    "application/json, text/plain, */*",
    "Content-Type",
    "application/json;charset=utf-8",
    "User-Agent",
    "axios/0.18.0",
    "Content-Length",
    "45",
    "Host",
    "localhost:3333",
    "Connection",
    "close"
  ],
  "processingTimestamp": 1556260512916,
  "yourLuckyNumber": 26
}
```
PUT `/api/any/thing/you?delay=5&status=500&want=including&query=and&body` 

will result in 5s delay and then 500 error (Internal Error)