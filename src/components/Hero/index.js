import { Component } from "react";
import "./index.css";

class Hero extends Component {
  render() {
    return (
      <section className="hero">
        <div className="hero-content">
          <h1 className="hero-title">Master Your Interview Skills with AI</h1>
          <p className="hero-subtitle">
            Practice with our AI-powered interviewer and get instant feedback to
            boost your confidence and land your dream job.
          </p>

          <div className="hero-buttons">
            <a href="/start" className="btn-primary">
              Start Practice Interview
            </a>
            <a href="/learn" className="btn-secondary">
              Learn More
            </a>
          </div>
        </div>

        <div className="stats-container">
          <div className="stat-card">
            <h2>93%</h2>
            <p>Students experience interview anxiety</p>
          </div>
          <div className="stat-card">
            <h2>24/7</h2>
            <p>AI interviewer availability</p>
          </div>
          <div className="stat-card">
            <h2>85%</h2>
            <p>Score improvement rate</p>
          </div>
        </div>
      </section>
    );
  }
}

export default Hero;
