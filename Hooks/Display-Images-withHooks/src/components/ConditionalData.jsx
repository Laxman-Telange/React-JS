import React from "react";

export class ConditionalData extends React.Component {
  render() {
    let greeting = "Hello world";
    const date = new Date(); //get the current date and time
    const hours = date.getHours(); //get the current hours
    const minutes = date.getMinutes(); //get the current minutes

    if (hours < 12) {
      greeting = "Good Morning";
    } else if (hours >= 12 && hours < 17) {
      greeting = "Good Afternoon";
    } else {
      greeting = "Good Evening";
    }

    return (
      <div>
        <h1>{greeting}</h1>
        <p>
          The current time is {hours}:{minutes < 10 ? `0${minutes}` : minutes}
        </p>
      </div>
    );
  }
}
