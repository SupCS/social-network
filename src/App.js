import "./App.css";
import React, { Suspense, Component } from "react";
import Navbar from "./components/Navbar/Navbar";
import { HashRouter, Routes, Route, Navigate } from "react-router-dom";
import HeaderContainer from "./components/Header/HeaderContainer";
import LoginPage from "./components/Login/Login";
import { connect } from "react-redux";
import { compose } from "redux";
import { initializeApp } from "./redux/app-reducer";
import Preloader from "./components/common/Preloader/Preloader";
import ErrorBoundary from "./ErrorBoundary";

const DialogsContainer = React.lazy(() =>
  import("./components/Dialogs/DialogsContainer")
);
const ProfileContainer = React.lazy(() =>
  import("./components/Profile/ProfileContainer")
);
const UsersContainer = React.lazy(() =>
  import("./components/Users/UsersContainer")
);

class App extends Component {
  componentDidMount() {
    this.props.initializeApp();
  }
  render() {
    if (!this.props.initialized) {
      return <Preloader></Preloader>;
    }
    return (
      <HashRouter>
        <div className="app-wrapper">
          <HeaderContainer />
          <Navbar />
          <div className="app-wrapper-content">
            <ErrorBoundary>
              <Suspense
                fallback={
                  <div>
                    <Preloader />
                  </div>
                }
              >
                <Routes>
                  <Route
                    path="/profile/:userId?"
                    element={<ProfileContainer />}
                  />
                  <Route path="/dialogs/*" element={<DialogsContainer />} />
                  <Route path="/users" element={<UsersContainer />} />
                  <Route path="/login" element={<LoginPage />} />
                  <Route path="/" element={<Navigate to="/login" replace />} />
                </Routes>
              </Suspense>
            </ErrorBoundary>
          </div>
        </div>
      </HashRouter>
    );
  }
}

const mapStateToProps = (state) => ({
  initialized: state.app.initialized,
});

export default compose(connect(mapStateToProps, { initializeApp }))(App);
