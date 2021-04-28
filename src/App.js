import "./App.scss";
import { lazy, Suspense } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import PageState from "./context/page/PageState";
import AccountsState from "./context/accounts/AccountsState";
import NotificationsState from "./context/notifications/NotificationsState";

import Navbar from "./components/layout/Navbar";
import BottomNav from "./components/layout/BottomNav";
import Alert from "./components/layout/Alert";
import ConfirmDialog from "./components/layout/ConfirmDialog";
import DownloadAppPopover from "./components/layout/DownloadAppPopover";
import Spinner from "./components/layout/Spinner";

import HomePage from "./components/pages/HomePage";
import constants from "./shared/constants";

const AddAccountPage = lazy(() => import("./components/pages/AddAccountPage"));
const NotFoundPage = lazy(() => import("./components/pages/NotFoundPage"));

function App() {
  return (
    <PageState>
      <NotificationsState>
        <AccountsState>
          <Router>
            <Suspense fallback={<Spinner />}>
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
                      path={`/${constants.ADD_ACCOUNT_PAGE.route}`}
                      component={AddAccountPage}
                    />
                    <Route component={NotFoundPage} />
                  </Switch>
                </div>
                <BottomNav />
                <DownloadAppPopover />
              </div>
            </Suspense>
          </Router>
        </AccountsState>
      </NotificationsState>
    </PageState>
  );
}

export default App;
