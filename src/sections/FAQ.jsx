import { useState } from "react";
import { Plus, Minus } from "lucide-react";


const faqs = [
  {
    question: "What services does Evara Solution provide?",
    answer:
      "We provide Shopify development, WordPress development, frontend development, MERN stack development, app development, UI/UX design, and digital marketing services.",
  },
  {
    question: "Do you build custom websites?",
    answer:
      "Yes. We create fully custom, responsive, and premium websites based on your brand, goals, and business requirements.",
  },
  {
    question: "How long does a website project take?",
    answer:
      "A basic website usually takes 1–2 weeks, while advanced Shopify, WordPress, or custom frontend projects may take 3–6 weeks depending on features.",
  },
  {
    question: "Do you provide support after launch?",
    answer:
      "Yes. We provide post-launch support, bug fixing, performance optimization, and future improvements.",
  },
  {
    question: "Can you redesign my existing website?",
    answer:
      "Absolutely. We can redesign your current website with a modern premium look, better user experience, and improved performance.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section className="faq-section">
      <div className="faq-glow faq-glow-left"></div>
      <div className="faq-glow faq-glow-right"></div>

      <div className="faq-container">
        <div className="faq-header">
          <span>FAQ</span>
          <h2>Frequently Asked Questions</h2>
          <p>
            Everything you need to know before starting your premium digital
            project with us.
          </p>
        </div>

        <div className="faq-list">
          {faqs.map((item, index) => (
            <div
              className={`faq-item ${openIndex === index ? "active" : ""}`}
              key={index}
              onClick={() => setOpenIndex(openIndex === index ? null : index)}
            >
              <div className="faq-question">
                <h3>{item.question}</h3>

                <div className="faq-icon">
                  {openIndex === index ? <Minus size={20} /> : <Plus size={20} />}
                </div>
              </div>

              <div className="faq-answer">
                <p>{item.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}