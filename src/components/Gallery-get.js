import BlackMirror from "../images/BlackMirror.jpg";
import BreakingBad from "../images/BreakingBad.jpg";
import DeathNote from "../images/DeathNote.jpg";
import GOT from "../images/GOT.jpg";
import TheWire from "../images/TheWire.jpg";
import WalkingDead from "../images/WalkingDead.jpg";

export default function getGallery(){
    return[
          {name:"Black Mirror", image:BlackMirror, id : "BlackMirror"},
          {name:"Breaking Bad", image:BreakingBad, id : "BreakingBad"},
          {name:"Death Note", image:DeathNote, id : "DeathNote"},
          {name:"Game of Thrones", image:GOT, id : "GameOfThrones"},
          {name:"The Walking Dead", image:WalkingDead, id : "WalkingDead"},
          {name:"The Wire", image:TheWire, id : "Wire"}
    ]
  }
  