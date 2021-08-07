import mongoose from 'mongoose'
import autoIncrement from 'mongoose-auto-increment'


const QuestionSchema = mongoose.Schema({
    ques : {
        type: String,
        max: 100,
        required: true
    },
    ans : {
        required: true,
        type: String
    },
    sub: {
        type: String,
        required: true,
    }
})

autoIncrement.initialize(mongoose.connection)
QuestionSchema.plugin(autoIncrement.plugin, 'AllQuestion')
const QuestionData = mongoose.model('AllQuestion', QuestionSchema)

export default QuestionData