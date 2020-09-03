import BlackMirror from "../images/BlackMirror.jpg";
import BreakingBad from "../images/BreakingBad.jpg";
import DeathNote from "../images/DeathNote.jpg";
import GOT from "../images/GOT.jpg";
import TheWire from "../images/TheWire.jpg";
import WalkingDead from "../images/WalkingDead.jpg";

export default function getGallery(){
    return[
          {name:"Black Mirror", image:BlackMirror, id : "BlackMirror", synopsis: "An anthology series exploring a twisted, high-tech multiverse where humanity's greatest innovations and darkest instincts collide."},
          {name:"Breaking Bad", image:BreakingBad, id : "BreakingBad", synopsis: "A high school chemistry teacher diagnosed with inoperable lung cancer turns to manufacturing and selling methamphetamine in order to secure his family's future."},
          {name:"Death Note", image:DeathNote, id : "DeathNote", synopsis: "An intelligent high school student goes on a secret crusade to eliminate criminals from the world after discovering a notebook capable of killing anyone whose name is written into it."},
          {name:"Game of Thrones", image:GOT, id : "GameOfThrones", synopsis: "Nine noble families fight for control over the lands of Westeros, while an ancient enemy returns after being dormant for millennia."},
          {name:"The Walking Dead", image:WalkingDead, id : "WalkingDead", synopsis: "Sheriff Deputy Rick Grimes wakes up from a coma to learn the world is in ruins and must lead a group of survivors to stay alive.."},
          {name:"The Wire", image:TheWire, id : "Wire", synopsis: " In the drug-ridden streets of West Baltimore, there are good guys and there are bad guys. Sometimes you need more than a badge to tell them apart."}
    ]
  }
  