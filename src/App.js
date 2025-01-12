import React from "react";
import TouristInfoCards from "./components/TouristInfoCards";
import Bookings from "./components/Bookings";
import Footer from "./components/Footer";
import Heading from "./components/Heading";
import SearchResults from "./components/SearchResults";
import "./App.css";

const hotelInfo = [
  "123 Fake Street, London, E1 4UD",
  "hello@fakehotel.com",
  "0123 456789"
];

const App = () => {
  return (
    <div className="App">
      <Heading />
      <TouristInfoCards />
      <Bookings />

      <Footer hotelInfo={hotelInfo} />
    </div>
  );
};

export default App;
