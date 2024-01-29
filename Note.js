// Module events

// این ماژول برای رویداد ها هست و هر ایونت دو بخش دارد 
//یکی خودی صدا زدن ایونت و دیگه اینکه کاری که بعد از صدا زدن ایونت باید انجام شود
// const EventEmiter = require('events')
// چونکه ماژول ایونت یک کلاس برگشت میدهد ما باید از این یک آبجیکت بسازیم

// const emiiter = new EventEmiter();

//  میتوانیم که کاری که بعد از صدا زدن ایونت انجام میشه را مشخص =کنیم on با استفاده از میتود 

// emiiter.on('bell',()=>{
//     console.log('open the dorr')
// })

//  میتوانیم که اوینت را صدا بزنیم emit()با استفاده از میتود  

// emiiter.emit('bell')

// هنچنان میتوانیم که ورودی هم به ایونت خود روان کنیم

// emiiter.on('bell1',(e)=>{
//     console.log(e)
//     console.log('open the dorr')
// })

// emiiter.emit('bell1',{date: Date.now(),count: 2})


///////////// http module 
// با استفاده از این ماژول میتوانیم یک سورو ایجاد کنیم و به ریکویست های 
// به سمت سرور میاید پاسخ بدهیم

// const http = require('http');

//میتوانیم یک ویب سرور ایجاد کنیم و به ریکویست ها پاسخ بدهیم createServer با استفاده از میتود  

//  const server = http.createServer();  // این میتود یک آبجیکت ریترن می کند

//  server.listen(3000)   // اینم پورت را مشخص می کند

// به عنوان پارامتر دو یک کال بک فانکشن می گیرد createServer(); فانکشن 

// این کال بک فانکشن دو پارامتر دارد که یکی ریکویست هست و دیگری ریسپانس هست

// const server = http.createServer((req,res)=>{  // هم  res  یک آبجیکت هست که در باره ریکویست ارسال شده معلومات میدهد و  req
//     console.log('new connection')              // آبجیکتی هست که به ریکویست پاسخ میدهد
//     console.log(req.url);     // localhost:3000/products
//     res.write('Response');
//     res.end()  // it must end with end() method
// }) 

// server.listen(3000)


// npm i npm-check-updates -g
// npm-check-updates --upgrade -> it updates the packes versio in package.json file

// after it we must run " npm install " command for install new packges for new version


// dev dependences 
// عبارت از پکیج های هستند که ما برای توسعه دادن اپلیکیشن خود به آنها ضرورت داریم اما پروژه ما ضرورت ندارد

// را بنویسیم چون اپ ما بفهمد --save-dev بخاطر نصب آنها باید در آخر کامند 
// example:  npm i jshint --save-dev

// for uninstall a package run it: npm un packageName

// global package 
// some package must install in globale for it we must place -g after or befor the packge name
// npm install -g jshint   or npm i jshint -g


///////////////// RestfullAPIs 
// post man is for testing the api
// reqres.in is for providing the fake api for us

// ////////////////  express framework             is the most popular framework for development a node js app

// install express and also for creating package.json run ' npm init -y'  add -y for do'nt ask question
// npm i express

// const express = require('express');

// const app = express();

// app.get('/test',(req,res)=>{

//     res.send('Hello express');
// })

// app.listen(8000,()=>{
//     console.log('listening on port 8000');
// })

// const express = require('express');

// const app = express();

// app.get('api/users',(req,res)=>{
//     res.send([
//         {id: 2,name: 'ali'},
//         {id: 2,name: 'faiz'},
//         {id: 3,name: 'jawad'},
//     ])
// })

// app.listen(8000,()=>{
//     console.log('listening on port 3000')
// })


/// \\\\\\\\\\  nodemon
// nodemon is a package for that when we change our codes
// it automaticly updates our program without tah we rerun our app
// npn i -g nodemon                ----------> it must install global


//////     envirements varibles     ///
// این ها متغیر های هستند که در هر سیستم عاملی وجود دارند
//  
// for set a varible run this command: set PORT = 1313
// for un set or clear a varible run: set PORT= 


//////////  envirement varibles    url paramater //////////////
// 1. send information using params

// const express = require('express');

// const app = express();

