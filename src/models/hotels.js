import mongoose from "mongoose"


const HotelSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: true,
        },
        type: {
            type: String,
            required: true,
        },
        city: {
            type: String,
            required: true,
        },
        address: {
            type: String,
            required: true,
        },
        distance: {
            type: String,
            required: true,
        },
        photos: {
            type: [String],
        },
        title: {
            type: String,
            required: true,
        },
        disc: {
            type: String,
            required: true,
        },
        rating: {
            type: String,
            min: 0,
            max:5
        },
        room: {
            type: [String],
        },
        cheapestPrice: {
            type: Number,
            required: true,
        },
        featured: {
            type: Number,
            default: false,
        },
    },
    {
        timestamps: true
    },
);
export default mongoose.model('Hotel', HotelSchema);