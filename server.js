var express = require('express');
var app = express();

app.use(express.static(__dirname + '/public'));

var listEMP = [{
    name:'Sri',
    city:'Ongole',
    education:'Advance Diploma',
    country:'India'
},{
    name:'Balaram',
    city:'Milton',
    education:'Advance PhD',
    country:'Canada'
}]

app.get('/emp',function(req,res){
   res.json(listEMP);
});

var ip = process.env.OPENSHIFT_NODEJS_IP || '127.0.0.1';

var port = process.env.OPENSHIFT_NODEJS_PORT || 8080;

app.listen(port, ip);

console.log("Application running on "+ip+':'+port);
