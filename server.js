var express = require('express')
    , bodyParser = require('body-parser');

var app = express();

const users = [
    {
        username: 'usama',
        password: 'QQQwww111',
        userdata: { name: 'Ivan', surname: 'Ivamov' },
        role: 'Adviser'
    },

];

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
// Add headers
app.use(function (req, res, next) {

    // Website you wish to allow to connect
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');

    // Request methods you wish to allow
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

    // Request headers you wish to allow
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');

    // Set to true if you need the website to include cookies in the requests sent
    // to the API (e.g. in case you use sessions)
    res.setHeader('Access-Control-Allow-Credentials', true);

    // Pass to next layer of middleware
    next();
});

app.post('/', function(request, response){
    console.log(request.body);

    /* var resData = {};

    resData.body = {
        login: request.body.username,
        name: 'Ivan',
        surname: 'Ivamov',
        isLogined: true,
        role: 'Adviser',
    } */

    var reqUsername = request.body.username,
        reqPassword = request.body.password;

    /* users.forEach(function (user, index) {
        if(user.username == reqUsername && user.password == reqPassword) {
            resData = {
                userdata: { name: user.userdata.name, surname: user.userdata.surname },
                isLogined: true,
                role: user.role
            }
        } else {
            resData = {
                isLogined: false
            }
        }
    });

    resData.body = {
        role: "Advisor",
    }; */

    response.send({
        login: request.body.username,
        name: 'Ivan',
        surname: 'Ivamov',
        isLogined: true,
        role: 'Client',
    });
});

app.listen(1337);
