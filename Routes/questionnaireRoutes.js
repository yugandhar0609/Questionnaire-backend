import express from 'express';
import { createQuestionnaires } from '../Controllers/questionnaireController.js';
// import { verifyToken } from '../MiddleWare/auth.js';

const questionnaireRoutes = express.Router();

questionnaireRoutes.post('/post',  createQuestionnaires);

export default questionnaireRoutes;
