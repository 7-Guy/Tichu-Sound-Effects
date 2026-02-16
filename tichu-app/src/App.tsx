import "./App.css";

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

import street1 from "./sounds/streets/street1.mp3";

const bombSounds = [bomb1File, bomb2File];
const dogSounds = [dog1File, dog2File, dog3File, dog4File, dog5File];
const dragonSounds = [dragon1, dragon2, dragon3, dragon4];
const phenixSounds = [phenix1, phenix2, phenix3];
const failSounds = [fail1, fail2, fail3, fail4, fail5];
const tensionSounds = [tension1, tension2, tension3, tension4, tension5];
const victorySounds = [victory1, victory2, victory3];
const streetSounds = [street1];

let audio = new Audio(undefined);

type Palette = {
  start: string;
  end: string;
};

type SoundCard = {
  id: string;
  label: string;
  icon: string;
  palette: Palette;
  play: () => void;
};

const imageCache = new Map<string, string>();

const playRandomSound = (soundFiles: string[]) => {
  stopSound();
  const randomIndex = getRandomIndex(soundFiles.length);
  audio = new Audio(soundFiles[randomIndex]);
  audio.play();
};

const getCardImage = (label: string, icon: string, palette: Palette) => {
  const cacheKey = `${label}-${icon}-${palette.start}-${palette.end}`;

  const cachedImage = imageCache.get(cacheKey);
  if (cachedImage) {
    return cachedImage;
  }

  const svg = `
    <svg xmlns="http://www.w3.org/2000/svg" width="640" height="360" viewBox="0 0 640 360">
      <defs>
        <linearGradient id="bg" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stop-color="${palette.start}" />
          <stop offset="100%" stop-color="${palette.end}" />
        </linearGradient>
      </defs>
      <rect width="640" height="360" rx="36" fill="url(#bg)" />
      <circle cx="320" cy="140" r="76" fill="rgba(255,255,255,0.2)" />
      <text x="320" y="165" text-anchor="middle" font-size="96">${icon}</text>
      <text x="320" y="280" text-anchor="middle" fill="#ffffff" font-size="52" font-family="Arial, Helvetica, sans-serif" font-weight="700">${label}</text>
    </svg>
  `;

  const image = `data:image/svg+xml;charset=UTF-8,${encodeURIComponent(svg)}`;
  imageCache.set(cacheKey, image);

  return image;
};

const playBomb = () => {
  playRandomSound(bombSounds);
};

const playDog = () => {
  playRandomSound(dogSounds);
};

const playDragon = () => {
  playRandomSound(dragonSounds);
};

const playPhenix = () => {
  playRandomSound(phenixSounds);
};

const playFail = () => {
  playRandomSound(failSounds);
};

const playTension = () => {
  playRandomSound(tensionSounds);
};

const playVictory = () => {
  playRandomSound(victorySounds);
};

const playStreet = () => {
  playRandomSound(streetSounds);
};

const stopSound = () => {
  audio.pause();
  audio.currentTime = 0;
};

const getRandomIndex = (maxIndex: number) => {
  return Math.floor(Math.random() * maxIndex);
};

const soundCards: SoundCard[] = [
  {
    id: "bomb",
    label: "Bombe",
    icon: "💣",
    palette: { start: "#f97316", end: "#dc2626" },
    play: playBomb,
  },
  {
    id: "dog",
    label: "Hund",
    icon: "🐕",
    palette: { start: "#0ea5e9", end: "#2563eb" },
    play: playDog,
  },
  {
    id: "dragon",
    label: "Drache",
    icon: "🐉",
    palette: { start: "#84cc16", end: "#15803d" },
    play: playDragon,
  },
  {
    id: "phenix",
    label: "Phönix",
    icon: "🔥",
    palette: { start: "#f59e0b", end: "#ec4899" },
    play: playPhenix,
  },
  {
    id: "street",
    label: "Strass",
    icon: "🏙️",
    palette: { start: "#64748b", end: "#334155" },
    play: playStreet,
  },
  {
    id: "tension",
    label: "Spannend",
    icon: "⚡",
    palette: { start: "#a855f7", end: "#7e22ce" },
    play: playTension,
  },
  {
    id: "fail",
    label: "Autsch",
    icon: "💥",
    palette: { start: "#ef4444", end: "#7f1d1d" },
    play: playFail,
  },
  {
    id: "victory",
    label: "Bravo",
    icon: "🏆",
    palette: { start: "#22c55e", end: "#0f766e" },
    play: playVictory,
  },
  {
    id: "stop",
    label: "Ruäh!!!",
    icon: "🛑",
    palette: { start: "#6b7280", end: "#111827" },
    play: stopSound,
  },
];

const App = () => {
  return (
    <div className="main-view">
      <header className="header">
        <h1>Tichu Soundboard</h1>
      </header>

      <section className="sound-grid" aria-label="Sound actions">
        {soundCards.map((card) => (
          <div
            key={card.id}
            className="sound-card"
            role="button"
            tabIndex={0}
            aria-label={card.label}
            onClick={card.play}
            onKeyDown={(event) => {
              if (event.key === "Enter" || event.key === " ") {
                event.preventDefault();
                card.play();
              }
            }}
          >
            <img
              className="sound-image"
              src={getCardImage(card.label, card.icon, card.palette)}
              alt={card.label}
            />
          </div>
        ))}
      </section>
    </div>
  );
};

export default App;
