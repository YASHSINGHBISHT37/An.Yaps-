import React from 'react'
import Home from './pages/Home'
import Transition from './components/Transition/Transition'

const App = () => {
  return (
    <div>
      {/* <Home /> */}
      <Transition/>
    </div>
  )
}

export default App



// import React, { useState } from "react";
// import { AnimatePresence } from "framer-motion";

// import Home from "./pages/Home";
// import Favourites from "./pages/Favourites";
// import Explore from "./pages/Explore";
// import Notify from "./pages/Notify";
// import Settings from "./pages/Settings";
// import BottomNav from "./components/Navigation/BottomNav";
// import { StockDataProvider } from "./components/data/Data";
// import Transition from "./components/Transition/Transition";


// const App = () => {
//   const [activePage, setActivePage] = useState("Home");

//   const renderPage = () => {
//     switch (activePage) {
//       case "Home":
//         return <Home key="home" />;
//       case "Favourite":
//         return <Favourites key="favourites" />;
//       case "Explore":
//         return <Explore key="explore" />;
//       case "Notify":
//         return <Notify key="notify" />;
//       case "Settings":
//         return <Settings key="settings" />;
//       default:
//         return <Home key="home" />;
//     }
//   };

//   return (
//     <StockDataProvider symbol='AAPL'>
//       <div className="relative w-screen min-h-screen bg-[#161616]">
//         <AnimatePresence mode="wait">{renderPage()}</AnimatePresence>
//         <BottomNav setActivePage={setActivePage} />
//         <Transition/>
//       </div>
//     </StockDataProvider>
//   );
// };

// export default App;

