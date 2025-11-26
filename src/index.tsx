import ReactDOM from "react-dom/client";
// import { BrowserRouter } from "react-router-dom";
import "./index.css";
import { ChakraProvider, theme } from "@chakra-ui/react";
import App from "./App";
import 'react-phone-input-2/lib/style.css';
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  // <BrowserRouter>
    <ChakraProvider theme={theme}>
      <App />
    </ChakraProvider>
  // </BrowserRouter>
);
