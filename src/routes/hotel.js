import express from "express";
import {HotelController} from "../controllers/index.js"
import checkAuth  from "../utils/chechAuth.js"
const router = express.Router();

router
     //CREATE
    .post("/",checkAuth,HotelController.createHotel)
    //UPDATE
    .put("/:id", checkAuth,HotelController.updateHotel)
    //DELETE
    .delete('/:id',checkAuth,HotelController.removeHotel)
    //GET
    .get("/", HotelController.AllHotel)
    //GETBYID
    .get("/:id",HotelController.getHotel)

export default router;