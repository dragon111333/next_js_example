import {conn} from "../../connect.js";
const handler = async (req,res)=>{
    try {
        switch(req.method){
            case "POST":
                const delStatus = await conn("member").delete("member").where("id","=",req.body.id);
                if(parseInt(delStatus)>0){
                    res.json(await conn("member").select("*"));
                }else{
                    res.json({"status":"error"});
                }
                break;
        }
    } catch (error) {
        console.log("error--->",error);
    }
}

export default handler;