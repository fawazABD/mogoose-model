const mongoose = require('mongoose')

const BlogSchema = new mongoose.Schema({
    title:{
        require:true,
        type: String
    },
    content:{
        require:true,
        type: String
    },
    aurthor: {
        type: String,
        default: 'kenny'
    },
    tags:{
        type:[String],
        require:true
    },
    comments:{
        type:Array,
        require:true,
    },
    created_at:{
        type:Date,
        default:Date.now() 
    },
    likes:{
        type : Number,
        default: 0
    } 

});


const BlogModel = mongoose.model('Blogs', BlogSchema)

module.exports = {
    BlogModel
}