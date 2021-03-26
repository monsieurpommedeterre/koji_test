import Topics from './components/Topics';
import Topic from './components/Topic';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

function App() {
  return (
    <Router>
    <Switch>
      <Route component={Topic} path="/topic/:topicId" />
      <Route component={Topics} path="/" />
    </Switch>
    </Router>
  );
}

export default App;
