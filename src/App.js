import "./App.scss";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import PageState from "./context/page/PageState";
import AccountsState from "./context/accounts/AccountsState";
import NotificationsState from "./context/notifications/NotificationsState";

import Navbar from "./components/layout/Navbar";
import BottomNav from "./components/layout/BottomNav";
import Alert from "./components/layout/Alert";
import ConfirmDialog from "./components/layout/ConfirmDialog";
import DownloadAppPopover from "./components/layout/DownloadAppPopover";

import HomePage from "./components/pages/HomePage";
import ShowQrPage from "./components/pages/ShowQrPage";
import AddAccountPage from "./components/pages/AddAccountPage";
import NotFoundPage from "./components/pages/NotFoundPage";

import constants from "./shared/constants";

function App() {
  return (
    <PageState>
      <NotificationsState>
        <AccountsState>
          <Router>
            <div className='App'>
              <Navbar title='Page' />
              <div className='main-container'>
                <Alert />
                <ConfirmDialog />
                <Switch>
                  <Route
                    exact
                    path={constants.HOME_PAGE.route}
                    component={HomePage}
                  />
                  <Route
                    exact
                    path={`/${constants.SHOW_QR_PAGE.route}`}
                    component={ShowQrPage}
                  />
                  <Route
                    exact
                    path={`/${constants.ADD_ACCOUNT_PAGE.route}`}
                    component={AddAccountPage}
                  />
                  <Route component={NotFoundPage} />
                </Switch>
              </div>
              <BottomNav />
            </div>
          </Router>
          <DownloadAppPopover />
        </AccountsState>
      </NotificationsState>
    </PageState>
  );
}

export default App;
