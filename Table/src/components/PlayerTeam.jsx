// import React from "react";
// import "../components-css/PlayerTeam.css"; // Use a separate CSS file for styling

// export class PlayerTeam extends React.Component {
//   render() {
//     const { team, players, style } = this.props; // Destructure props for easier access

//     return (
//       <div className="team-container">
//         <h1>Team: {team}</h1>
//         <div className="player-grid">
//           {players.map((player, index) => (
//             <div className="player-card" key={index} style={style}>
//               <img
//                 src={player.image}
//                 className="player-image"
//                 alt={player.name}
//               />
//               <h2 className="player-name">{player.name}</h2>
//             </div>
//           ))}
//         </div>
//       </div>
//     );
//   }
// }
import React from "react";
import "../components-css/PlayerTeam.css"; // Use a separate CSS file for styling

export class PlayerTeam extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      players: props.players, // Initialize state with players from props
    };
  }

  removePlayer = (indexToRemove) => {
    const updatedPlayers = this.state.players.filter(
      (player, index) => index !== indexToRemove
    );
    this.setState({ players: updatedPlayers });
  };

  render() {
    const { team, style } = this.props; // Destructure props for easier access
    const { players } = this.state;

    return (
      <div className="team-container">
        <h1>Team: {team}</h1>
        <div className="player-grid">
          {players.map((player, index) => (
            <div className="player-card" key={index} style={style}>
              <img
                src={player.image}
                className="player-image"
                alt={player.name}
              />
              <div className="out">
                <h2 className="player-name">{player.name}</h2>
                <button
                  className="remove-player-button"
                  onClick={() => this.removePlayer(index)}
                >
                  Out
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }
}
