import React from "react";

const SearchResults = () => {
  return (
    <table className="table">
      <TableHeader />
      <TableBody />
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

const TableBody = () => {
  return (
    <tbody>
      <tr>
        <th>1</th>
        <td>Ms</td>
        <td>Yun</td>
        <td>Ji</td>
        <td>this.jiyun@gmail.com</td>
        <td>65</td>
        <td>2022-01-01</td>
        <td>2022-01-01</td>
      </tr>
      <tr>
        <th>1</th>
        <td>Ms</td>
        <td>Yun</td>
        <td>Ji</td>
        <td>this.jiyun@gmail.com</td>
        <td>65</td>
        <td>2022-01-01</td>
        <td>2022-01-01</td>
      </tr>
      <tr>
        <th>1</th>
        <td>Ms</td>
        <td>Yun</td>
        <td>Ji</td>
        <td>this.jiyun@gmail.com</td>
        <td>65</td>
        <td>2022-01-01</td>
        <td>2022-01-01</td>
      </tr>
      <tr>
        <th>1</th>
        <td>Ms</td>
        <td>Yun</td>
        <td>Ji</td>
        <td>this.jiyun@gmail.com</td>
        <td>65</td>
        <td>2022-01-01</td>
        <td>2022-01-01</td>
      </tr>
    </tbody>
  );
};

export default SearchResults;
