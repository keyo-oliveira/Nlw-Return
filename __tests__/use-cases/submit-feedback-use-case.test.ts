import { SubmitFeedBackUseCase } from "../../src/use-cases/submit-feedback-use-case";

const createFeedBackSpy = jest.fn();
const sendEmailSpy = jest.fn();

const submitFeedBack = new SubmitFeedBackUseCase(
  { create: createFeedBackSpy },
  { sendMail: sendEmailSpy }
);

describe("submit-feedback", () => {
  it("should be able to submit a feedback", async () => {
    await expect(
      submitFeedBack.execute({
        type: "bug",
        comment: "comentário",
        screenShot: "data:image/png;base64",
      })
    ).resolves.not.toThrow();

    expect(createFeedBackSpy).toHaveBeenCalled()
    expect(sendEmailSpy).toHaveBeenCalled()
  });

  it("should not be able to submit a feedback without a type", async () => {
    await expect(
      submitFeedBack.execute({
        type: "",
        comment: "comentário",
        screenShot: "data:image/png;base64",
      })
    ).rejects.toThrow();
  });

  it("should not be able to submit a feedback without a comment", async () => {
    await expect(
      submitFeedBack.execute({
        type: "type",
        comment: "",
        screenShot: "data:image/png;base64",
      })
    ).rejects.toThrow();
  });
});
