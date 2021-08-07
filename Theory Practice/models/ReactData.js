import mongoose from 'mongoose'
import autoIncrement from 'mongoose-auto-increment'


const ReactSchema = mongoose.Schema({
    ques : {
        type: String,
        max: 100,
        required: true,
        unique: true
    },
    ans : {
        required: true,
        type: String
    },
    sub: {
        type: String,
        required: true
    }
})

autoIncrement.initialize(mongoose.connection)
ReactSchema.plugin(autoIncrement.plugin, 'React')
const ReactData = mongoose.model('React', ReactSchema)

export default ReactData