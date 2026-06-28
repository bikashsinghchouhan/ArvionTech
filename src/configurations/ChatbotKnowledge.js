export const predefinedQuestions = [
  "What services do you offer?",
  "What is your pricing?",
  "Tell me about School Management",
  "How does Payroll Outsourcing work?",
  "How can I contact you?"
];

const knowledgeBase = [
  {
    keywords: ["price", "pricing", "cost", "fee", "charge", "much", "quote"],
    answer: "Our pricing is highly tailored to your specific business requirements and is not disclosed publicly. Please reach out to us via the Contact Us page for a customized quote!"
  },
  {
    keywords: ["support", "maintenance", "help", "issue", "bug", "fix"],
    answer: "We provide comprehensive ongoing support and maintenance for all our software solutions. If you're an existing client, please reach out to your dedicated account manager."
  },
  {
    keywords: ["location", "address", "where", "based", "office", "country"],
    answer: "Arvion Technologies serves clients globally! For our specific office address and contact numbers, please visit our Contact Us page."
  },
  {
    keywords: ["service", "services", "offer", "do you do"],
    answer: "We offer 4 core services: School Management Systems, Payroll Outsourcing, Statutory Registrations, and Accounting Services. Which one would you like to know more about?"
  },
  {
    keywords: ["school", "management", "erp", "student", "attendance", "academic"],
    answer: "Our School Management System is an integrated ERP solution to manage all academic, administrative, and parent-teacher communication seamlessly. It includes features like digital grading and real-time attendance."
  },
  {
    keywords: ["payroll", "outsource", "outsourcing", "talent", "onboarding"],
    answer: "Our Payroll Outsourcing helps you scale operations globally with secure, compliant, and hands-off talent onboarding, payroll processing, and taxes."
  },
  {
    keywords: ["statutory", "registration", "tax", "gst", "incorporation", "legal"],
    answer: "We streamline legal entity setup, tax registration filings (like GST), Import Export IEC processing, and Intellectual Property protection."
  },
  {
    keywords: ["account", "accounting", "bookkeeping", "finance", "audit"],
    answer: "Our Accounting Services ensure compliance, secure ledger management, continuous bookkeeping audits, and strategic financial forecasting."
  },
  {
    keywords: ["contact", "call", "email", "phone", "reach", "touch"],
    answer: "You can reach us at cat@arvion.com, call us at +91 9535764655, or visit our Contact Us page to send a direct message."
  },
  {
    keywords: ["hi", "hello", "hey", "greetings"],
    answer: "Hello! Welcome to Arvion Technologies. How can I help you today?"
  }
];

export const getBotResponse = (userInput) => {
  const lowerInput = userInput.toLowerCase();

  // Find a match based on keywords
  for (let item of knowledgeBase) {
    if (item.keywords.some(keyword => lowerInput.includes(keyword))) {
      return item.answer;
    }
  }

  // Fallback response
  return "Thank you for your question! As an AI assistant for Arvion Technologies, my expertise is focused on our core services: School Management, Payroll Outsourcing, Statutory Registrations, and Accounting. For inquiries outside these areas, please reach out to our team via the Contact Us page, and they would be happy to assist you further.";
};
