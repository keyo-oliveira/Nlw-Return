import { MailService, SendEmailData } from "../mail-service";
import nodemailer from "nodemailer";

const transport = nodemailer.createTransport({
  host: "smtp.mailtrap.io",
  port: 2525,
  auth: {
    user: "24cfb3dc9cb67b",
    pass: "99124ed2abc3f1",
  },
});

export class NodeMailerMailService implements MailService {
  async sendMail({subject, body}: SendEmailData) {
    await transport.sendMail({
      from: "Equipe Feedget <main@feedget.com>",
      to: "Keyo <keyo.kb41@gmail.com>",
      subject: subject,
      html: body,
    });
  }
}
