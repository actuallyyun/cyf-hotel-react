import React, { useState, useEffect } from "react";
import Search from "./Search.js";
import SearchResults from "./SearchResults.js";
import CustomerProfile from "./CustomerProfile.js";
import Spinner from "react-bootstrap/Spinner";
import Alert from "react-bootstrap/Alert";
import BookingForm from "./BookingForm.js";

const Bookings = () => {
  const [bookings, setBookings] = useState([]);
  const [loading, setLoading] = useState(null);
  const [hasError, setHasError] = useState(null);
  const [errorMessage, setErrorMessage] = useState(null);

  const fetchBookings = async () => {
    try {
      const response = await fetch("https://cyf-react.glitch.me");
      if (response.ok) {
        const data = await response.json();
        setBookings(data);
      } else {
        setHasError(true);
        setErrorMessage(response.status);
      }
      setLoading(true);
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    fetchBookings();
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
        {loading ? (
          <SearchResults
            results={bookings}
            setShowProfileId={setShowProfileId}
          />
        ) : (
          <Spinner animation="border" />
        )}
        {hasError ? (
          <Alert variant="danger">
            <Alert.Heading>Something is wrong...</Alert.Heading>
            <p>Error Code: {errorMessage}</p>
          </Alert>
        ) : null}
        <CustomerProfile id={showProfileId} />
        <BookingForm bookings={bookings} setBookings={setBookings} />
      </div>
    </div>
  );
};

export default Bookings;
