import bomb1File from "./sounds/bombs/LaBomba.mp3";
import bomb2File from "./sounds/bombs/Boombastic.mp3";
import dog1File from "./sounds/dogs/dog1.mp3";
import dog2File from "./sounds/dogs/dog2.mp3";
import dog3File from "./sounds/dogs/dog3.mp3";
import dog4File from "./sounds/dogs/dog4.mp3";
import dog5File from "./sounds/dogs/DogsOut.mp3";

const bombSounds = [bomb1File, bomb2File];
const dogSounds = [dog1File, dog2File, dog3File, dog4File, dog5File];
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
        <button onClick={stopSound}>Ruäh!!!</button>
      </div>
    </div>
  );
};

export default App;
