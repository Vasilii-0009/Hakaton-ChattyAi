import './AudioMessage.css';
import { useState, useRef, useEffect } from 'react';
import WaveSurfer from 'wavesurfer.js';

let currentAudioMessage = null;

function AudioMessage({ src }) {
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const waveformRef = useRef(null);
  const wavesurfer = useRef(null);

  useEffect(() => {
    wavesurfer.current = WaveSurfer.create({
      container: waveformRef.current,
      height: 16,
      normalize: true,
      cursorWidth: 0,
      waveColor: 'rgba(255, 255, 255, .66)',
      progressColor: 'rgba(255, 255, 255, 1)',
      audioRate: 1,
      barWidth: 2,
      barRadius: 1,
      barGap: 4,
    });

    wavesurfer.current.load(src);

    wavesurfer.current.on('audioprocess', (time) => {
      setCurrentTime(time);
    });

    wavesurfer.current.on('ready', () => {
      setDuration(wavesurfer.current.getDuration());
    });

    wavesurfer.current.on('finish', () => {
      stopCurrentAudioMessage();
    });

    return () => {
      wavesurfer.current.destroy();
      if (currentAudioMessage === wavesurfer.current) {
        currentAudioMessage = null;
      }
    };
  }, [src]);

  const stopCurrentAudioMessage = () => {

    if (currentAudioMessage) {
      currentAudioMessage.pause();
      setIsPlaying(false);
      console.log('first')
      currentAudioMessage = null;
    }
  };

  const onClickCtrlBtn = (e) => {
    stopCurrentAudioMessage();
    if (!isPlaying) {
      setIsPlaying(false);
      console.log('two')
      wavesurfer.current.play();
      currentAudioMessage = wavesurfer.current;
    }
    setIsPlaying(!isPlaying);
  };

  const formatTime = (timeInSeconds) => {
    const minutes = Math.floor(timeInSeconds / 60);
    const seconds = Math.floor(timeInSeconds % 60);
    return `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
  };

  return (
    <div className='audio-message'>
      <button className='audio-message__control-btn' onClick={onClickCtrlBtn}>
        <div className={`audio-message__control-icon ${isPlaying ? 'audio-message__control-icon_type_stop' : 'audio-message__control-icon_type_play'}`}></div>
      </button>
      <div className='audio-message__waveform-wrapper'>
        <div id="waveform" ref={waveformRef} />
      </div>
      <div className='audio-message__timer'>
        {formatTime(currentTime)} / {formatTime(duration)}
      </div>
    </div>
  );
}

export default AudioMessage;
