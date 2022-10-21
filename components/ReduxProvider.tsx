import React, { FC } from "react";
import { Provider } from "react-redux";
import store from "../store";

interface ReduxProviderProps {
  // children: JSX.Element | JSX.Element[];
  children: any;
}

const ReduxProvider: FC<ReduxProviderProps> = ({ children }) => {
  return <Provider store={store}>{children}</Provider>;
};

export default ReduxProvider;
