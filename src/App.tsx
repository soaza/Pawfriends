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
import DogPage from "./pages/DogPage/DogPage";
import ExcoPage from "./pages/ExcoPage/ExcoPage";
import { AnimatePresence, motion } from "framer-motion";

const App: FC = () => {
  return (
    <>
      <div className="App">
        <AnimatePresence>
          <AnimatePresence exitBeforeEnter />
          <motion.div exit={{ opacity: 0 }}>
            <Switch>
              <Route exact path="/" component={DogPage}></Route>
              <Route path="/" component={ExcoPage}></Route>
            </Switch>
          </motion.div>
        </AnimatePresence>
      </div>
    </>
  );
};

export default App;
