 import express from 'express';
const router = express.Router();
import localPro from '../models/Glosaries.js'



router.post("/local" , async(req , res)=>{
    try {
      
            if (
                !request.body.product ||
                !request.body.price ||
                !request.body.photoImg
            ) {
                return response.status(400).send({
                    message: 'Required fields are missing'
                })
            }
            const newProduct = {
                name: request.body.name,
                priceInCents: request.body.priceInCents,
                image: request.body.image
            };
            const newDev = new localPro.create(newProduct);
            return response.status(201).send(newDev);
    } catch (error) {
        console.log(error.mesage);
        response.status(500).send({ message: error.message});
    }
})


export default router;