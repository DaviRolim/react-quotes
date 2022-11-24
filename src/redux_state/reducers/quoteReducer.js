const initialState = { quotes: [] };

function quoteReducer(state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case "addQuote":
      console.log("addQuoteReducer");
      console.log(payload);
      console.log(state.quotes);
      return {
        quotes: [...state.quotes, payload],
      };
    case "fetchQuotes":
      console.log(payload);
      return {
        quotes: payload,
      };

    default:
      return state;
  }
}

export default quoteReducer;
