// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import models from '../../../models/member.js';

const handler = async (req, res) => {

    const httpMethod = req.method;
    switch(httpMethod){

        case 'GET' :
            const restGet = await models.getById(req.query.id);
            return (restGet.status === true ? 
                res.status(200).json({ status: true, data: restGet }) : 
                res.status(200).json({ status: true, error: restGet.error }))
            break;
        case 'DELETE' :
            const restDelete = await models.delete(req.query.id);
            return (restDelete.status === true ? 
                res.status(200).json({ status: true, data: restDelete }) : 
                res.status(200).json({ status: true, error: restDelete.error }))
            break;
        default: res.status(405).json({ status: false, message: 'Allow : GET, DELETE' }); 
    }
    
    
}
  
export default handler;