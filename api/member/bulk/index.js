// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import models from '../../../../models/member.js';

const handler = async (req, res) => {

    const httpMethod = req.method;
    switch(httpMethod){

        case 'POST' :
            const restPost = await models.addBulk(req.body);
            return (restPost.status === true ? 
                res.status(200).json({ status: true, data: restPost }) : 
                res.status(200).json({ status: true, error: restPost.error }))
            break;
        default: res.status(405).json({ status: false, message: 'Allow : POST' }); 
    }
    
    
}
  
export default handler;