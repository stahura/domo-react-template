import React from "react";
import { MuiThemeProvider } from "@material-ui/core/styles";
import theme from "./styles/theme";
import TestComponent from "../src/components/TestComponent"

function App() {
  return (
    <MuiThemeProvider theme={theme}>
      <div className="App">
        <TestComponent />
      </div>
    </MuiThemeProvider>
  );
}

export default App;

//<MuiThemeProvider theme={theme}>
