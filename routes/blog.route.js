const express = require('express');
const {get_blogs_page, create_blogs_controller, display_page, delete_blog, get_all_blogs} = require('../controller/blog.controller.js');
const routes = express.Router();

routes.get('/about', display_page)
routes.get('/contact', get_blogs_page)
routes.post('/create-blogs', create_blogs_controller)
routes.get('/get-blogs', get_all_blogs)
routes.put('/delete-post/:id', delete_blog)

module.exports = {
    blog_routes : routes
};
