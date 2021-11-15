import { Schema, model } from 'mongoose'

const questionSchema = new Schema({
  questionText: { type: String, required: true},
  answer: { type: String },
  author: { type: String, required: true },
})

export default model('Question', questionSchema)
