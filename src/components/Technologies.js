import React from "react";
import TvShow from "./TvShow";
import BlackMirror from "../images/BlackMirror.jpg";
import BreakingBad from "../images/BreakingBad.jpg";
import DeathNote from "../images/DeathNote.jpg";
import GOT from "../images/GOT.jpg";
import TheWire from "../images/TheWire.jpg";
import WalkingDead from "../images/WalkingDead.jpg";

function Technologies() {
  return (
    <div>
      <div className="container">
        <TvShow name="Black Mirror" image={BlackMirror}></TvShow>
        <TvShow name="Breaking Bad" image={BreakingBad}></TvShow>
        <TvShow name="Death Note" image={DeathNote}></TvShow>
      </div>
      <div className="container">
        <TvShow name="Game of Thrones" image={GOT}></TvShow>
        <TvShow name="The Walking Dead" image={WalkingDead}></TvShow>
        <TvShow name="The Wire" image={TheWire}></TvShow>
      </div>
    </div>
  );
}

export default Technologies;
