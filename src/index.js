const http = require('http');
const fs = require('fs');
const users = require('./users.json');



const server = http.createServer(function (req, res) {
  let file

  if(req.url.indexOf('.css') != -1){ //req.url has the pathname, check if it conatins '.css'

      fs.readFile('./css/styles.css', function (err, data) {
        if (err) console.log(err);
        res.writeHead(200, {'Content-Type': 'text/css'});
        res.write(data);
        res.end();
      });

    } 
else{
  fs.readFile('./dist/index.html', function (err, data) {
    if (err) console.log(err);
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write(data);
    res.end();
  });

}

  /*******GETS THE FORM DATA************/
  req.on('data', (data) => {
    var arr = decodeURIComponent(data).replace(/\+/g, ' ').replace('firstname=', '')
      .replace('lastname=', '').split('&');

    let user = { fname: arr[0], lname: arr[1] };

    users.push(user);

    fs.writeFile('src/users.json', JSON.stringify(users, null, 2), (err) => {

      if (err) throw err;

      console.log("Done writing");
    });

  });
}).listen(3000, () => { console.log('Server running on 3000'); });




