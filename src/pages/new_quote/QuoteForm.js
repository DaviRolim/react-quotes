import { useRef } from "react";
import { Button, Form } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { addQuote } from "../../redux_state/actions/quoteActions";

const QuoteForm = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const titleRef = useRef();
  const authorRef = useRef();
  const quoteRef = useRef();
  //   const [title, setTitle] = useState("");
  //   console.log(title);
  //   function onChangeTitle(e) {
  //     setTitle(e.target.value);
  //   }
  function onSubmit(event) {
    event.preventDefault();
    const title = titleRef.current.value;
    const author = authorRef.current.value;
    const quote = quoteRef.current.value;
    // Do something with the values (add to the list using redux thunk?)
    dispatch(addQuote({ title: title, author: author, quote: quote }));
    navigate("/quotes");
    console.log(`${title} ${author} ${quote}`);
    // Clenaup
    titleRef.current.value = "";
    authorRef.current.value = "";
    quoteRef.current.value = "";
  }
  return (
    <Form onSubmit={onSubmit}>
      <Form.Group className="mb-3">
        <Form.Label>Title</Form.Label>
        <Form.Control
          type="text"
          placeholder="Awareness"
          className="mb-3"
          ref={titleRef}
          //   value={title}
          //   onChange={onChangeTitle}
        />
        <Form.Label>Author</Form.Label>
        <Form.Control
          type="text"
          placeholder="Anthony De Mello"
          ref={authorRef}
        />
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label>Quote</Form.Label>
        <Form.Control as="textarea" rows={3} ref={quoteRef} />
      </Form.Group>
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
  );
};
export default QuoteForm;
