import { useState } from "react";
import { Alert, Container } from "react-bootstrap";
import { db, serverTimestamp } from '../firebase';
import { collection, addDoc } from 'firebase/firestore';

function NewsLetter() {
  const [input, setInput] = useState('');
  const [message, setMessage] = useState('');

  const inputHandler = (e) => {
    setInput(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (input) {
      console.log(input);

      try {
        await addDoc(collection(db, "emails"), {
          email: input,
          time: serverTimestamp(), // Use the imported serverTimestamp function
        });
        setInput("");
        setMessage("Thank you for subscribing");
        setTimeout(() => {
          setMessage("");
        }, 3000);
      } catch (error) {
        console.error("Error adding document: ", error);
        setMessage("Failed to subscribe. Please try again.");
        setTimeout(() => {
          setMessage("");
        }, 3000);
      }
    }
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
              <input type="email" onChange={inputHandler} value={input} />
              <button type="submit">Submit</button>
            </div>
          </div>
        </form>
      </Container>
      {message && <Alert>{message}</Alert>} {/* Conditional rendering for message */}
    </div>
  );
}

export default NewsLetter;
