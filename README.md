# Chat Application Using Reactjs🎉
[![Build Status](https://travis-ci.org/joemccann/dillinger.svg?branch=master)](https://travis-ci.org/joemccann/dillinger)
## Technology 
- Nodejs
- Mysql
- Unittesting using Mocha and chai
## Feature 
- Using Restful api
- Using : mocha to write unit test
- Manager : user , exam, question, history, rank ...
- Do a test.
- Authenticate 2.0
## Database
- My sql
```
![image info](./public/picture/hinh1.png)
```
## Structure in repo
```
 Quick test

        ├── config/         #difine database
        │   ├── database/   #difine path database
        │   ├── index/      #dontenv
        │  
        ├── Controler├── controler/      #control implement api
        ├── database ├──                 #define datatabase  
        ├── modles 
        ├── route
        ├── test  
        ├── utils                    
        ├── index.js/       #app.js
        ├── Index.js/      #wrap app
        │       
        ├── setupTest.js.   #include file set up
```
if you want to clone this repostory open cmd control in your computer and run this: 

```
    git clone https://github.com/rafadiot-training/quan-quz-server.git
```
For production environments…
```
    npm install --production
    NODE_ENV=production node app
```
## Available Scripts

In project directory , you can run 

The first you must take file nodemodules :  
```
    npm i 
```
Run aplication : 
```
 npm run nodemon
```
## Install dependences
```
    npm install --save bcrypt body-parser chai chai-http cookie-parser cors dotennv epress express-session jsonwebtoken mocha mysql mysql2
```
## Guide use Route
```
route.post("/test-detail", EMPLOYEE.Create )
 ```
## Guide use  controler 
```
Exam.updateExam = async (exam_id, newExam,result) =>{
    con.query("UPDATE exam SET exam_name = ? , exam_description = ? WHERE exam_id = ?",
    [newExam.exam_name, newExam.exam_description , exam_id] , (err, data) =>{
        if(err){
            result(err, null)
            return
        }else{
            result(null, data)
        }
        
    })
}
```
## Guide use  model 
```
exports.CreateRole = async (req, res)=>{
    let { role_name, role_description} = req.body;
    let newRole = new Role({
        role_name : role_name,
        role_description : role_description
    })
    Role.Create(newRole, (err , data) =>{
        res.send(data)
    })
}
```
Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

If you have any confusion in this repo. please contact me : **quanbee.dev@gmail.com**
### Lisence 
MIT
**🎉Free Software, Nguyen Hong Quan!**