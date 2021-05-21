import { Quiz } from "./pages/Quiz";
import { Home } from "./pages/Home";

import { Route, Switch } from "react-router-dom";
import { HashRouter as Router } from 'react-router-dom'
import { TranslatorProvider } from 'src/context/TranslatorContext'

export default () => <TranslatorProvider>
  <App />
</TranslatorProvider>

function App() {  
  return (
    <Router basename={process.env.PUBLIC_URL}>
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