import React from "react";
import { MuiThemeProvider } from "@material-ui/core/styles";
import theme from "./styles/theme";

function App() {
  return (
    <MuiThemeProvider theme={theme}>
      <div className="App">
        Test
      </div>
    </MuiThemeProvider>
  );
}

export default App;

//<MuiThemeProvider theme={theme}>
