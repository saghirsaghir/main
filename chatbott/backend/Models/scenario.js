const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/PI')
.then( ()=>{console.log('connected to MongoDB...')} )
.catch( (er)=> console.log(er) )


const courseSchenma = new mongoose.Schema({
    title: String ,
    type: {
        type: String,
        enum : ['job','course'],
        default: 'course'
    },
    steps: { type : Array , "default" : [] },
    user_id: [
        {
          type: mongoose.Schema.Types.ObjectId,
          ref: "user"
        }]

})

const scenario = mongoose.model('scenario',courseSchenma)

exports.Scenario = scenario;