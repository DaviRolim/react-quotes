const initialState = { isLoading: false };

function UIreducer(state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case "loading":
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

export default UIreducer;