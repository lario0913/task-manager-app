const mongoose = require('mongoose')
const validator = require('validator')

mongoose.connect(process.env.MONGODB_URL, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true
})


// const task = new Task ({
//     description: "Go to driving school",
//     // completed: true
// })

// task.save().then(()=>{
//     console.log(task)
// }).catch((e)=>{
//     console.log(e)
// })
