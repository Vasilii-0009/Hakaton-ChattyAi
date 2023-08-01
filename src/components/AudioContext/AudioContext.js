import { createContext } from 'react';

const AudioContext = createContext({
   playingWave: null,
   setPlayingWave: () => { }
});

export default AudioContext;
