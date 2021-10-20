import './App.css';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Home from './component/Home';

function App() {
  return (
    <div >
       <Router>
       <Switch>
       <Route path='/' exact component={Home} />
      </Switch>
      </Router>
    </div>
  );
}

export default App;
