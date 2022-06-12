import { PrismaFeedBacksRepository } from './repositories/prisma/prisma-feedbacks-repository';
import { SubmitFeedBackUseCase } from './use-cases/submit-feedback-use-case';
import express from 'express'
import { NodeMailerMailService } from './services/nodemailer/nodemailer-service';

export const routes = express.Router()





routes.post("/feedbacks", async (req, res) => {
    const { type, comment, screenShot } = req.body;
    const prismaFeedBacksRepository = new PrismaFeedBacksRepository();
    const nodemailerEmailService = new NodeMailerMailService()
    const submitFeedBackUseCase = new SubmitFeedBackUseCase(prismaFeedBacksRepository,nodemailerEmailService);

    await submitFeedBackUseCase.execute({
        type, comment, screenShot
    })
  

  
    return res.status(201).send()
  });