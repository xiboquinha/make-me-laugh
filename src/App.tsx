import { useState } from "react";
import Initial from "./initial";
import One from "./phase/one";
import AppRoute from "./routes";

function App() {
  const [start, setStart] = useState(false);

  return <AppRoute />
}

export default App;
