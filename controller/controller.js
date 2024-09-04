const services = require('../services/services')

exports.create = async (req, res) => {
    try{
         
        const data = {

            //  title: req.body.title,
            //  description: req.body.description,
            //  imageUrl: req.body.imageUrl,
            //  date: new Date()
            ...req.body

        };

        let posts = await services.create(data);
        res.status(200).send('Blog posted successfully')
        posts ? res.send(posts) : null;

    } catch (error) {
        // res.status(500).send('blog posted failed !')
        
        console.error(error) || console.log("blog posted failed");
    }
}

exports.getdata = async (req, res) => {
    try{
        let data = await services.getdata();
        data ? res.send(data) : null;


    } catch (error) {
        res.status(500).send('blog get failed !')
        console.error(error) || console.log("blog get failed"); 
    }
}