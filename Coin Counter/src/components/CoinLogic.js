import React from "react";
import { CoinPanel } from "./CoinPanel";

export class CoinContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      one: 0,
      two: 0,
      five: 0,
      ten: 0,
      twenty: 0,
    };
  }

  handleCoinClick = (coin) => {
    if (coin === "one") {
      this.setState((prevState) => ({ one: prevState.one + 1 }));
    } else if (coin === "two") {
      this.setState((prevState) => ({ two: prevState.two + 1 }));
    } else if (coin === "five") {
      this.setState((prevState) => ({ five: prevState.five + 1 }));
    } else if (coin === "ten") {
      this.setState((prevState) => ({ ten: prevState.ten + 1 }));
    } else if (coin === "twenty") {
      this.setState((prevState) => ({ twenty: prevState.twenty + 1 }));
    } else {
      console.error("Invalid coin type");
    }
  };

  render() {
    const { one, two, five, ten, twenty } = this.state;
    const total = one * 1 + two * 2 + five * 5 + ten * 10 + twenty * 20;

    return (
      <CoinPanel
        one={one}
        two={two}
        five={five}
        ten={ten}
        twenty={twenty}
        total={total}
        onCoinClick={this.handleCoinClick}
      />
    );
  }
}
