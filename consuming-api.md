**Questions**

> Explain the difference between the request/response cycle.

A: The request/response cycle consists of a client sending a request to a server, and the server then responding to the request with the requested resource, or change to an existing resource on the server. 

> List common response codes and their groupings.

A: Common response codes are 200\(OK\), which falls into the 200's grouping. The 200's grouping consists of success codes. 404\(Not Found\), which falls into the 400's grouping. The 400's grouping consists of client error codes. Other common 400 codes are 401\(Unauthorized\), 403\(Forbidden\), and 400\(Bad request\). 304\(Not Modified\), which falls into the 300's grouping. The 300's grouping consists of redirection codes. 

> Explain the common HTTP verbs: GET, POST, PATCH, PUT, and DELETE.

A: GET is used to read, or retrieve a resource. It is used to read data, and not to change data. POST is used to create new resources. PATCH is used to modify existing capabilities, and only needs to contain the changes to the resource, not the entire resource. PUT is used to update existing capabilities, and needs to contain the new representation of the original resource. DELETE is used to delete or remove a resource.

> Explain the difference between synchronous and asynchronous code.

A: Synchronous code functions step by step. Step 2 will not start until step 1 is complete, step 3 will not start until step 2 is complete, etc. Asynchronous code functions simultaneously, so step 2 can start before step 1 is complete. 

> Explain what a JavaScript promise is.

A: A javascript promise is a method used to handle potential errors, and control the flow of your program when utilizing asynchronous code. It defines what actions are to be taken in the event of a successful request, or a failed request, at each juncture of your asynchronous code. 

> Explain why CORS exists and how we can work around it.

A: CORS allows resource sharing between sites of different domains. CORS is typically disabled to prevent malicious sites from prompting your browser to download harmful things. A proxy site can be used as a security measure to work within CORS restrictions. The proxy site acts as a middle man for your request, and gets the information first before sending it to your browser. 

> Create a fetch request in JavaScript.

A: 
```javascript
fetch('https://api.github.com/users')
    .then(res => res.json())
    .then(data => {
      console.log(data);
      let output = '';
      data.forEach(user => {
        output += `<li>${user.login}</li>`;
      });
      document.getElementById('output').innerHTML = output;
    })
    .catch(err => console.log(err));
```

**Code**
> It is time to build HackerNews from scratch! But you need easy access to an API for a list of all the stories currently there. 
* A. Go to News API and click 'Get API Key' sign up for a free API key. 
* B. Use your API key to create a fetch using this URL: `https://newsapi.org/v2/top-headlines?sources=hacker-news&apiKey=<YOUR_API_KEY_HERE>`
* C. Loop through the result data, and for each story on HackerNews, create an `<li>` tag that contains the contents of the story.

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/skeleton/2.0.4/skeleton.css">
  <style>
  #attribution {
    margin-top: 20px;
  }
  #attribution a, #attribution a:link {
    text-decoration: none;
    color: black;
  }
  </style>
  <title>Hacker News Sandbox</title>
</head>
<body>
  <div class="container">
    <h1>Hacker News Sandbox</h1>
    <div id="output"></div>
  </div>
  <div class="container" id="attribution">
    <p><a href="https://newsapi.org" target="_blank">Powered by News API</a></p>
  </div>

  <script src="app.js"></script>
</body>
</html>
```

```javascript
window.addEventListener('load', loadNewsPosts);

function loadNewsPosts() {
  let url = 'https://newsapi.org/v2/top-headlines?sources=hacker-news&apiKey=3cd5b10aab074acf9afbbc29becb11b4'

  fetch(url)
    .then(res => res.json())
    .then(data => {
      console.log(data);
      let articles = data.articles;
      let output = '';
      articles.forEach(article => {
        output += `<li><a href="${article.url}" target="_blank">${article.title}</a></li>`;
      });
      document.getElementById('output').innerHTML = output;
    })
    .catch(err => console.log(err));
}
```