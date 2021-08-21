const mongoose = require("mongoose")
const todoSchema = mongoose.Schema({
        user:{
            type: mongoose.Schema.Types.ObjectId,
            ref: "User"
        },
        title:{
            type: String,
            required: true
        },
        description:{
            type: String,
        },
        schedule:{
            type: Date,
            required: true
        },
        priority:{
            type: String,
            default: 'medium',
            enum: ['low', 'medium', 'high']
        },
        isCompleted:{
            type: Boolean,
            default: false,
        },
        created:{
            type: Date,
            default: Date.now,
        },
})
module.expors = mongoose.model("Todo", todoSchema)