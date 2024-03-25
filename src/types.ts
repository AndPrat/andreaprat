export interface Message {
  name: string;
  email: string;
  favoriteColor: string;
  subject: string;
  message: string;
}

export interface MessageApi {
  messages: MessageApi[];
}

export interface MessageApi extends Partial<Message> {}
