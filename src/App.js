import ListQuotes from "./pages/list_quotes/ListQuotes";
import { Routes, Route, Navigate } from "react-router-dom";
import Layout from "./components/layout/Layout";
import "bootstrap/dist/css/bootstrap.min.css";
import NewQuote from "./pages/new_quote/NewQuote";
import { ChakraProvider } from "@chakra-ui/react";

function App() {
  return (
    <Layout>
      <ChakraProvider>
        <Routes>
          <Route path="/" element={<Navigate replace to="/quotes" />} />
          <Route path="/quotes" element={<ListQuotes />}></Route>
          <Route path="/new-quote" element={<NewQuote />}></Route>
        </Routes>
      </ChakraProvider>
    </Layout>
  );
}

export default App;
