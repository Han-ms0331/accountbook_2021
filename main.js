const http = require('http');
const url = require('url');
const qs = require('querystring');
const db = require('dbconnect.js');

db.connect(function(err){
    if(err){
        console.log(err);
    }
});

let app = http.createServer(function(request,response){
    let _url = request.url;

    let queryData = url.parse(_url,true).querystring;
    let pathName = url.parse(_url,true).pathname;

    if(pathName === '/'){
        if(queryData.user_id === undefined){
            //로그인 페이지 로그인 완료 후 가계부 정보 페이지로 redirection 
            //로그인 시스템
            response.writeHead(302, { Location: `/info?user_id=${result.uid}` });
            response.end();
        } else{
            //로그인창으로 리다이렉션
        }
    } else if(pathName === '/info'){
        //로그인 후 가계부 정보 페이지
        if(queryData.user_id === 'admin'){
            //관리자 페이지
        } else{
            //가계부 정보 입력 페이지
            response.writeHead(302, { Location: `
            /input?user_id=${result.uid}
            panel_id=${result.pid}
            month=${result.month}
            panel_name=${result.pname}
            panel_code=${result.pcode}` });
            response.end();
        }
    } else if(pathName === '/input')
    //영수증정보, 상품정보 입력 창
    response.writeHead(200);
    response.end('success');
});

app.listen(3000);