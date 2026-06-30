"use client";

import { useMemo, useState } from "react";

type ChatMessage = {
  sender: "user" | "bot";
  text: string;
};

const guideAnswers = [
  {
    keywords: ["jr", "job responsibility", "responsibility"],
    answer:
      "JR must be updated monthly. Check the JR date, employee count, division of labor, and whether resigned employees are kept and highlighted in grey. The updated JR should be uploaded to WeDrive by the 31st of each month.",
  },
  {
    keywords: ["weekly", "to-do", "todo", "task", "tasks"],
    answer:
      "The Weekly To-Do List must be updated daily with progress and remarks. When a task is completed, staff should add the date of accomplishment. Members should update it every Friday morning, and OICs should check it every Friday afternoon.",
  },
  {
    keywords: ["calendar", "schedule"],
    answer:
      "Employees should update their calendar daily. OICs should check their members’ calendars every Friday. Monitoring staff may randomly check 1 to 2 employees per department.",
  },
  {
    keywords: ["work plan", "ogsa", "objective", "goal", "strategy", "action plan"],
    answer:
      "The Work Plan must follow OGSA format. Objectives should be qualitative and descriptive. Goals should be quantitative and measurable. Strategies should connect to the objectives and goals. Action plans should be realistic, feasible, and arranged with a timetable. The work plan should usually be 1 to 2 pages only.",
  },
  {
    keywords: ["kpi", "monthly kpi", "calculation"],
    answer:
      "Monthly KPI should follow the correct number format. Example: if January is 20 and February adds 10 new items, February should be written as 30 (+10). If there is no data, use N/A or /.",
  },
  {
    keywords: ["reflection", "monthly reflection", "work reflection"],
    answer:
      "Monthly Work Reflection must be submitted by the 5th of each month. It should be specific, clear, and around one page long. The OIC reviews it and forwards it for checking.",
  },
  {
    keywords: ["performance", "evaluation", "quarterly"],
    answer:
      "Performance Evaluation is conducted quarterly. First Evaluation covers January to March, Second covers April to June, Third covers July to September, and Fourth covers October to December.",
  },
  {
    keywords: ["goal link", "goal", "progress"],
    answer:
      "Goal Link should be updated based on business needs. Project leaders and related personnel should update progress every Friday. Monitoring staff should check updates every Monday.",
  },
  {
    keywords: ["deadline", "due", "when"],
    answer:
      "Common monitoring deadlines: JR is updated by the 31st, Work Plan is reviewed by the 1st and checked by the 5th, KPI and Monthly Work Reflection are submitted by the 5th, and Weekly To-Do Lists are checked every Friday.",
  },
];

function findAnswer(question: string) {
  const lowerQuestion = question.toLowerCase();

  const matchedAnswer = guideAnswers.find((item) =>
    item.keywords.some((keyword) => lowerQuestion.includes(keyword))
  );

  if (matchedAnswer) {
    return matchedAnswer.answer;
  }

  return "I could not find an exact answer. Please check the Monitoring Tools, Checking Schedule, Templates, or FAQ pages. You may also ask using keywords such as JR, KPI, Work Plan, Calendar, Weekly To-Do List, Reflection, Performance Evaluation, or Goal Link.";
}

export default function GuideChatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      sender: "bot",
      text: "Hello! I can help answer questions about Dadi monitoring tools. You can ask about JR, Weekly To-Do List, Calendar, Work Plan, KPI, Monthly Reflection, Performance Evaluation, or Goal Link.",
    },
  ]);

  const suggestedQuestions = useMemo(
    () => [
      "How do I check JR?",
      "What is the KPI format?",
      "When should the Weekly To-Do List be checked?",
      "What should be included in a Work Plan?",
    ],
    []
  );

  const sendMessage = (question?: string) => {
    const finalQuestion = question || input.trim();

    if (!finalQuestion) return;

    const botAnswer = findAnswer(finalQuestion);

    setMessages((currentMessages) => [
      ...currentMessages,
      { sender: "user", text: finalQuestion },
      { sender: "bot", text: botAnswer },
    ]);

    setInput("");
  };

  return (
    <div className="chatbot-wrapper">
      {isOpen && (
        <div className="chatbot-panel">
          <div className="chatbot-header">
            <div>
              <strong>Dadi Monitoring Assistant</strong>
              <span>Internal guide chatbot</span>
            </div>
            <button type="button" onClick={() => setIsOpen(false)}>
              ×
            </button>
          </div>

          <div className="chatbot-messages">
            {messages.map((message, index) => (
              <div
                key={`${message.sender}-${index}`}
                className={`chatbot-message ${
                  message.sender === "user" ? "user-message" : "bot-message"
                }`}
              >
                {message.text}
              </div>
            ))}
          </div>

          <div className="chatbot-suggestions">
            {suggestedQuestions.map((question) => (
              <button
                key={question}
                type="button"
                onClick={() => sendMessage(question)}
              >
                {question}
              </button>
            ))}
          </div>

          <div className="chatbot-input-row">
            <input
              value={input}
              onChange={(event) => setInput(event.target.value)}
              onKeyDown={(event) => {
                if (event.key === "Enter") {
                  sendMessage();
                }
              }}
              placeholder="Ask about monitoring tools..."
            />
            <button type="button" onClick={() => sendMessage()}>
              Send
            </button>
          </div>
        </div>
      )}

      <button
        type="button"
        className="chatbot-toggle"
        onClick={() => setIsOpen((current) => !current)}
      >
        {isOpen ? "Close" : "Ask Guide"}
      </button>
    </div>
  );
}
