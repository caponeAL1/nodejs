var files=require('fs');
files.writeFile('Demo.txt','NodeJS is asynchronous. Supports callbacks',function(err,data){
    if(err !=undefined){
    console.log(err.message);
    console.log(err.code);
    }else{
        console.log('write'+data+'to the file....');
    }
})
files.readFile('Demo.txt','utf-8',function(err,data){
    if(err !=undefined){
    console.log(err.message);
    console.log(err.code);
    }else{
        console.log(data);
    }
})