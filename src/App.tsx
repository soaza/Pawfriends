import "./index.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import DefaultLayout from "./components/Layout";
import DogPage from "./pages/DogPage/DogPage";
import ExcoPage from "./pages/ExcoPage/ExcoPage";
import ActivityPage from "./pages/ActivityPage/ActivityPage";
import MainPage from "./pages/MainPage/MainPage";
import ContactPage from "./pages/ContactPage/ContactPage";
import AboutUsPage from "./pages/AboutUsPage/AboutUsPage";

const App = () => {
  return (
    <Router>
      <div className="App">
        <DefaultLayout />

        <Switch>
          <Route exact path="/dogs" component={DogPage} />
          <Route exact path="/exco" component={ExcoPage} />
          <Route exact path="/about-us" component={AboutUsPage} />
          <Route exact path="/activity" component={ActivityPage} />
          <Route exact path="/contact" component={ContactPage} />
          <Route exact path="/" component={MainPage} />
        </Switch>
      </div>
    </Router>
  );
};

export default App;
