import mongoose from "mongoose";

const userSchema = mongoose.Schema({
    iss: {
        type: String
    },
    nbf: {
        type: Number
    },
    aud: {
        type: String
    },
    sub: {
        type: String,
        required: true
    }, 
    email: {
        type: String
    },
    email_verified: {
        type: Boolean
    },
    name: {
        type: String,
        required: true
    },
    azp: {
        type: String
    },
    picture: {
        type: String,
        required: true
    },
    given_name: {
        type: String,
    },
    family_name: {
        type: String,
    },
    iat: {
        type: Number
    },
    exp: {
        type: Number

    },
    jti: {
        type: String,
    },
})


export const user = mongoose.model('user', userSchema)