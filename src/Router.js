import React from 'react';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home";
import Game from "./pages/Game/Game";
import Details from "./pages/Details/Details";
import Header from "./components/Header/Header";// Make sure ModalContext is implemented correctly
import { ModalContextProvider } from './contexts/ModalContext';
// export const Test = ({ handleModal }) => {
//   return (
//     <div>
//       <button onClick={() => handleModal(<Modal handleModal={handleModal} />)}>Show Modal
//       show Modal
//       </button>
//     </div>
//   );
// };

// export const Modal = ({ handleModal }) => {
//   return <div>helosdbbgfhjghdbvjbd</div>;
// };

function Router() {

  return (
    <BrowserRouter>
      {/* <Test handleModal={handleModal} /> */}
      <ModalContextProvider>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/details" element={<Details />} />
        <Route path="/game-on" element={<Game />} />
      </Routes>
      </ModalContextProvider>
    </BrowserRouter>
  );
}

export default Router;
