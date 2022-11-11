import React, { useState } from "react";
import { DateTime } from "luxon";

const SearchResults = props => {
  return (
    <table className="table">
      <TableHeader />
      <TableBody
        results={props.results}
        setShowProfileId={props.setShowProfileId}
      />
    </table>
  );
};

const TableHeader = () => {
  return (
    <thead>
      <tr>
        <th>id</th>
        <th>Title</th>
        <th>First Name</th>
        <th>Surname</th>
        <th>Email</th>
        <th>Room id</th>
        <th>Check-in Date</th>
        <th>Check-out Date</th>
        <th>Nights</th>
      </tr>
    </thead>
  );
};

const TableBody = props => {
  const [clickedRow, setClickedRow] = useState();

  const handleClick = index => {
    setClickedRow(index);
  };

  const handleShowProfile = event => {
    const id = event.target.value;
    props.setShowProfileId(id);
  };

  return (
    <tbody>
      {props.results.map((booking, index) => (
        <tr
          key={index}
          onClick={() => handleClick(index)}
          className={clickedRow == index ? "highlight" : null}
        >
          <th>{booking.id}</th>
          <td>{booking.title}</td>
          <td>{booking.firstName}</td>
          <td>{booking.surname}</td>
          <td>{booking.email}</td>
          <td>{booking.roomId}</td>
          <td>{booking.checkInDate}</td>
          <td>{booking.checkOutDate}</td>
          <td>
            <CalculateNights
              checkInDate={booking.checkInDate}
              checkOutDate={booking.checkOutDate}
            />
          </td>

          <td>
            <button value={booking.id} onClick={handleShowProfile}>
              Show Profile
            </button>
          </td>
        </tr>
      ))}
    </tbody>
  );
};

const CalculateNights = props => {
  const checkInDate = DateTime.fromISO(props.checkInDate);
  const checkOutDate = DateTime.fromISO(props.checkOutDate);
  const nights = checkOutDate.diff(checkInDate, "days").toObject();
  return nights.days;
};

export default SearchResults;
