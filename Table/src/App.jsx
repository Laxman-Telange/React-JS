import React from "react";
import "./App.css";

import { PlayerTeam } from "./components/PlayerTeam";
import { Table } from "/src/components/Table";

function App() {
  // const indianTeamPlayers = [
  //   { name: "Virat Kohli", image: "/src/assets/virat.jpg" },
  //   { name: "Rohit Sharma", image: "/src/assets/rohit-s.jpg" },
  //   { name: "MS Dhoni", image: "/src/assets/dhoni.jpg" },
  //   { name: "KL Rahul", image: "/src/assets/kl.jpg" },
  //   { name: "Jasprit Bumrah", image: "/src/assets/bumrah.jpg" },
  //   { name: "Rishabh Pant", image: "/src/assets/pant.jpg" },
  //   { name: "Hardik Pandya", image: "/src/assets/pandya.jpg" },
  //   { name: "Shikhar Dhawan", image: "/src/assets/dhavan.jpg" },
  //   { name: "Ravindra Jadeja", image: "/src/assets/jadeja.jpg" },
  //   { name: "Mohammed Shami", image: "/src/assets/shami.jpg" },
  //   { name: "Yuzvendra Chahal", image: "/src/assets/chahal.jpg" },
  // ];
  // const autsraliaTeamPlayers = [
  //   { name: "Steve Smith", image: "/src/assets/smith.jpg" },
  //   { name: "David Warner", image: "/src/assets/warner.jpg" },
  //   { name: "Aaron Finch", image: "/src/assets/finch.jpg" },
  //   { name: "Glenn Maxwell", image: "/src/assets/maxwell.jpg" },
  //   { name: "Pat Cummins", image: "/src/assets/cummins.jpg" },
  //   { name: "Mitchell Starc", image: "/src/assets/starc.jpg" },
  //   { name: "Josh Hazlewood", image: "/src/assets/josh.jpg" },
  //   { name: "Travis Head", image: "/src/assets/head.jpg" },
  //   { name: "Marnus Labuschagne", image: "/src/assets/marnus.jpg" },
  //   { name: "Adam Zampa", image: "/src/assets/zampa.jpg" },
  // ];
  const styleOne = { backgroundColor: "blue" };
  // const styleTwo = { backgroundColor: "yellow" };
  return (
    <div className="App">
      {/* <PlayerTeam team="India" players={indianTeamPlayers} style={styleOne} />
      <PlayerTeam team="Australia" players={australiaTeamPlayers} style={styleTwo} /> */}
      <Table tableOf={1} rows={10} style={styleOne} />
    </div>
  );
}

export default App;
