import jwt from "jsonwebtoken";
import UserModel from "../models/user.js"

export default (req, res, next) => {
    const token = (req.headers.token || "").replace(/Bearer\s?/, '');

    if (token) {
        try {
            const decoded = jwt.verify(token, 'secretno');
            const user = UserModel.findById(decoded._id)
            if (!user) {
                return res.status(403).send({
                    status: 400,
                    message: "Not authention"
                }) 
            }
            req.userId = decoded._id;
            
            next()
        } catch (error) {
            return res.status(403).send({
                status: 400,
                message: "Not authention"
            })
        }
    } else {
        return res.status(403).send({
            status: 400,
            message: "Not authention"
        })
    }
};