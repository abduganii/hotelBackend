import Hotel from '../models/hotels.js'


export const AllHotel = async (req, res) => {
    try {

        res.status(200).send(await Hotel.find())

    } catch (error) {
        console.log(error)
        res.status(500).send("Failed to find");
    }
}

export const getHotel = async (req, res) => {
    try {   
        const {id} = req.params
        await Hotel.findById(id)
        res.status(200).send( await Hotel.findById(id))

    } catch (error) {
        res.status(500).send("Failed to find");
    }
}

export const createHotel = async(req, res) => {
    try {
        const newHotel = new Hotel(req.body)

        const saveHotel= await newHotel.save();

        res.status(200).send(saveHotel)
    } catch (error) {
        console.log(error)
        res.status(500).send("Failed to create");
    }
}

export const updateHotel = async (req, res) => {
    try {
        const {id} = req.params
        const updateHotel = await Hotel.findByIdAndUpdate(id,
            { $set: req.body }, { new: true })

        res.status(200).send(updateHotel)

    } catch (error) {
        console.log(error)
        res.status(500).send("Failed to update");
    }
};

export const removeHotel = async (req, res) => {
    try {   
        const {id} = req.params

         await Hotel.findByIdAndRemove(id)
        res.status(200).send("Hotel has been deleted.")

    } catch (error) {
        console.log(error)
        res.status(500).send("Failed to delete");
    }
}