// app.get('/user/:id',(req,res)=>{                // http://localhost:8000/user/2               in browser
//     console.log(req.params)
//     res.send([
//         {id: 1,name: 'ali'},
//         {id: 1,name: 'ali'},
//     ])
// })
// app.listen(8000,()=>{
//     console.log('Listening on port 3000')
// })

// 2. send information using query string

// این روش عموما بخاطر اعمال کردن فیلتر اطلاعات استفاده می شود 
// مثال وقتی اطلاعات را ارسال می کنیم به اساس تاریخ آنها را فیلتر می کنیم 
// const express = require('express');

// const app = express();

// app.get('/users/',(req,res)=>{           //     http://localhost:8000/users?sort=date&status=online
//     console.log(req.query)
//     res.send([
//         {id: 1,name: 'ali'},
//         {id: 1,name: 'ali'},
//     ])
// })
// app.listen(8000,()=>{
//     console.log('Listening on port 3000')
// })


////////////// geting all data  or users ////////////

const express = require('express');
let users = require('./users');
const app = express();
const {body,validationResult } = require('express-validator')

app.use(express.json());  // for parse the body of the request by express

// json and send methods both are for sending data to the respons of request
// json convert the string and null data to the json format and send only send arry and object to json format

app.get('/api/users',(req,res)=>{
    res.json({
        data: users,
        message: 'ok',
    })
})



////////// get one user

app.get('/api/user/:id',(req,res)=>{
    const user =  users.find((u)=>u.id == req.params.id);  // for convert   users.find((u)=>u.id === parseInt(req.params.id));
    if(!user) return res.status(404).json({data: null,message: 'the user with the given id was not found!'}); // the return is because the remain code does not run
    res.json({
        data: user,
        message: 'ok',
    })
})


///////// post request or post a user 
// Note: with browser we can send only get request for other method we must use postman or other technology

// app.post('/api/users',(req,res)=>{
//     console.log(req.body); // the information send inside body by request
//     // res.send('developing')  // by defualt the express cand parse the body we must writ ( app.use(express.json());) in above
//     users.push({id: users.length + 1,...req.body});
//     res.json({
//         data: users,
//         message: 'ok',
//     })
// })



///////////////  validation:  validation the requested data  /////////////////

// for validationg data in node js we use "express-validator"   
// npm i express-validator
// after installition we must import two function in above of code 1. body 2. validationResult
// const {body,validationResult} = require('express-validator')


app.post('/api/users',[
    body('email','email must be valid').isEmail,
    body('first_name','first_name cant be empty').notEmpty(),
    body('last_name','last name cant be empty').notEmpty()
],(req,res)=>{
    const errors = validationResult(req);   
    if(!errors.isEmpty()){
        return res.status(400).json({data: null,errors: errors.array(),message: 'validation error'})
    }
    users.push({id: users.length + 1,...req.body});
    res.json({
    data: users,
    message: 'ok',
    })
})



//////////// put request or update a user ////////////


app.put('/api/users/:id',[
    body('email','email must be valid').isEmail(),
    body('first_name','first_name cant be empty').notEmpty(),
    body('last_name','last name cant be empty').notEmpty()
],(req,res)=>{

    const user = users.find(u=>u.id == req.params.id);
    if(!user){
        return res.status(404).json({
            data: null,
            message: 'the user with given id was not found'})
    }
    const errors = validationResult(req);   
    if(!errors.isEmpty()){
        return res.status(400).json({data: null,errors: errors.array(),message: 'validation error'})
    }
    
    users.map(user=>{
        if(user.id == req.params.id){
            return {...user,...req.body}
        }
        return user;
    })
    res.json({
    data: users,
    message: 'ok',
    })
})



/////// delete request or delete a user or delete api   //////////////////


app.delete('/api/users/:id',(req,res)=>{

   const user =  users.find(u => u.id == req.params.id);
   if(!user){
    return res.status(404).json({
        data: null,
        message: 'the user with given id was not found', 
    })

    const index = users.indexOf(user)

    users.splice(index,1)

    res.json({
        data: user,
        message: 'ok',
    })
   }
})


////////////// Midleware //////////////

