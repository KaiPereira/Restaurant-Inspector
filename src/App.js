import './App.css';
import React from "react"
import {
  Routes,
  Route,
} from "react-router-dom";
import Nav from "./components/Nav"
import MainWebsite from "./components/MainWebsite"
import Footer from "./components/Footer"
import RestaurantsPage from "./components/RestaurantsPage"
import RestaurantPage from "./components/RestaurantPage"
import ErrorPage from "./components/ErrorPage"

function App() {
  const [dropdownState, changeDropdownState] = React.useState(true)

  function changeMenuState() {
    changeDropdownState(!dropdownState);
  }

  !dropdownState ? document.body.style.overflow = "hidden" : document.body.style.overflow = "initial"
  return (
    <Routes>
      <Route path="/" element={
        <>
          <Nav 
            changeMenuState={changeMenuState}
            dropdownState={dropdownState}
          />
          <MainWebsite />
          <Footer />
        </>
      } />
      <Route path="/restaurants" element={
        <>
          <Nav 
            changeMenuState={changeMenuState}
            dropdownState={dropdownState}
          />
          <RestaurantsPage />
          <Footer />
        </>
      } />
      <Route path="/restaurants/:index" element={
        <>
          <Nav 
            changeMenuState={changeMenuState}
            dropdownState={dropdownState}
          />
          <RestaurantPage />
          <Footer />
        </>
      } />
      <Route path="*" element={
        <>
          <Nav 
            changeMenuState={changeMenuState}
            dropdownState={dropdownState}
          />
          <ErrorPage />
          <Footer />
        </>
      } />
    </Routes>
  );
}

export default App;
