export interface MailService {
    sendMail: (data: SendEmailData) => Promise<void>;
}

export interface SendEmailData {
    subject: string;
    body: string;
}