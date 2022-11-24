import React, { useEffect, useMemo } from "react";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";

import QuoteItem from "./QuoteItem";
import { useDispatch, useSelector } from "react-redux";
import { fetchQuotes } from "../../redux_state/actions/fetchDailyQuotes";

let isInitial = true;

const ListQuotes = () => {
  const dispatch = useDispatch();
  const state = useSelector((state) => state);
  const { quoteReducer } = state;
  const { quotes: quoteItems } = quoteReducer;
  // const { isLoading } = UI;

  useEffect(() => {
    if (isInitial) {
      isInitial = false;
      return;
    }
    dispatch(fetchQuotes());
  }, [dispatch]);

  if (quoteItems.length === 0) {
    return <h1>No Quotes</h1>;
  }
  return (
    <React.Fragment>
      <Container fluid className="text-center">
        <Col className="align-items-center">
          {quoteItems.map((item) => {
            return <QuoteItem quote={item} key={item.id} />;
          })}
        </Col>
      </Container>
    </React.Fragment>
  );
};

export default ListQuotes;
