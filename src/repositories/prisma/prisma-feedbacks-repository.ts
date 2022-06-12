import { prisma } from "../../prisma";
import {
  FeedBackCreateData,
  FeedbacksRepository,
} from "../feedbacks-repository";

export class PrismaFeedBacksRepository implements FeedbacksRepository {
  async create({ type, comment, screenShot }: FeedBackCreateData) {
    await prisma.feedback.create({
      data: {
        type,
        comment,
        screenShot,
      },
    });
  }
}
