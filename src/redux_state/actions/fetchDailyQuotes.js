import axios from "axios";
export const fetchQuotes = () => async (dispatch) => {
  try {
    const { data } = await axios.get(
      "https://wyzvtfm3nrfmw3ycyobn5u6fum0wqyqk.lambda-url.us-east-1.on.aws/?id=mQl6I22XueWsGgIhTW0f6T19f132"
    );
    const { quotes } = data;
    const dailyQuotes = quotes.map((quote) => {
      return {
        ...quote,
        text: quote.highlight.highlight,
        id: Math.floor(Math.random() * 1000).toString(),
      };
    });
    dispatch({ type: "fetchQuotes", payload: dailyQuotes });
  } catch (error) {
    console.log(error);
  }
};
