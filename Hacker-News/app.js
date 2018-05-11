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