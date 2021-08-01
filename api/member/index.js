// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import Cors from 'cors'
import models from '../../../models/member.js';

const cors = Cors({
    methods: ['GET', 'POST', 'HEAD'],
})

const handler = async (req, res) => {

    const httpMethod = req.method;
    switch(httpMethod){

        case 'GET' :
            const restGet = await models.getAll();
            return (restGet.status === true ? 
                res.status(200).json({ status: true, data: restGet }) : 
                res.status(200).json({ status: true, error: restGet.error }))
            break;
        case 'POST' :
            const restPost = await models.add(req.body);
            return (restPost.status === true ? 
                res.status(200).json({ status: true, data: restPost }) : 
                res.status(200).json({ status: true, error: restPost.error }))
            break;
        default: res.status(405).json({ status: false, message: 'Allow : GET, POST' }); 

    }
    
}
  
export default handler;