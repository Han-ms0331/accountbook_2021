const http = require('http');
const url = require('url');
const qs = require('querystring');
const db = require('./dbconnect.js');
const html_book = require('./html/html_book.js');
const html_recipt = require('./html/html_recipt.js');
const html_item = require('./html/html_item.js');
const main_table = require('./db/main_table.js');
//let querry_insert = require('./db/query_insert');
//const query_insert = require('./db/query_insert');

let record = main_table;

let input_page_head = `
<!DOCTYPE html>
<html>
    <head>
            <style>
                .input{
                    display:flex;
                }
                .book ,.item ,.receipt{
                    margin: 0px 80px;
                }
                input{
                    margin: 5px 0px;
                }
            </style>
            <meta charset="utf-8">
        </head>
    <body>
        <form action="http://localhost:3000/input_process" method="post">
            <div class='input'>
`

let input_page_tail=`
            </div>
            <input type='submit' value="입력완료" />
        </form>
    </body>
</html>
`
let input_page = input_page_head+html_book+html_recipt+html_item+input_page_tail;

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

    } else if(pathName === '/input'){
        //root page:   입력 페이지
        response.writeHead(200);
        response.end(input_page);
    
    } else if(pathName === '/input_process'){
        //가계부 입력정보 처리 페이지
        let body  ='';
        let book_info = {
            panel_id: '',
        };

        request.on('data',(data)=>{
            body = body + data;
        });
        request.on('end',()=>{
            let post = qs.parse(body);
            console.log(post.purchase_type);
            db.query(`INSERT INTO main VALUES (
                2,
                '한명수',
                12,
                'BS',
                '${post.panel_id}',
                '${post.panel_name}',
                '${post.panel_code}',
                '${post.purchase_type}',
                1,
                '2021-04-13',
                5,
                14,
                null,
                null,
                null,
                null,
                null,
                '남가네숯불갈비',
                'M11113',
                '부산',
                null,
                '신라면',
                '2020_0054323',
                null,
                null,
                null,
                null,
                '신용카드',
                20000,
                null,
                2,
                null,
                null,
                null,
                0,
                null,
                null,
                null,
                10000,
                20000,
                null,
                null,
                1,
                '조경란',
                null,
                '자가용',
                '자가용',
                '1111',
                '14:00:00')
                `,(err,results)=>{
                    if(err){
                        console.log(err);
                    }
                    response.writeHead(302, {Location:`/`});
                    response.end('success');
                });
        });
        
        
    }else{
        response.writeHead(404);
        response.end('Not Found');
    }
});

app.listen(3000);