import NewsLetter from "../model/NewsLetter.model.js";

export const addSubsciber =async (req,res)=>{
    const {email} = req.body

    if(email=='' || email== undefined || email==null){
        res.status(405).json({message:'please enter your email'})
    }
    else{

        try {
            
            const subscriber = await NewsLetter.findOne({ email });
            if(subscriber){
                return res.status(400).json({ message: "you are already subscribed" })
                
            }
            const addSubsciber = new NewsLetter({
                email
            })
            await addSubsciber.save();
            res.status(200).json({
                message: "User Subscribed Succefully", subscriber: {
                    _id: addSubsciber._id,
                    email:addSubsciber.email
                }
            })
        } catch (error) {
            console.log(error);
            res.send(500).json(error)
            
        }
    }
}