const Todo = require("./model.js")
exports.add_new_todo = async function(req,res){
    const todo = new Todo({
        title: req.body.title,
        description: req.body.description,
        schedule: req.body.schedule,
        priority: req.body.priority,
        user: req.user._id
    })
    await todo.save()
    res.json({
        message: "New Todo Added",
        success: true
    })
    res.end()
}

exports.get_todos = async function(req,res){
    const _id = req.user._id
    const todoList = await Todo.find({user: _id})
    res.json({
        message: "Get Todos",
        success: true,
        data: todoList
    })
    res.end()
}

exports.toggle_complete = async function(req,res){
    const _id = req.params.todoId
    const todo = await Todo.findById(_id)
    if(todo.user.equals(req.user._id)){
        todo.isCompleted = !todo.isCompleted
        await todo.save()
        res.json({
            message: "Toggle",
            success: true
        })
    }
    else{
        res.json({
            message: "Authorization Failed",
            success: false
        }) 
    }
    res.end()
}

exports.edit_todo = async function(req,res){
    const _id = req.params.todoId
    const todo = await Todo.findById(_id)
    if(todo.user.equals(req.user._id)){
        const {priority, title, description, schedule} = req.body
        todo.priority = priority
        todo.title = title
        todo.description = description
        todo.schedule = schedule
        await todo.save()
        res.json({
            message: "Edit Successful",
            success: true
        })
    }
    else{
        res.json({
            message: "Authorization Failed",
            success: false
        }) 
    }
    res.end()
}