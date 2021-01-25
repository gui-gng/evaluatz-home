import React from 'react';
import './header.css';

class Header extends React.Component {
  state = {
  };

  render() {
    return (
      <div className="evaluatz_header d-flex align-items-center justify-content-between">
        <div className="evaluatz_logo_header">
          <img alt="" src="/logoEv.png"></img>
        </div>
        <div className="d-flex justify-content-around evaluatz-links">
          <a href="https://stocks.evaluatz.com">
            <div>
              Stocks
            </div>
          </a>
          <a href="https://esports.evaluatz.com">
            <div>
              E-Sports
            </div>
          </a>
          <a href="https://blog.evaluatz.com">
            <div>
              Blog
            </div>
          </a>
        </div>

      </div>
    );
  }
}

export default Header;