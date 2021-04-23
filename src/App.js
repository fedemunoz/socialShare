import "./App.scss";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbar from "./components/layout/Navbar";
import BottomNav from "./components/layout/BottomNav";
import EmailPage from "./components/pages/EmailPage";
import MyQrPage from "./components/pages/MyQrPage";
import AccountsPage from "./components/pages/AccountsPage";
import ShowQrPage from "./components/pages/ShowQrPage";

import PageState from "./context/page/PageState";
import AccountsState from "./context/accounts/AccountsState";
import DialogState from "./context/dialog/DialogState";
import ConfirmDialog from "./components/layout/ConfirmDialog";

function App() {
  return (
    <PageState>
      <DialogState>
        <AccountsState>
          <ConfirmDialog />
          <Router>
            <div className="App">
              <Navbar title="Page" />
              <div className="main-container">
                <Switch>
                  <Route exact path="/email" component={EmailPage} />
                  <Route exact path="/" component={MyQrPage} />
                  <Route exact path="/accounts" component={AccountsPage} />
                  <Route exact path="/show-qr" component={ShowQrPage} />
                </Switch>
              </div>
              <BottomNav />
            </div>
          </Router>
        </AccountsState>
      </DialogState>
    </PageState>
  );
}

export default App;
