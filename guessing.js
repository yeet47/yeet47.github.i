e = require('express');

s = e()

function genPage(message) {
  html = '<html>'
  html += '<head></head>'
  html += '<body>'
  html += '<h1> ' + message + ' </h1>'
  html += '<form action = "/guess">'
  html += '<input name = "guess" placeholder="Type Guess">'
  html += '<input type = "submit" placeholder="Guess">'
  html += '</form>'
  html += '</body>'
  html += '</html>'
  return html
}

s.get('/',function (request, response) {
  page = genPage('Guess Number')
  response.send(page)
})

sN = Math.ceil(Math.random()*100)
s.get('/guess', function(request, response) {
  guess = request.query.guess
  if (guess > sN) {
    page = genPage('Too High')
  }
  else if (guess < sN) {
    page = genPage('Too Low')
  } else {
    page = genPage('Correct')
    sN = Math.ceil(Math.random()*100)
  }
  response.send(page)
})

s.listen( 4567 )
