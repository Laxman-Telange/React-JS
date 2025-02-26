// CoinPanel.js
import React from "react";
import "./CoinPanel.css";

export class CoinPanel extends React.Component {
  render() {
    const { one, two, five, ten, twenty, total, onCoinClick } = this.props; // Use onCoinClick

    return (
      <div className="main">
        <div className="container">
          <div className="row">
            <div className="coin-one" onClick={() => onCoinClick("one")}>
              <img src="one.jpg" alt="one" />
            </div>
            <div className="coin-two" onClick={() => onCoinClick("two")}>
              <img src="two.jpg" alt="two" />
            </div>
            <div className="coin-five" onClick={() => onCoinClick("five")}>
              <img src="five.jpg" alt="five" />
            </div>
            <div className="coin-ten" onClick={() => onCoinClick("ten")}>
              <img src="ten.jpg" alt="ten" />
            </div>
            <div className="coin-twenty" onClick={() => onCoinClick("twenty")}>
              <img src="twenty.jpg" alt="twenty" />
            </div>
          </div>

          <div className="row-two">
            <div className="total-count">
              <h1>Total: ₹{total}</h1>

              <div className="count-one">
                <img src="one.jpg" alt="one" />
                <p>Count: {one}</p>
              </div>

              <div className="count-two">
                <img src="two.jpg" alt="two" />
                <p>Count: {two}</p>
              </div>

              <div className="count-five">
                <img src="five.jpg" alt="five" />
                <p>Count: {five}</p>
              </div>

              <div className="count-ten">
                <img src="ten.jpg" alt="ten" />
                <p>Count: {ten}</p>
              </div>

              <div className="count-twenty">
                <img src="twenty.jpg" alt="twenty" />
                <p>Count: {twenty}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
