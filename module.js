/*
var os = require('os')

//info about current user
const user = os.userInfo()

//method returns the system uptime

console.log('the system uptime is ' + os.uptime() + " sec.");
*/
//var path = require('path')
//console.log(path.sep);
/*
sync approach
const{readFileSync, writeFileSync} = require('fs')

const first = readFileSync('./content/first.txt','utf-8')
const second = readFileSync('./content/second.txt','utf-8')

writeFileSync('./content/result-sync.txt',`here is the result ${first,second}`, {flag:'a'})
*/
/*
async approach
const { log } = require('console');
const{readFile, writeFile} = require('fs')

readFile('./content/first.txt','utf-8',(err,result)=>{
    if(err){
        console.log('err')
        return
    }
    const first = result;
    readFile('./content/second.txt','utf-8',(err,result)=>{
        if(err){
            console.log('err')
            return
        }
        const second = result
        writeFile('./content/result-async.txt','here is the result ${first,second}'
        ,(err,result)=>{
            if(err){
                console.log('err')
                return
            }
        console.log(result)
        }
            )
    })
})
*/
