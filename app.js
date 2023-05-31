const {readFile,writeFile}=require('fs');

readFile('./path/first.txt','utf8',(err,result)=>{
    if(err){
        console.log(err);
    }
    let first=result;

    readFile('./path/second.txt','utf8',(err,result)=>{
        if(err){
            console.log(err)
        }
        let second=result;

        writeFile('./path/Result.txt',`This is ${first} and ${second}`,(err,result)=>{
            if(err){
                console.log(err)
            }
            console.log(result)
        })
    })
   
})
