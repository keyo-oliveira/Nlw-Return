import { MailService } from "./../services/mail-service";
import { FeedbacksRepository } from "./../repositories/feedbacks-repository";
interface submitFeedBackUseCaseRequest {
  type: string;
  comment: string;
  screenShot?: string;
}

export class SubmitFeedBackUseCase {
  constructor(
    private feedbacksRepository: FeedbacksRepository,
    private mailService: MailService
  ) {}

  async execute(request: submitFeedBackUseCaseRequest) {
    const { type, comment, screenShot } = request;

    if (screenShot && !screenShot.startsWith("data:image/png;base64")) {
      throw new Error("Invalid screenshot format.");
    }

    if (!type) {
      throw new Error("type is required.");
    }
    if (!comment) {
      throw new Error("type is required.");
    }

    await this.feedbacksRepository.create({
      type,
      comment,
      screenShot,
    });

    await this.mailService.sendMail({
      subject: "Novo feedback",
      body: [`<p>${type}</p>`, `<p>${comment}</p>`].join("\n"),
    });
  }
}
