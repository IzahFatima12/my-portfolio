import { useState } from "react";
import { Alert, Container } from "react-bootstrap";

function NewsLetter() {
  const [input, setInput] = useState('');
  const [message, setMessage] = useState('');

  const inputHandler = (e) => {
    setInput(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!input) return;

    try {
      const res = await fetch("/api/Newsletter", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email: input })
      });

      const data = await res.json();

      if (res.ok) {
        setInput("");
        setMessage("Thank you for subscribing");
      } else {
        setMessage(data.error || "Failed to subscribe. Try again.");
      }
    } catch (err) {
      console.error("Network error:", err);
      setMessage("Network error. Try again.");
    }

    setTimeout(() => setMessage(""), 3000);
  };

  return (
    <div className="newsletter-bx">
      <Container>
        <form onSubmit={handleSubmit}>
          <div className="newsletter-content">
            <h3>
              Subscribe to our
              <br />
              Newsletter & get the latest
              <br />
              news
            </h3>
            <div className="new-email-bx">
              <input type="email" onChange={inputHandler} value={input} required />
              <button type="submit">Submit</button>
            </div>
          </div>
        </form>
      </Container>
      {message && <Alert>{message}</Alert>}
    </div>
  );
}

export default NewsLetter;
