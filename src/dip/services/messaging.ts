import { MessagingProtocol } from '../classes/interfaces/messaging-protocol';

export class Messaging implements MessagingProtocol {
  sendMessage(msg: string) {
    console.log('Mensagem enviada:', msg);
  }
}
