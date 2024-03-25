import { Message } from "../types";

import * as sendGrid from "@sendgrid/mail";

sendGrid.setApiKey(import.meta.env.VITE_SENDGRID_API_KEY);

const sendEmail = async (newMessage: Partial<Message>) => {
  try {
    await sendGrid.send({
      to: "hello@andreaprat.cat",
      from: "hello@andreaprat.cat",
      subject: `[Nou missatge del formulari de la web]`,
      html: `<p>Nou missastge del formulari de la web rebut:</p>
      <ul>
      <li><strong>Name:</strong> ${newMessage.name}</li>
      <li><strong>Email:</strong> ${newMessage.email}</li>
      <li><strong>Favorite color:</strong> ${newMessage.favoriteColor}</li>
      <li><strong>Subject:</strong> ${newMessage.subject}</li>
      <li><strong>Message:</strong> ${newMessage.message}</li>
      </ul>`,
    });
  } catch (error) {
    return error;
  }
};

export default sendEmail;
