import React, { useState, useEffect } from 'react';
import { Helmet } from "react-helmet-async";

const Timer = () => {
  const [timeLeft, setTimeLeft] = useState(300); // 5分を秒で表現 (300秒)
  const [isRunning, setIsRunning] = useState(false);

  useEffect(() => {
    let timer;
    if (isRunning && timeLeft > 0) {
      timer = setInterval(() => {
        setTimeLeft((prevTime) => prevTime - 1);
      }, 1000);
    } else if (timeLeft === 0) {
      setIsRunning(false);
      playSound();
    }

    return () => clearInterval(timer);
  }, [isRunning, timeLeft]);

  const startTimer = () => setIsRunning(true);

  const stopTimer = () => {
    setIsRunning(false);
    setTimeLeft(300); // タイマーを5分にリセット
  };

  const playSound = () => {
    const audioCtx = new (window.AudioContext || window.webkitAudioContext)();
    const oscillator = audioCtx.createOscillator();
    const gainNode = audioCtx.createGain();

    oscillator.connect(gainNode);
    gainNode.connect(audioCtx.destination);

    oscillator.type = 'sine';
    oscillator.frequency.setValueAtTime(442, audioCtx.currentTime); // 440Hz (A4)
    gainNode.gain.setValueAtTime(0.5, audioCtx.currentTime);

    oscillator.start();
    setTimeout(() => {
      oscillator.stop();
      audioCtx.close();
      setTimeLeft(300); // タイマーを5分にリセット
    }, 5000); // 1秒間音を鳴らす
  };

  const formatTime = (seconds) => {
    const minutes = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${minutes.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  let backgroundColor = "white";
  let textColor = "black";

  if (timeLeft <= 60 && timeLeft > 10) {
    backgroundColor = "yellow";
  } else if (timeLeft <= 10) {
    backgroundColor = "yellow";
    textColor = "red";
  }

  return (
    <>
    <Helmet>
      <title>タイマー</title>
    </Helmet>
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        height: '100vh',
        backgroundColor: backgroundColor,
      }}
    >
      <h1 className="text-9xl font-bold" style={{ color: textColor }}>{formatTime(timeLeft)}</h1>
      <div>
        <button type="button" class="text-white bg-blue-700 hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full px-5 py-2.5 text-center me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 text-2xl" onClick={startTimer} disabled={isRunning}>Start</button>
        <button type="button" class="text-white bg-red-700 hover:bg-red-800 focus:outline-none focus:ring-4 focus:ring-red-300 font-medium rounded-full px-5 py-2.5 text-center me-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900 text-2xl" onClick={stopTimer} disabled={!isRunning}>Stop</button>
      </div>
    </div>
    </>
  );
};

export default Timer;