// ریکویست ما از طریق میدلور میگزرد هر میدلور میتواند دو کار را بالای ریکوست ما انجام دهد
// استفاده کند res و  req  اول اینکه میتواند از آبتجیکت های 
// یعنی اینکه میتواند یک مقدار را از آبجیکت ریک بخواند یا یک مقدر را را درونش قرار دهد
// یعنی هم ری و هم رایت میتواند
// یک پاسخ را در جواب ریکویست ارسال کند res و همجنان میتواند با استفاده از 
// و دومین کاری که هر میدلور متواند اینست که می تواند هر ریکویست را به میدلور بعدی 
// ارسال کند یا یا جریان را توقف کند

// ..نکته دیگه اینکه ترتیب در میدلور ها اهمیت دارد یعنی اینکه ریکویست ما اول به میدلور اولی بعد دومی

// ما یک میدلور حساب می شود route اولین میدلور ما هست بر علاوه این هر  const app = express(); این

// هست ما میتوانیم میدلور های شخصی هم دیفاین کنیم express بر علاوه میدلور های که در 

///    ایجاد کردن میدلور شخصی

// فقط اینها باید در قسمت بالای کد ما باشند 

// app.use((req,res,next)=>{  // every midleware tack a function as paramater that called midleware function
//                         // it tackes there paramaters
//     req.body.username = "Faiz Mohamad";  // گفتیم میتوانیم ریک را دستکاری کنیم
//     req.user = {id: 1,name: 'Faiz'}; // //
//     res.send('this response is coming from middlware');
//     console.log('middle 1');
//     next() // وقتی این میتود را کال میکنیم  هم ریکویست را به میدلور بعدی روان می کند
//     //  و هم تغیرات که در ریک و ریس آوردیم را به میدلور بعدی پاس میدهد
// })


// ما میتوانیم که ریکویست را به میدلور بعدی پاس بدهیم یا نه اگر آنرا کال کنیم   next با استفاده از 
// ریکویست را به میدلور بعدی میفرستد

// app.use((req,res,next)=>{  
//     console.log('middle 2')

//     next() // نکته وقتی در یک میدلور به یک درخواست پاسخ بدهیم دیگه در جای دیگر نمیتوانیم به آن پاسخ بدهیم
//             //  فقط یکبار میتوانیم  یک درخواست پاسخ بدهیم
// })



///////////      urlencode middleware       //////////////////

// وقتی دیتا را از طریق فورم به سرور روان میکنیم یک آبجیکت خالی از طرف سرور دریافت می شود برای 
// استفاده کنیم urlencode حل این مشکل باید از میدلور 

//     app.use(express.urlencoded({extended: 'true'})); // این باید در بالا کد استفاده شود

////////////      static middleware //////////

// بعضی وقتا ضرورت داریم یک فایل استاتیک در پروژه خود داشته باشیم و لینک اش را به یوزر بدهیم این فایل 
// استاتیک میتواند هر فایلی باشد برای این کار ما از استاتیک میدلور استفاده می کنیم

//       app.use(express.static('public'));  // این را در اول کد باید قرار دهیم 

// فولدری هست که فایل های استاتیک ما درآن قرار دارد public در اینجا 

// با پسوند مربوطه اش قرار دهیم  test ایجاد کنیم و یک فایل بنام  public اگر فولدر 
//با وارد کردن یوآر ال زیر به آن دسترسی دارید

// localhost:3000/test.extensionName



// بعضی از میدلور ها هستند که بشکل خارجی استفاده می شوند یعنی اول آنها را نصب می کنیم بعدا استفاده می کنیم

// را امن می کند و در امنیت ویبسایت ما به ما کمک می کند http  هست که درخواست های  helment یکی از آنها 
// npm i helment
/*
const helment = require('helment');

app.use(helment());

این دو باید در بالای کد استفاده شوند
*/

// ما سه فاز یا محیط برای اجرا شدن برنامه نود خود داریم
// 1. development phas 2. deploy phas 3. test phas

// میتوانیم معلوم کنیم که در کدام فاز هستیم process با استفاده از 
// process.env   the env has all varibles

// in inside env there is a standard varile called NODE_ENV it is value is the phas
// مقدار این وریبل هرچی باشد ما در آن فاز هستیم

//1.  console.log('NODE_ENV: ',process.env.NODE_ENV); // این معلوم می کند که ما در کدام فاز هستیم
//2. console.log(app.get('env))      //  هست development مانند بالا کار می کند فرق شان اینست که اگر به این کدام چیزی سبت نشده بود 
/// morgan ///////
/// morgan is a package that we can tacke log http request

