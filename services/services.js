const Blog = require("../model/blogModel");

exports.create = async (data) => {
    try{
      const blog = new Blog(data);
      blog.save();

      return blog;

    } catch (error) {
        console.log(error);
    }
}

exports.getdata = async (data) => {
   let result = await Blog.find();

   return result;
};