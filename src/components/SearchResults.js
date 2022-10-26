import React from "react";

const SearchResults = props => {
  return (
    <table className="table">
      <TableHeader />
      <TableBody results={props.results} />
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
      </tr>
    </thead>
  );
};

const TableBody = props => {
  return (
    <tbody>
      {props.results.map(booking => (
        <tr>
          <th>{booking.id}</th>
          <td>{booking.title}</td>
          <td>{booking.firstName}</td>
          <td>{booking.surname}</td>
          <td>{booking.email}</td>
          <td>{booking.roomId}</td>
          <td>{booking.checkInDate}</td>
          <td>{booking.checkOutDate}</td>
        </tr>
      ))}
    </tbody>
  );
};

export default SearchResults;
