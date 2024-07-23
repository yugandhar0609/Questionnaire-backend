import express from 'express';
import cors from 'cors';
import Connect from './comman/connection.js';
import authRouter from './Routes/UserRoutes.js';
import questionnaireRoutes from './Routes/questionnaireRoutes.js';

const app = express();
app.use(express.json());
app.use(cors());

app.use(authRouter);
app.use('/api/questionnaires', questionnaireRoutes);

Connect();

const port = 9900;
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});

// Global error handling middleware
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send('Something went wrong!');
});
