import mongoose from "mongoose";
import validator from 'validator';

const reservationSchema=new mongoose.Schema({
    firstName:{
        type:String,
        required:true,
        minLength:[3,"first name must contain at least 3 characters"],
        maxLength:[30,"first name must contain at most 30 characters"],
    },
    lastName:{
        type:String,
        required:true,
        minLength:[3,"Last name must contain at least 3 characters"],
        maxLength:[30,"Last name must contain at most 30 characters"],
    },
    email:{
        type:String,
        required:true,
        validate:[validator.isEmail,"Provide a valid email."],
    },
    phone:{
        type:String,
        required:true,
        minLength:[10,"Phone No. must contain at least 10 digits"],
        maxLength:[10,"Phone No. must contain at most 10 digits"],
    },
    time:{
        type:String,
        required:true,
    },
    date:{
        type:String,
        required:true,
    }


});

export const Reservation =mongoose.model("reservation",reservationSchema);
