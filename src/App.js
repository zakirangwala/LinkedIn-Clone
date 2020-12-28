import React from "react";
import Header from "./Header.js";
import Sidebar from "./Sidebar.js";
import Feed from "./Feed.js";
import Login from "./Login.js";
import { useSelector } from "react-redux";
import { selectUser } from "./features/userSlice";
import "./App.css";

function App() {
  const user = useSelector(selectUser);
  return (
    <div className="app">
      {!user ? (
        <Login />
      ) : (
        <div className="app">
          <Header />
          <div className="app__body">
            <Sidebar />
            <Feed />
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
