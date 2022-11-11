import React, { useState, useEffect } from "react";
import Search from "./Search.js";
import SearchResults from "./SearchResults.js";
import FakeBookings from "../data/fakeBookings.json";
import CustomerProfile from "./CustomerProfile.js";

const Bookings = () => {
  const [bookings, setBookings] = useState([]);

  useEffect(() => {
    fetch("https://cyf-react.glitch.me")
      .then(res => res.json())
      .then(data => setBookings(data));
  }, []);

  const search = searchVal => {
    const filteredBookings = bookings.filter(
      booking =>
        booking.firstName === searchVal || booking.surname === searchVal
    );
    setBookings(filteredBookings);
  };

  const [showProfileId, setShowProfileId] = useState();

  return (
    <div className="App-content">
      <div className="container">
        <Search search={search} />
        <SearchResults results={bookings} setShowProfileId={setShowProfileId} />
        <CustomerProfile id={showProfileId} />
      </div>
    </div>
  );
};

export default Bookings;
