import mongoose from 'mongoose'
import autoIncrement from 'mongoose-auto-increment'


const NodeSchema = mongoose.Schema({
    ques : {
        type: String,
        max: 100,
        unique: true,
        required: true
    },
    ans : {
        type: String,
        required: true
    },
    sub: {
        type: String,
        required: true
    }
})

autoIncrement.initialize(mongoose.connection)
NodeSchema.plugin(autoIncrement.plugin, 'Node')
const NodeData = mongoose.model('Node', NodeSchema)

export default NodeData