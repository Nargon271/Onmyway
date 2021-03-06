const mongoose = require('mongoose')
const Schema = mongoose.Schema

const jobsSchema = new Schema({
    name: {
        type: String,
        required: true,
        unique: true,
    },
    location: {
        type: String,
        required: true
    },
    accommodation: {
        type: String,
        required: true,
    }, 
    timetable: {
        type: String
    },
    benefits: {
        type: [String],
        enum: ['Breakfast', 'Lunch', 'Dinner', 'Health insurance', 'Shared bedroom', 'Individual bedroom', 'Some extra money', 'Laundry']
    },
    image: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true
    },
    preferences: {
        type: Schema.Types.ObjectId,
        ref: 'Preferences'
    },
    user: {
        type: Schema.Types.ObjectId,
        ref: 'User'
    },
    comments: [{
        type: Schema.Types.ObjectId,
        ref: 'Comment'
    }],
}, {
    timestamps: true
})

const Job = mongoose.model('Jobs', jobsSchema)
module.exports = Job