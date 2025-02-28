// App.tsx
import React, { useState } from "react";
import "./App.css";

const App: React.FC = () => {
  const [email, setEmail] = useState<string>("");

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle email submission logic here
    console.log("Email submitted:", email);
    setEmail("");
  };

  return (
    <div className="app-container">
      <div className="background-gradient">
        <div className="content-container">
          <div className="logo-container">
            <div className="logo-item logo-item-1"></div>
            <div className="logo-item logo-item-2"></div>
            <div className="logo-item logo-item-3"></div>
            <div className="logo-item logo-item-4"></div>
          </div>

          <div className="text-content">
            <h1 className="title">HackMIT 2025</h1>
            <h2 className="date">September 13-14</h2>

            <p className="notification-text">
              Get notifications when applications open!
            </p>

            <form onSubmit={handleSubmit} className="email-form">
              <input
                type="email"
                value={email}
                onChange={handleEmailChange}
                placeholder="Your email"
                className="email-input"
                required
              />
              <button type="submit" className="notify-button">
                Notify me
              </button>
            </form>
          </div>
        </div>

        <footer className="footer">
          <p>
            Interested in sponsoring us? Fill out{" "}
            <a href="#" className="link">
              this interest form
            </a>{" "}
            or reach out at{" "}
            <a href="mailto:sponsor@hackmit.org" className="link">
              sponsor@hackmit.org
            </a>
            .
          </p>
        </footer>
      </div>

      <div className="mini-logo">
        <div className="mini-logo-item mini-logo-item-1">H</div>
        <div className="mini-logo-item mini-logo-item-2">A</div>
        <div className="mini-logo-item mini-logo-item-3">C</div>
        <div className="mini-logo-item mini-logo-item-4">K</div>
      </div>

      <div className="status-bar">
        <div className="status-item">1</div>
        <div className="status-item">2</div>
        <div className="status-item">3</div>
        <div className="status-progress">100% at jetx</div>
        <div className="status-info">
          BAT 83.93% |36.2 GiB| 0.78 (4.3 GiB + 210.4 MiB | 2.5 GiB) 02-28 11:02
          PM
        </div>
      </div>
    </div>
  );
};

export default App;
