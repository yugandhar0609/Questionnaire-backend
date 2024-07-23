import mongoose from 'mongoose';

const questionSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  question: {
    type: String,
    required: true,
  },
  answer: {
    type: String,
    required: true,
  },
});



const Questionnaire = mongoose.model('Form user Data', questionSchema);

export default Questionnaire;
