import { Quiz } from "./pages/Quiz";
import { Home } from "./pages/Home";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>

        <Route exact path="/quiz">
          <Quiz />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
