export const addQuote = (data) => (dispatch) => {
  console.log(data);
  const payload = { id: Math.floor(Math.random() * 10).toString(), ...data };
  dispatch({ type: "addQuote", payload: payload });
};
