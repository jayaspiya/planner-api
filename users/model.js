const mongoose = require("mongoose")
const userSchema = mongoose.Schema({
    email: {
        type: String,
        required: true,
        unique: true,
        match: /.+\@.+\..+/,
    },
    password:{
        type: String,
        required: true,
    },
    joinedDate:{
        type: Date,
        default: Date.now,
        select: false
    },
    name:{
        first: {
            type: String,
        },
        last: {
            type: String
        }
    },
    address:{
        type: String,
        default: ""
    },
    gender:{
        type: String,
        enum: ['male', 'female', 'other'],
    },
    plans:[
        {
            created:{
                type: Date,
                default: Date.now,
            },
            task:{
                type: String,
                required: true
            },
            schedule:{
                type: Date,
                required: true
            }
        }
    ]
})

module.exports = mongoose.model("User", userSchema)