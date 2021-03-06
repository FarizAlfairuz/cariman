import './App.css'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import SearchPage from './pages/SearchPage'
import Result from './pages/ResultPage'
import Detail from './pages/DetailPage'

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={SearchPage} ></Route>
        <Route path="/result/:search" component={(props) => <Result {...props} />}></Route>
        <Route path="/result" exact component={Result}></Route>
        <Route path="/detail/:id" component={(props) => <Detail {...props} /> }></Route>
      </Switch>
    </Router>
  );
}

export default App;
