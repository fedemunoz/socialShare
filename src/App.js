import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import AddButton from './components/layout/AddButton';
import BottomNav from './components/layout/BottomNav';
import EmailPage from './components/pages/EmailPage';
import MyQrPage from './components/pages/MyQrPage';
import AccountsPage from './components/pages/AccountsPage';
import PageState from './context/page/PageState';


function App() {
  return (
    <PageState>
      <Router>
        <div className="App">
          <Navbar title="Page"/>
          <div className="main-container">
            <Switch>
              <Route exact path='/email' component={EmailPage} />
              <Route exact path='/my-qr' component={MyQrPage} />
              <Route exact path='/accounts' component={AccountsPage} />
              <Route component={EmailPage} />
            </Switch>
            <AddButton /> 
          </div>
          <BottomNav /> 
        </div>
      </Router>
    </PageState>
  );
}

export default App;
