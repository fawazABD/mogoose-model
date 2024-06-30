
const display_page = (req, res)=>{
    res.render('about', {
      layout: 'about'
      })
  }

const delete_blog = async (req, res) => {
    const id = req.params.id;
    const blog_deleted = await BlogModel.findByIdAndDelete(id);
    console.log(blog_deleted)
}

const get_all_blogs = async (req, res) => {
    const blogs = await Userschema.find();
    res.render('users', {
        layout: 'users',
        
    })
}

const get_blogs_page = (req,res)=>{
    res.render('contact',{
        layout: 'contact'
    })
}


const create_blogs_controller = async function(req,response){
    console.log(req.body)
    response.send('form submitted');

    const title_body = req.body.title
    const content_body = req.body.content
    const tags_body = req.body.tags

    if (title_body ==="" || content_body ==="" || tags_body.length === 0){
        res.send("Please fill in all the fields")
    }
    const blog_created = await BlogModel.create({
        title: title_body,
        content: content_body,
        tags: tags_body
    });
    console.log(blog_created)

    response.redirect('/')
};

module.exports = {
    display_page,
    get_blogs_page,
    create_blogs_controller,
    delete_blog,
    get_all_blogs
}