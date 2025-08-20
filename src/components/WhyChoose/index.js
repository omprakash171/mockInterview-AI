import { Component } from "react";
import "./index.css";

class WhyChoose extends Component {
  render() {
    const features = [
      {
        icon: "🤖",
        title: "AI-Powered Interviewer",
        description:
          "Practice with our advanced AI that adapts to your responses and provides realistic interview scenarios.",
      },
      {
        icon: "📊",
        title: "Real-time Feedback",
        description:
          "Get instant analysis of your performance, including communication clarity, technical knowledge, and confidence levels.",
      },
      {
        icon: "🎯",
        title: "Targeted Practice",
        description:
          "Choose from technical, behavioral, case study, and general interviews across multiple industries.",
      },
      {
        icon: "📈",
        title: "Track Progress",
        description:
          "Monitor your improvement over time with detailed analytics and performance trends.",
      },
    ];

    return (
      <section className="features-section">
        <h2 className="features-title">Why Choose MockInterview AI?</h2>
        <div className="features-grid">
          {features.map((feature, index) => (
            <div key={index} className="feature-card">
              <div className="feature-icon">{feature.icon}</div>
              <h3 className="feature-title">{feature.title}</h3>
              <p className="feature-description">{feature.description}</p>
            </div>
          ))}
        </div>
      </section>
    );
  }
}

export default WhyChoose;
