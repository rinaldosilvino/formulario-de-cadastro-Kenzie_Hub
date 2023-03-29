import {Router} from "./routes/Router"
import Global from "./styles/global";
import "./App.css";
import { Toaster } from "react-hot-toast";
import { AuthProvider } from "./contexts/AuthContext";
import React from "react";

export const App = () => {
  return (
    <div id="App">
      <AuthProvider>
        <Global />
        <Router />
        <Toaster />
      </AuthProvider>
    </div>
  );
};
