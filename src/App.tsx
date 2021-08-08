import { FC } from "react";
import "./index.css";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import DefaultLayout from "./components/Layout";
import DogPage from "./pages/DogPage/DogPage";
import ExcoPage from "./pages/ExcoPage/ExcoPage";
import ActivityPage from "./pages/ActivityPage/ActivityPage";
import MainPage from "./pages/MainPage/MainPage";
import ContactPage from "./pages/ContactPage/ContactPage";
import AboutUsPage from "./pages/AboutUsPage/AboutUsPage";

const App: FC = () => {
  // const location = useLocation();
  return (
    <>
      <BrowserRouter>
        <div className="App">
          <DefaultLayout />

          <Switch>
            <Route path="/dogs" component={DogPage}></Route>
            <Route path="/exco" component={ExcoPage}></Route>
            <Route path="/about-us" component={AboutUsPage}></Route>
            <Route path="/activity" component={ActivityPage}></Route>
            <Route path="/contact" component={ContactPage}></Route>
            <Route exact path="/" component={MainPage}></Route>
          </Switch>
        </div>
      </BrowserRouter>
    </>
  );
};

export default App;
