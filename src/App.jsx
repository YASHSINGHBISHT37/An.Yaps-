// import React from 'react'
// import Home from './pages/Home'

// const App = () => {
//   return (
//     <div>
//       <Home />
//     </div>
//   )
// }

// export default App



// App.jsx
import React, { useState } from "react";
import { AnimatePresence } from "framer-motion";

import Home from "./pages/Home";
import Favourites from "./pages/Favourites";
import Explore from "./pages/Explore";
import Notify from "./pages/Notify";
import Settings from "./pages/Settings";
import BottomNav from "./components/Navigation/BottomNav";

const App = () => {
  const [activePage, setActivePage] = useState("Home");

  const renderPage = () => {
    switch (activePage) {
      case "Home":
        return <Home key="home" />;
      case "Favourite":
        return <Favourites key="favourites" />;
      case "Explore":
        return <Explore key="explore" />; 
      case "Notify":
        return <Notify key="notify" />;
      case "Settings":
        return <Settings key="settings" />;
      default:
        return <Home key="home" />;
    }
  };

  return (
    <div className="relative w-screen min-h-screen bg-[#161616]">
      <AnimatePresence mode="wait">{renderPage()}</AnimatePresence>
      <BottomNav setActivePage={setActivePage} />
    </div>
  );
};

export default App;

