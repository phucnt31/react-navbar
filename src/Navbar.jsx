import React, { useRef, useState } from "react";
import { FaBars } from "react-icons/fa";
import { links, social } from "./data";
import logo from "./logo.svg";

const Navbar = () => {
  const [showLink, setShowLink] = useState(false);
  const linksRef = useRef(null);
  const linksContainerRef = useRef(null);

  const linksStyle = {
    height: showLink
      ? `${linksRef.current.getBoundingClientRect().height}px`
      : "0px",
  };

  return (
    <nav>
      <div className="nav-center">
        <div className="nav-header">
          <img src={logo} alt="logo" className="logo" />
          <button
            type="button"
            className="nav-toggle"
            onClick={() => setShowLink(!showLink)}
          >
            <FaBars />
          </button>
        </div>
        {/* {showLink && ( */}
        <div
          className="links-container"
          ref={linksContainerRef}
          style={linksStyle}
        >
          <ul className="links" ref={linksRef}>
            {links.map((link) => {
              const { id, url, text } = link;
              return (
                <li key={id}>
                  <a href={url}>{text}</a>
                </li>
              );
            })}
          </ul>
        </div>
        {/* )} */}
      </div>
    </nav>
  );
};

export default Navbar;
