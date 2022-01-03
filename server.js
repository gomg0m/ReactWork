
var express = require('express');
var http = require('http');
var serveStatic = require('serve-static');      //특정 폴더의 파일들을 특정 패스로 접근할 수 있도록 열어주는 역할
var path = require('path');
const mdbConn = require('./mariaDBConn.js');

var app = express();      //express 서버 객체
const port = 5000;

//MariaDB Connection 
//MariaDBConn.js 에 정의된 getUserList 호출
//MariaDBConn.js => 1)MariaDB 접속(localhost, port:3306, pw:kitech123!, Database:'kjy') 
//                  2)'kjy'Database에서 'Select * From test' query값을 rows에 리턴
// mytext에 rows 리턴값 저장
var mytext ;
mdbConn.getUserList()
.then((rows) => {
  mytext = rows;
  console.log(rows);
})
.catch((errMsg) =>{
  console.log(errMsg);
});



//app.set('port', 9000);
 
//join은 __dirname : 현재 .js 파일의 path 와 public 을 합친다
//이렇게 경로를 세팅하면 public 폴더 안에 있는것을 곧바로 쓸 수 있게된다
app.use(serveStatic(path.join(__dirname, 'build')));
 
 
///users 를 붙이게 되면 특정 경로를 지정하는 것으로 특정 기능을 수행할떄 사용한다
//localhost:3000/users
//example , get 방식
//localhost:3000/users?name=tesstsssssss

 /*
app.use(
    function (req, res, next) {
        console.log('middle wared was called : first');
        //res.redirect('http://google.co.kr');
 
        //req 여러 정보를 얻어 올 수 있는데 그중
        //요청받은 request 정보중에서 User-Agent 정볼를 따로 분리하여 갖어올 수 있다
        var userAgent = req.header('User-Agent');
 
        //요청파라미터는 get 방식인 req.query 에 들어오게 된다
        //post 방식은 body로 들어오게된다
        //name 은 정해져있는 명칭
        var paramName = req.query.name;
 
        //응답 보내기
        res.send('<h3>response from server!!!!!!!!!!!! : ' + userAgent + '</h3>' + paramName);
 
    }

);
*/


app.get('/k', function (req, res) {
  res.send(mytext);
  //res.send({name:"kjy", comment:"Good"});
});

app.get('/db', function (req, res) {
  //console.log(req.query.korea);
  //res.send(req.query.korea);


  res.send([
    {
      id:1,
      name: '김진영',
      comment: '종아 좋아'

    },

    {
      id:2,
      name: '조자양',
      comment: '그래 그래'

    },

    {
      id:3,
      name: '김승조',
      comment: '가자 가자'
    },

    {
      id:3,
      name: '윤다예',
      comment: '횽 횽'
    }
  ]);

});


 
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})


/*
//웹서버를 app 기반으로 생성
var appServer = http.createServer(app);
appServer.listen(app.get('port'),
    function () {
        console.log('express 웹서버 실행' + app.get('port'));
    }
 
);
*/
