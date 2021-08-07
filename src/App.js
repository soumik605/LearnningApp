import './App.css';
import HomePage from './Components/HomePage';
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import ReactPage from './Components/ReactPage';
import Navbar from './Components/Navbar';
import AddPage from './Components/AddPage';
import NodePage from './Components/NodePage';
import EditPage from './Components/EditPage';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/add" component={AddPage} />
          <Route exact path="/getreact" component={ReactPage} />
          <Route exact path="/getreact/:id" component={() => <EditPage subject={"react"} />}/>
          <Route exact path="/getnode" component={NodePage} />
          <Route exact path="/getnode/:id" component={() => <EditPage subject={"node"} />}/>
        </Switch>
        
      </BrowserRouter>
    </div>
  );
}

export default App;
