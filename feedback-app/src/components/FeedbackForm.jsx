import { useState } from "react";
import RatingSelect from "./RatingSelect";
import Button from "./shared/Button";
import Card from "./shared/Card";

function FeedbackForm() {
  const [text, setText] = useState("");
  const [rating, setRating] = useState(10);
  const [btnDisabled, setBtnDisabled] = useState(true);
  const [message, setMessage] = useState("No Error Occured.");

  const handleTextChange = (e) => {
    if (text === "") {
      setBtnDisabled(true);
      setMessage(null);
    } else if (text !== "" && text.trim().length <= 10) {
      setBtnDisabled(true);
      setMessage("Text Must be 10 Characters.");
    } else {
      setBtnDisabled(false);
      setMessage(null);
    }
    setText(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <Card>
      <form onSubmit={handleSubmit}>
        <h2>Service Rating to Us.</h2>
        <RatingSelect
          select={(rating) => {
            console.log(rating);
            setRating(rating);
          }}
        />
        <div className="input-group">
          <input
            onChange={handleTextChange}
            type="text"
            placeholder="Enter your rating"
            value={text}
          />
          <Button type="submit" version="secondary" isDisabled={btnDisabled}>
            Send
          </Button>
        </div>
        {message && <div className="message">{message}</div>}
      </form>
    </Card>
  );
}

export default FeedbackForm;
