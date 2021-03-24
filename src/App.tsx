import React, { FC } from "react";
import ReactDOM from "react-dom";
import "./index.css";
import {
  BrowserRouter,
  Route,
  Switch,
  useLocation,
  useHistory,
  withRouter,
} from "react-router-dom";
import DefaultLayout from "./components/Layout";
import DogPage from "./pages/DogPage/DogPage";
import ExcoPage from "./pages/ExcoPage/ExcoPage";
import { AnimatePresence, motion } from "framer-motion";

const pageVariants = {
  initial: {
    opacity: 0,
    x: "-100vw",
    scale: 0.8,
  },
  in: {
    opacity: 1,
    x: 0,
    scale: 1,
  },
  out: {
    opacity: 0,
    x: "100vw",
    scale: 1.2,
  },
};
const pageTransition = {
  type: "tween",
  ease: "anticipate",
  duration: 1,
};

const App: FC = () => {
  const location = useLocation();
  return (
    <>
      <DefaultLayout page={"dogs"}></DefaultLayout>

      <main style={{ overflowX: "hidden" }}>
        <div className="App">
          <AnimatePresence exitBeforeEnter>
            <Switch location={location} key={location.pathname}>
              <Route exact path="/" component={DogPage}></Route>
              <Route path="/exco" component={ExcoPage}></Route>
            </Switch>
          </AnimatePresence>
        </div>
      </main>
    </>
  );
};

export default App;
