import {conn} from "../../connect.js";
const handler = async (req,res)=>{
    try {
        switch(req.method){
            case "GET" :
                res.json(await conn("member").select("*"));
                break;
            case "POST":
                const addMemberData = await conn("member").insert(req.body);
                console.log(addMemberData);
                if(parseInt(addMemberData)>0){
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