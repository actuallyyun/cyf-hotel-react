import React from "react";

const Footer = props => {
  return (
    <footer>
      <ul className="list-group">
        {props.hotelInfo.map((info, index) => (
          <li key={index} className="list-group-item border-0">
            {info}
          </li>
        ))}
      </ul>
    </footer>
  );
};

export default Footer;