// npm i morgan 

/*

const morgan = require('morgan');

app.use(morgan('tiny'))

*/





///////// local config  ///////////////

// برای مدیریت کردن برنامه وقتی که برنامه ما خیلی بزرگ می شود ما باید یک فولدر مشخص داشته باشیم و درون آن فایل های 
// کانفیگ برای هر سه محیط را دشته باشیم 
// برای این منظور میتوانیم از فایل های ساده هم استفاده کنیم و هم میشه که 
// پکیچ کانفیگ را انستال کنیم
// npm i config

// rootDirectory/config/1. default.json 2. development.json 3. production.json
/*

// default.json
{
    "name": "express app",
    "version": "1.0.0",
}

// development.json

{
    "name": "express app -developmetn",
    "SMS": {
        "ip": "0.0.0.0",
        "id": "1234",
    },
}
// production.json


{
    "name": "express app -developmetn",
    "SMS": {
        "ip": "185.17.113.45,
        "id": "12343252df",
    },
}

 */

// برای استفاده از این کانفیگ ها بشکل زیرعمل مینکیم

// const config = require('config');    // it must import in the top of code

/*
console.log("Application Name: ", config.get("name"));
console.log("Application Version: ", config.get('version'));
console.log("SMS: ", config.get('SMS'));
console.log("SMS: ", config.get('SMS.ip'));  // for spesigice   

 */
// for change the evirement we can user set NODE_ENV = development


// ////////// Custome Evirement varibles//////////

// معلومات حساس را نمیتوانیم در آن فایل ها زخیره کنیم یعنی نباید آن معلومات را در آن فایل ها زخیره کنیم
// این معلومات را در وریبل های محیطی شخصی زخیره می کنیم

// set expressapp_smskey = 12344321 // it set this varible / it is good to add the app name at the start of our app

// for accessing to that varible we must create a file in the config folder
// config/custom-envirement-varibles.json
// in the this file we have

/**
{
    "SMS":{
        "key": "expressapp_smskey"
    }
}

 */
// and we can use as below
//console.log("sms key: ", config.get('SMS.key'));


/////////     debuge package      ///////////////

// برای اینکه زا لاگ کرفتن بشکل درست استفاده کنیم برای تست کردن بعضی بخش ها از این پکیج استفاده می کنیم

// npm i debug

//  const debug = require('debug')('app:main') // جون فانکشن هست همینجا میتوانیم کالش کنیم و یک نام بشکل اختایری برای پاس میدهیم

// for use it first we must acitve the logs for namespace app:main
// for it we use from envirement varibles:  set DEBUG = app:main

// now we can use debug incted of console.log
// for remove envirement varibles we use: set DEBUG =
 
// برای هر بخش میتوانیم یک لاگ مشخص در نظر بگیریم

/*
const dbdebug = reuqire('debug')('app:db');  // for database debug

dbdebug('Database Connected');
*/
// برای این که در ترمینال نشان داده شوند اول باید آنرا فعال کنیم

//   set DEBUG = app:main , app:db


///////////// veiw engin/////////////

// برای اینکه به ریکویست های که از طرف بروزر میاید ریسپانس بدهیم میتوانم که یک جسون روان کنیم که در ریست فول هه پی آی مروج هست
// اما میتوانیم یک صفحه اج تی ام ال هم روان کنیم 
// که برای اینکار بشکل ساده هم میتوانیم یک فایل اج تی ام ال روان کنیم یا اینکه 
// های موجود استفاده کنیم veiw engin  از

// مشهور های شان       پاک - ماستش و ای جی اس 

// npm i ejs
 // app.set('view engin', 'ejs');   // we must tell to express that from which engin we use
 // app.set('views','./views')             // we must create such folder in our app
 // inside views folder we must create our file with the .ejs extension 

 /*
 app.get('/',(req,res)=>{
    return res.render('home')
 })


 home.html

 <h1>Hello world</h1>
 */ 
// خوبی این در این هست که لازم نیست تمام تگ های اج تی ام ال را بنویسیم


/*

we can pass varible to home 

 app.get('/',(req,res)=>{
    return res.render('home',{name: 'faiz'})
 })

<h1>Hello world <%= name %></h1>

*/





