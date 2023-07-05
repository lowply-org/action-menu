import { ThemeProvider } from "@primer/react";
import "./App.css";
import { ActionMenuComponent } from "./ActionMenuComponent";

function App() {
  return (
    <ThemeProvider>
      <div className="App">
        <ActionMenuComponent />
      </div>
    </ThemeProvider>
  );
}

export default App;
