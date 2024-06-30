const express = require('express');
const app = express();
const { engine } = require('express-handlebars');
const path = require('path');
const mongoose = require('mongoose');
const {BlogModel} = require('./model/blog.model.js');
const {blog_routes}= require('./routes/blog.route.js')

app.use(express.static(path.join(__dirname,'public')))
app.use(express.urlencoded());

app.engine('handlebars', engine({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');
app.set('views', './views');

const middleware = function(request,response,next){
    console.log(request);
    next();
}

// /blog/contACT
app.use('/blog', blog_routes)

app.get('/users', (req, res)=>{
    res.render('users',{
        layout: 'users'
    })
})



app.post('/user/create-users', async function(req, response){
    console.log(req.body)
    response.send('Users info Submitted')

    const usernames_body = req.body. username
    const Email_body = req.body. Email
    const password_body = req.body. Password
    const Name_body = req.body. Name
    const Date_of_Birth_body = req.body. Date_of_Birth
    const Address_body = req.body. Address
    const create_at_body = req.body. created_at

    if (usernames_body === '' || Email_body === '' || password_body === '' || Name_body === '' ||
        Date_of_Birth_body === '' || Address_body === '' || create_at_body === ''){
            res.send('Please Fill in the Fields')
        }

    const user_created = await UsersModel.create({
        username: usernames_body,
        Email: Email_body,
        Password: password_body,
        Name: Name_body,
        Date_of_Birth: Date_of_Birth_body,
        Addresss : Address_body,
        create_at : create_at_body
       
    });
    console.log(user_created)
})



const usersSchema = new mongoose.Schema({
    usernames:{
        require:true,
        type: String

    },
    Email:{
        require:true,
        type: String
    },
    Password:{
        require:true,
        type: String    
    },
    Name:{
        require:true,
        type: String
    },
    Date_of_Birth:{
        require:true,
        type: Number
    },
    Address:{
        require:true,
        type: String
    },
    create_at: {
        require:true,
        type: Date,
        default: Date.now()
    },

})



const UsersModel = mongoose.model('Users', usersSchema)
app.listen(5001, function () {
    console.log('Server listening on PORT 5001');
});


const CONNECTION_URL = 'mongodb+srv://blogs:mongodb@cluster0.cjxtcqa.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0'

mongoose.connect(CONNECTION_URL)
.then(()=>{    
    console.log('MONGODB CONNECTION SUCCESFUL');
})
.catch((error)=>{
    console.log(error)
})
