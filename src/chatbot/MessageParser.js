let messages= [];

class MessageParser {
  constructor(actionProvider, state) {
    this.actionProvider = actionProvider;
    this.state = state;
  }

  parse(message) {
  
    messages.push(message);
      console.log(messages);
  }
}
export default MessageParser;