import bomb1File from "./sounds/bombs/LaBomba.mp3";
import bomb2File from "./sounds/bombs/Boombastic.mp3";

import dog1File from "./sounds/dogs/dog1.mp3";
import dog2File from "./sounds/dogs/dog2.mp3";
import dog3File from "./sounds/dogs/dog3.mp3";
import dog4File from "./sounds/dogs/dog4.mp3";
import dog5File from "./sounds/dogs/DogsOut.mp3";

import dragon1 from "./sounds/dragon/dragon1.mp3";
import dragon2 from "./sounds/dragon/dragon2.mp3";
import dragon3 from "./sounds/dragon/dragon3.mp3";
import dragon4 from "./sounds/dragon/dragon4.mp3";

import phenix1 from "./sounds/phenix/phenix1.mp3";
import phenix2 from "./sounds/phenix/phenix2.mp3";
import phenix3 from "./sounds/phenix/phenix3.mp3";

import fail1 from "./sounds/fails/fail1.mp3";
import fail2 from "./sounds/fails/fail2.mp3";
import fail3 from "./sounds/fails/fail3.mp3";
import fail4 from "./sounds/fails/fail4.mp3";
import fail5 from "./sounds/fails/fail5.mp3";

import tension1 from "./sounds/tension/tension1.mp3";
import tension2 from "./sounds/tension/tension2.mp3";
import tension3 from "./sounds/tension/tension3.mp3";
import tension4 from "./sounds/tension/tension4.mp3";
import tension5 from "./sounds/tension/tension5.mp3";

import victory1 from "./sounds/victory/victory1.mp3";
import victory2 from "./sounds/victory/victory2.mp3";
import victory3 from "./sounds/victory/victory3.mp3";

const bombSounds = [bomb1File, bomb2File];
const dogSounds = [dog1File, dog2File, dog3File, dog4File, dog5File];
const dragonSounds = [dragon1, dragon2, dragon3, dragon4];
const phenixSounds = [phenix1, phenix2, phenix3];
const failSounds = [fail1, fail2, fail3, fail4, fail5];
const tensionSounds = [tension1, tension2, tension3, tension4, tension5];
const victorySounds = [victory1, victory2, victory3];

let audio = new Audio(undefined);

const playBomb = () => {
  stopSound();
  const randomIndex = getRandomIndex(bombSounds.length);
  audio = new Audio(bombSounds[randomIndex]);
  audio.play();
};

const playDog = () => {
  stopSound();
  const randomIndex = getRandomIndex(dogSounds.length);
  audio = new Audio(dogSounds[randomIndex]);
  audio.play();
};

const playDragon = () => {
  stopSound();
  const randomIndex = getRandomIndex(dragonSounds.length);
  audio = new Audio(dragonSounds[randomIndex]);
  audio.play();
};

const playPhenix = () => {
  stopSound();
  const randomIndex = getRandomIndex(phenixSounds.length);
  audio = new Audio(phenixSounds[randomIndex]);
  audio.play();
};

const playFail = () => {
  stopSound();
  const randomIndex = getRandomIndex(failSounds.length);
  audio = new Audio(failSounds[randomIndex]);
  audio.play();
};

const playTension = () => {
  stopSound();
  const randomIndex = getRandomIndex(tensionSounds.length);
  audio = new Audio(tensionSounds[randomIndex]);
  audio.play();
};

const playVictory = () => {
  stopSound();
  const randomIndex = getRandomIndex(victorySounds.length);
  audio = new Audio(victorySounds[randomIndex]);
  audio.play();
};

const stopSound = () => {
  audio.pause();
  audio.currentTime = 0;
};

const getRandomIndex = (maxIndex: number) => {
  return Math.floor(Math.random() * maxIndex);
};

const App = () => {
  return (
    <div>
      <h1>My App</h1>
      <div>
        <button onClick={playBomb}>Bombe</button>
      </div>
      <div>
        <button onClick={playDog}>Hund</button>
      </div>
      <div>
        <button onClick={playDragon}>Drache</button>
      </div>
      <div>
        <button onClick={playPhenix}>Phönix</button>
      </div>
      <div>
        <button onClick={playTension}>Huii spannend</button>
      </div>
      <div>
        <button onClick={playFail}>Autsch</button>
      </div>
      <div>
        <button onClick={playVictory}>Bravo</button>
      </div>
      <div>
        <button onClick={stopSound}>Ruäh!!!</button>
      </div>
    </div>
  );
};

export default App;
