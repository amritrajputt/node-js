// const { error } = require("console")
const { log, error } = require("console")
const { writeFileSync } = require("fs")
const fileHandling =  require ("fs")


// writing in file in synchronous way 

// fileHandling.writeFileSync("newfile.txt","this file is created by fs module in synchronous way") 


// // writing in file in asynchronous way

fileHandling.writeFile("newfile2.txt",
    "this file is created by fs module in asynchronous way.",
    (error)=>{
    if (error) {
      console.log("Something went wrong:", error);
    } else {
      console.log("File created successfully!");
    }
  })


// // reading from a file in synchronous way

const result = fileHandling.readFileSync("notes.txt","utf-8")
console.log(result);


// // reading from a file in asynchronous way

fileHandling.readFile("notes.txt","utf-8",(error,result)=>{
    if(error){
        console.log(error);
    }else{
        console.log(result);
        
    }
})

// // in writefile/writeFileSync if we try to change then it will be overwritten
// // so here we use appendFile

fileHandling.appendFileSync("notes.txt",`appended text.\n`)


// // for copy 1 file from another
fileHandling.cpSync("notes.txt","./copy.txt")


// // for deleting
fileHandling.unlinkSync("./copy.txt")


// for creating a folder
fileHandling.mkdirSync("./mkdirFolder")