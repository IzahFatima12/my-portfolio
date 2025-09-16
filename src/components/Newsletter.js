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
      const res = await fetch("/api/newsletter", {
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
              Subscribe to our<br />
              Newsletter & get the latest<br />
              news
            </h3>
            <div className="new-email-bx">
              <input
                type="email"
                onChange={inputHandler}
                value={input}
                placeholder="Enter your email"
                required
              />
              <button type="submit">Submit</button>
            </div>
          </div>
        </form>
      </Container>
      {message && <Alert className="mt-3">{message}</Alert>}

      <style jsx>{`
  .newsletter-bx {
    background: #d2cbc9;
    border-radius: 4rem;            /* more oval */
    padding: 3.5rem 5rem;
    margin: 5rem auto;
    max-width: 1200px;               /* wider */
    width: 90%;
    box-shadow: 0 8px 20px rgba(0, 0, 0, 0.1);
    transition: transform 0.3s ease;
  }
  .newsletter-bx:hover {
    transform: translateY(-2px);
  }

  .newsletter-content {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 3rem;
    flex-wrap: wrap;
  }

  .newsletter-content h3 {
    color: #083d33;
    font-size: 2rem;
    line-height: 1.3;
    max-width: 400px;
    margin: 0;
  }

  .new-email-bx {
    display: flex;
    align-items: center;
    background: #fff;
    border-radius: 3rem;            /* more oval input */
    overflow: hidden;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
    width: 100%;
    max-width: 500px;                /* slightly longer input */
  }

  .new-email-bx input {
    border: none;
    outline: none;
    padding: 1.2rem 1.8rem;
    flex: 1;
    font-size: 1rem;
  }

  .new-email-bx button {
    background: #083d33;
    color: #fff;
    border: none;
    padding: 1.2rem 2.5rem;
    cursor: pointer;
    font-size: 1rem;
    font-weight: 600;
    transition: background 0.3s ease;
  }

  .new-email-bx button:hover {
    background: #0e5b4d;
  }

  @media (max-width: 768px) {
    .newsletter-content {
      flex-direction: column;
      text-align: center;
    }
    .newsletter-content h3 {
      max-width: 100%;
    }
  }
`}</style>

    </div>
  );
}

export default NewsLetter;
