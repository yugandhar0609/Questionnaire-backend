import Questionnaire from '../Models/Questionnaire.js';


export const createQuestionnaires = async (req, res) => {
  try {
    const { name, questions } = req.body;
    const createdQuestions = await Promise.all(
      questions.map(question => {
        return new Questionnaire({
          name,
          question: question.question,
          answer: question.answer
        }).save();
      })
    );

    res.status(201).json(createdQuestions);
  } catch (error) {
    console.error('Error creating questionnaires:', error);
    res.status(500).json({ message: 'Internal Server Error', error });
  }
};



