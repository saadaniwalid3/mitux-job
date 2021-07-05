var express = require('express'),
  app = express(),
  port = 1234;

app.use(express.static('./src'));
app.get('/*', function(req, res) {
  res.sendFile('index.html', {root: 'src/'}
);
});
app.listen(process.env.PORT || port);
