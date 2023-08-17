import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import Navbar from "./components/Navbar";
import { NavContextSayHello } from "./context/NavSayHello";

function App() {
  const [user, setUser] = useState({});

  useEffect(() => {
    const getUser = {
      name: "Andika Ibnu Mubarok",
      avatar: "https://randomuser.me/api/portraits/men/1.jpg",
    };

    setUser(getUser);
  }, []);

  const initContextHelloValue = {
    user,
    theme: "dark",
  };

  return (
    <div>
      <NavContextSayHello.Provider value={initContextHelloValue}>
        <Navbar />
      </NavContextSayHello.Provider>
    </div>
  );
}

export default App;