/////////// refactor route         ریفکتور کردن روت ها  /////////////////








////////        Databases //////////////// 

// mongose is a package or a driver for connection between mongo and node js

// for every DB there is a package or dirver for connection between that database and node js

// npm install mongoose  // search in net

mongoose.connect('mongodb://localhost:27017/mongoprject') // is the database exsit before it connect with it if not exsit it create new data base and connect 
.then(()=>{                                                 // it returen a propise we must use async and awat or then and catch
    console.log("Mongo connected successfully")
}).catch((err)=>{
    console.log("could not connect with mongo")
})

// هر موجودیت در مانگو در غالب یک کالیکشن در مانگو زخیره می شود 
// و هر کالیکشن دارای داکیومنت هست مثال یورز یک کالیکشن هست و معلومان هر یوزر یک داکیومن هست
// schema
// برای اینکه در مانگوز یک کالیکشن بسازیم و با آن ارتباط برقرار کنیم اول اسکیما میسازیم 
// اسکیما تعیین می کند که داکیومنت های داخل یک کالیکشن چی شکلی داشته باشند یعنی دارای کدام فیلد ها م تایپ ها باشند
// اسکیما ربطی به مانگو دی بی نداره بلکه یک مفهوم در مانگوز هست 


 const UserSchema = new mongoose.Schema({
    first_name: String,
    last_name: {type: String,required: true},
    favorites: [String],
    date: {type: String,default: Date.now},
    admin: Boolean,
 })

 //       model ////////          قدم دوم کمپایل اسکیما به مدل
 // مدل یک کلس هست که به ما قابلیت ساختن آبجیکت را میدهد و این آبجیکت ها را در قالب داکیونت در دیتابیس خود زخیره کنیم

 const User = mongoose.model('User',UserSchema); // the Schema compiled to model
                                                 // the first paramater is the model name and it must start with Upercase letter 
                                                 // and it must be singular
    /// now we can create user using model

    // const user = User({
    //     first_name: 'Faiz mohammad',
    //     last_name: 'Rahmdel',
    //     favorites: ['sport','programmin','data science'],
    //     admin: true,
    // })

    // we can use the save method of the user object for saving this object as a document in our database
    // we use from async and await because the result of this object is a primmse

    async function createUser(){
        const user = User({
            first_name: 'Faiz mohammad',
            last_name: 'Rahmdel',
            favorites: ['sport','programmin','data science'],
            admin: true,
        })

        // const result = await user.save();
        // console.log(result)
        // we must handle promis or error



        try {
            const result = await user.save();
            console.log(result)
            
        } catch (error) {

            console.log(error.message)
            
        }
    }

    createUser()
    //////// Note: validation is in mongoos not in


    ///////     writing query   ///////
    // توسط کیوری نویسی مبتوانیم دیتا را به اشکال مختلف از دیتابیس ریتریو کنیم
    // با استفاده از مدل که ایجاد کردیم دیتا را ریتریو می کنیم

    //     find() // object document query
    // گرفتن دیتا یک عملیه اسینک هست

    async function getUsers(){

        // const users = await User.find()     //  get object document query       it return a promise
        // // it returns a arry of documents in a collection
        // console.log(users) //    []

        // const users = await User.find({first_name: 'rahmdel'})  // base on this condition it get a documetn            
        // console.log(users) //    []


       // const users = await User.find({first_name: 'rahmdel',admin: true})  // we can user more thna one filter   

    //    const users = await User.find({first_name: 'rahmdel',admin: true})
    //    .limit(5)// تنها پنج تا را ریترن کن
    //    .sort({first_name: 1})  // اگر مثبت 1 بدهیم بشکل صعودی مرتب می کند و اکر منفی  1 بدهیم بشکل نزولی مرتب می کند
    //    .select({first_name: 1,last_name: 1}) // just tack or select firs_name and last_name column
    //    .count() // it return the number of documents
    // }


///////// Operations in Mango /////////////////
// we can retrive data base condation using operators

// 1. eq    2. nq   3. gt   4. gte(>=)  5. lt   6. lte  7. in    8. nin

//    const users = await User.find({age: {$nq: 22}}) // تنها یوزری که سن اش برابر با 22 هست را برگشت نمیدهد دیگه تمام یزران را برگشت میدهد

//    const users = await User.find({age: {$gte: 22,$lte: 30}}) //  22 <= age <= 30

// const users = await User.find({age: {$in: [20,22,23]}}) //  in range (20,22,23)

///////////// or query //////////////

//    const users = await User.find({first_name: 'rahmdel',admin: true}) // it is like and if want or we can do as below

//    const users = await User.find().or([{first_name: 'rahmdel'},{admin: true}])  // it do as or
//    const users = await User.find().or({first_name: 'rahmdel',admin: true})  // it do as and

//////// pagination       ////////////
// with to method: skip and limit we can do pagination

        // const pageNumber = 1;
        // const pageSize = 10;
        // const users = await User.find()
        // .skip((pageNumber - 1) * pageSize)
        // .limit(pageSize);
        

/////////////   updating a document  /////////// 

// دو راه برای اینکار وجود دارد
//////// 1
// در روش اول اول داکیومنت را پیدا می کنیم بعد آپدیت اش میکنیم یا تغیر اش میدهیم و بعد زخیره اش می کنیم

async function updateUser(id){
    const user = await User.findByID(id); // it return  a user according the id
    // const user = await User.findOne({_id: id})  // it return a user according the this id from collections of users
    // const user = await User.find({_id: id})   // it return an arry that we can use from 0 index to get user if was no user it return an empty arry
    if(!user) return; // it don'nt run any remained code when the user was not found
    
    // user.admin = false;       // there are two way for updadint the user
    // user.first_name = 'Ali',

    user.set({
        admin: false,
        first_name: 'Ali'
    })

    const result = await user.save();
    console.log(result)
}

updateUser("0ds0s034")   // fake id: 0ds0s034

/////////// 2
// در روش دوم  نیاز نیست اول داکیومنت را دریافت یا پیدا کنیم اول داکیومنت را آپدیت می کنیم و
// اگر خواسته باشیم نتیجه اش که همان داکیومنت آپدیت شده است را دریافت می کنیم

async function updateUser(id){
    const result = await User.update({_id: id},{
        $set: {
            first_name: 'Updated FristName',
        }}); 
        // first paramater is a filter it and second pramater is obdate object
       // and we must use update operators in opdate ubject

    
    console.log(result)
}

updateUser("0ds0s034")   // fake id: 0ds0s034


// اگر خواسته باشیم داکیومنت آپدیت شده را برگشت هم بدهیم از میتود زیر استفاده می کنیم
    const result = await User.findByIdAndUpdate(id,{
        $set: {
            first_name: 'Updated FristName',
            // اما تنها داکیومنت را قبل از آپدیت برگشت می دهد
        }},{new: true}); // it ruturn updated document 

        // 



/////////////     deleting a document      //////////////////

// with the deleteOne() method we can delete a document it delete only one document

async function removeDocument(id){
    const result = await User.deleteOne({_id: id});

    console.log(result)

    // const result = await User.deleteMany({_id: id}); //or {amin: true}  /// it remove all document that are mutch to filter
    // if we want return  deleted document we can use from below function
    const user = await User.findByIdAndRemove({_id: id});
    console.log(user)

}

////////////////////////  required validator /////////////////




////////////////////////  String and Number Validator  /////////////////

// 1. String
const UserSchema = new mongoose.Schema({

    first_name: {type: String,minelength: 2,maxlength: 20}, // maxlength   minelength
    last_name: {type: String,required: true},
    favorites: {type: [String],enum: [
        "sport",
        "programmin",
        "dance",
        "music",
        "filme"
    ]}, // this validator only accept these values
    age: {type: Number,min: 8,max: 80},
    date: {type: String,default: Date.now},
    admin: Boolean,
 })


 /////////////// custome validator ///////// 

 // sometimes we need add a custome validator the we can use as below


 const UserSchema1 = new mongoose.Schema({

    // i only want an array with one element for it we can use from validate function

    favorites: {type: [String],
    validate: {
        validator: function(v){
            return v && v.length > 0 
        },
        message: 'favorite field should have at least one item'
    } }, 

 })

///////// Schema Type  //////////////////
// در وقتی ساختن اسکیما میتوانیم که تایپ هر فیلد را بشکل ساده تعیین کنیم
// یا میتوانیم از یک آبجیکت اسکیما تایپ استفاده کنیم که یک آبجیکت هست که درون این آبجیکت می توانیم 
// مواردی زیاد از میتود و اتریبیوت داشته باشیم

const UserSchema2 = new mongoose.Schema({

    "first_name": {type: String,minelength: 3,maxlength: 20,lowercase: true, trime: true},// alos u can user uppercase
    // if we use lowercase it change out value to upper case: first_name: "ALI" ---> ali will store in db
    // thes was for String type

 })

 /// there are two other properties (get,set) that we can use them with any type

 // پراپرتی ست قبل از اینکه دیتا در دیتابیس زخیره شود تغیری بالای آن اضافه می کند 
 // و پراپرتی گیت بعد زا اینکه دیتا از دیتا بیس دریافت شد بالای آن تفیراتی را اعمال می کند

 const UserSchema3 = new mongoose.Schema({

    "salary": {type: Number,required: true,set: v => Math.round(v)}, // if we write 15.6 it store 16 on db
    "salary": {type: Number,required: true,get: v => Math.round(v)}, // when we read this filed it reuturn rounded number 
 })

 // as below 

 async function getUser3(id){
    const result = await User.find(id);
    console.log(result[0].salary) // from 16.7 that stored on data base it return 17 
    // console.log(result[0]) // from 16.7 that stored on data base it return 16.17
 }




///////////// connect project with database

// at first we must install the mobgoos package: npm i mongoos

const mongoos = require('mongoos');

mongoos
    .connect("mongodb://localhost:27017/helloepress")
    .then(()=>{
        console.log("connected to mongodb")
    }).catch(()=>{
        console.log("could not connect to mongodb")
    })

//  creating schema    ////////////// 

    const mongoose = require('mongoose')
    const userSchema = mongoose.Schema({
        first_name: {type: String,required: true},
        last_name: {type: String,required: true},
        email: {type: String,required: true},
    });
    
    const User = mongoose.model("User",userSchema); // it must start with Uppercase because it is a class
    
    module.exports = User




    const User = require('./../models/users')







router.get('/',async (req,res)=>{
    const users = await User.find(); 
    res.json({
        data: users,
        message: 'ok',
    })
})




router.get('/:id',async (req,res)=>{
    const user =  User.find(req.params.id); 
    if(!user) return res.status(404).json({
        data: null,
        message: 'the user with the given id was not found!'
     });
    res.json({
        data: user,
        message: 'ok',
    })
})


router.post('/',[
    body('email','email must be valid').isEmail,
    body('first_name','first_name cant be empty').notEmpty(),
    body('last_name','last name cant be empty').notEmpty()
],async (req,res)=>{
    const errors = validationResult(req);   
    if(!errors.isEmpty()){
        return res.status(400).json({data: null,errors: errors.array(),message: 'validation error'})
    }
    let newUser = new User({
        first_name: req.body.first_name,
        last_name: req.body.last_name,
        email: req.body.email,
    })
    newUser = await newUser.save();
    res.json({
    data: newUser,
    message: 'ok',
    })
})



router.put('/:id',[
    body('email','email must be valid').isEmail(),
    body('first_name','first_name cant be empty').notEmpty(),
    body('last_name','last name cant be empty').notEmpty()
], async (req,res)=>{
    const errors = validationResult(req);   
    if(!errors.isEmpty()){
        return res.status(400).json({data: null,errors: errors.array(),message: 'validation error'})
    }
    
    const user = User.findByIdAndUpdate(req.params.id,{
        first_name: req.body.first_name,
        last_name: req.body.last_name,
        email: req.body.email
    },{new: true})
    if(!user){
        return res.status(404).json({
            data: null,
            message: 'the user with given id was not found'})
    }

    res.json({
    data: user,
    message: 'ok',
    })
})


router.delete('/:id',async (req,res)=>{

    const user =  await User.findByIdAndRemove(req.params.id)
    if(!user){
     return res.status(404).json({
         data: null,
         message: 'the user with given id was not found', 
     })
 
     res.json({
         data: user,
         message: 'ok',
     })
    }
 })


 module.exports = router
 





app.listen(8000,()=>{
    console.log('Lisetening on port 8000');
});