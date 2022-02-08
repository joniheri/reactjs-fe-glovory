import { useContext } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

// import react-router-dom
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

// import config
import { APIv1, setAuthToken } from "./config/Api";

// import context
import { AppContext } from "./contexts/GlobalContext";

// import components
import PrivateRoute from "./components/PrivateRoute";
import Header from "./components/Header";
import Footer from "./components/Footer";

// import pages
import HomePage from "./pages/HomePage";
import About from "./pages/About";
import Wisata from "./pages/Wisata";

// // CheckTokenInLocalStorageIsExist
// if (localStorage.token) {
//   setAuthToken(localStorage.token);
//   // console.log("DataToken: ", localStorage.token);
// }
// // EndCheckTokenInLocalStorageIsExist

function App() {
  // const history = useHistory();
  const [state, dispatch] = useContext(AppContext);

  return (
    <Router>
      {/* Navbar */}
      <div style={{ marginTop: "55px" }}>
        <Header />
      </div>
      {/* End Navbar */}

      {/* HomePage */}
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/about" component={About} />
        <Route exact path="/wisata" component={Wisata} />
      </Switch>
      {/* EndHomePage */}

      {/* Footer */}
      <div>
        <Footer />
      </div>
      {/* EndFooter */}
    </Router>
  );
}

export default App;
