import React from "react";

const Footer = props => {
  return (
    <footer>
      <ul className="list-group">
        {props.hotelInfo.map(info => (
          <li className="list-group-item border-0">{info}</li>
        ))}
      </ul>
    </footer>
  );
};

export default Footer;
