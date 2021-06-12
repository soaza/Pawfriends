import React, { FC } from "react";
import ReactDOM from "react-dom";
import "./index.css";
import { Route, Switch, useLocation } from "react-router-dom";
import DefaultLayout from "./components/Layout";
import DogPage from "./pages/DogPage/DogPage";
import ExcoPage from "./pages/ExcoPage/ExcoPage";
import ActivityPage from "./pages/ActivityPage/ActivityPage";
import MainPage from "./pages/MainPage/MainPage";
import ContactPage from "./pages/ContactPage/ContactPage";

const App: FC = () => {
  const location = useLocation();
  return (
    <>
      <DefaultLayout page={location.pathname}></DefaultLayout>

      <div className="App">
        <Switch location={location} key={location.pathname}>
          <Route exact path="/dogs" component={DogPage}></Route>
          <Route exact path="/exco" component={ExcoPage}></Route>
          <Route exact path="/activity" component={ActivityPage}></Route>
          <Route exact path="/contact" component={ContactPage}></Route>
          <Route path="/" component={MainPage}></Route>
        </Switch>
      </div>
    </>
  );
};

export default App;
