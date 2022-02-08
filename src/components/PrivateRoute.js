import React, { useContext } from "react";
import { Route, Redirect } from "react-router-dom";

// import context
import { AppContext } from "../contexts/GlobalContext";
import SpinnerBorderDark from "../components/SpinnerBorderDark";

export default function PrivateRoute({ component: Component, ...rest }) {
  const [state] = useContext(AppContext);
  const { isLoading, isLogin } = state;

  return (
    <Route
      {...rest}
      render={(props) =>
        isLoading ? (
          <SpinnerBorderDark />
        ) : isLogin ? (
          <Component {...props} />
        ) : (
          <Redirect to="/" />
        )
      }
    />
  );
}
