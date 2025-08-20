// src/chatbot/ActionProvider.js
import { createChatBotMessage } from "react-chatbot-kit";

class ActionProvider {
  constructor(createChatBotMessage, setStateFunc, createClientMessage) {
    this.createChatBotMessage = createChatBotMessage;
    this.setState = setStateFunc;
    this.createClientMessage = createClientMessage;
  }

  updateState(message) {
    this.setState((prev) => ({
      ...prev,
      messages: [...prev.messages, message],
    }));
  }

  handleSkills() {
    const msg = this.createChatBotMessage(
      "🛠 Rahul is skilled in React, Redux, TailwindCSS, SCSS, JavaScript, Three.js, Bootstrap, JWT Authentication, API Integration, Optimization, and Deployment."
    );
    this.updateState(msg);
  }

  handleProjects() {
    const msg = this.createChatBotMessage(
      "📂 Rahul has worked on Passport Seva, Becton & Dickinson, and multiple personal branding projects. 👉 Navigate to 'Projects' section for details."
    );
    this.updateState(msg);
    document.querySelector('[data-page="projects"]')?.click();
  }

  handleServices() {
    const msg = this.createChatBotMessage(
      "💼 Services Rahul provides:\n- Web App Development\n- Code Optimization\n- Performance Improvements\n- UI/UX Enhancements\n\nWould you like me to draft a mail for you to enquire?"
    );
    this.updateState(msg);
  }

  handleCollaboration() {
    const msg = this.createChatBotMessage(
      "🤝 Rahul is open to collaborating on projects for performance tuning and UI optimization.\n📧 I can generate a quick mail draft for you."
    );
    this.updateState(msg);
  }

  handleContact() {
    const msg = this.createChatBotMessage(
      "📞 Contact Details:\n- Email: singhrah8ul542@gmail.com\n- Phone: 7389832566"
    );
    this.updateState(msg);
  }

  handleMail() {
    const msg = this.createChatBotMessage(
      "📧 Here's a ready mail draft:\n\nSubject: Work Enquiry\n\nHi Rahul,\nI’d like to discuss a project collaboration regarding [service]. Please let me know your availability and rates.\n\nBest Regards,"
    );
    this.updateState(msg);
  }

  handleUnknown() {
    const msg = this.createChatBotMessage(
      "🤔 I didn’t quite get that. You can ask me about Rahul’s skills, projects, services, or contact details."
    );
    this.updateState(msg);
  }
}

export default ActionProvider;