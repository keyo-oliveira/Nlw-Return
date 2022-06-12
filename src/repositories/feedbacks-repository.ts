export interface FeedbacksRepository {
    create: (data: FeedBackCreateData) => Promise<void>;
}

export interface FeedBackCreateData {
    type:string;
    comment: string;
    screenShot?: string;
}