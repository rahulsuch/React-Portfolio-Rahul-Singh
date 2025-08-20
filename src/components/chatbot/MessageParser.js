// src/chatbot/MessageParser.js
class MessageParser {
  constructor(actionProvider) {
    this.actionProvider = actionProvider;
  }

  parse(message) {
    const lower = message.toLowerCase();

    if (lower.includes("skill") || lower.includes("tech")) {
      this.actionProvider.handleSkills();
    } else if (lower.includes("project")) {
      this.actionProvider.handleProjects();
    } else if (lower.includes("service", "developed", "application development")) {
      this.actionProvider.handleServices();
    } else if (lower.includes("collaborate", "collaboration") || lower.includes("optimize", "optimization")) {
      this.actionProvider.handleCollaboration();
    } else if (lower.includes("contact",) || lower.includes("phone")) {
      this.actionProvider.handleContact();
    } else if (lower.includes("mail", "connect") || lower.includes("email")) {
      this.actionProvider.handleMail();
    } else {
      this.actionProvider.handleUnknown();
    }
  }
}

export default MessageParser;