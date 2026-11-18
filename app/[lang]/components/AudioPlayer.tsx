"use client";

import { useState, useEffect, useRef } from "react";

const STREAM_URL = "https://stream-150.zeno.fm/g325adzcrm0uv?zs=_3XiPiDZTtOeiQYzXN2qZQ";
const DEFAULT_VOLUME = 0.7;

export default function AudioPlayer() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [volume, setVolume] = useState(DEFAULT_VOLUME);
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const userInteractedRef = useRef(false);

  useEffect(() => {
    const audio = new Audio(STREAM_URL);
    audio.preload = "auto";
    audio.volume = DEFAULT_VOLUME;
    audioRef.current = audio;

    const startPlayback = () => {
      if (userInteractedRef.current) return;
      audio.play().then(() => setIsPlaying(true)).catch(() => setIsPlaying(false));
    };

    if (document.readyState === "complete") {
      startPlayback();
    } else {
      window.addEventListener("load", startPlayback, { once: true });
    }

    return () => {
      window.removeEventListener("load", startPlayback);
      audio.pause();
      audio.src = "";
    };
  }, []);

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = volume;
    }
  }, [volume]);

  const togglePlay = () => {
    if (!audioRef.current) return;
    userInteractedRef.current = true;
    if (isPlaying) {
      audioRef.current.pause();
      setIsPlaying(false);
    } else {
      // Reconnect stream on play
      audioRef.current.src = STREAM_URL;
      audioRef.current.load();
      audioRef.current.play()
        .then(() => setIsPlaying(true))
        .catch(() => setIsPlaying(false));
    }
  };

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 bg-[#0b0b0c] border-t border-purple-900/50 shadow-lg">
      <div className="flex items-center justify-between relative px-4 py-6">
        {/* Live indicator - Far left */}
        <div className="flex items-center gap-2 text-gray-400 text-sm">
          <span className={`inline-block w-2 h-2 rounded-full ${isPlaying ? "bg-green-400 animate-pulse" : "bg-gray-600"}`} />
          {isPlaying ? "LIVE" : "OFFLINE"}
        </div>

        {/* Play/Pause Button - Absolute center */}
        <button
          onClick={togglePlay}
          className="absolute left-1/2 -translate-x-1/2 flex items-center justify-center w-12 h-12 rounded-full bg-[#6f2adb] hover:bg-[#8245e2] text-white transition-colors"
          aria-label={isPlaying ? "Pause" : "Play"}
        >
          {isPlaying ? (
            <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
              <rect x="6" y="4" width="4" height="16" rx="1" />
              <rect x="14" y="4" width="4" height="16" rx="1" />
            </svg>
          ) : (
            <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
              <path d="M8 5.14v13.72a1 1 0 001.5.86l11.04-6.86a1 1 0 000-1.72L9.5 4.28A1 1 0 008 5.14z" />
            </svg>
          )}
        </button>

        {/* Volume Slider - Far right */}
        <div className="flex items-center gap-2 ml-auto">
          <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 text-gray-400" viewBox="0 0 24 24" fill="currentColor">
            <path d="M11 5L6 9H2v6h4l5 4V5z" />
          </svg>
          <input
            type="range"
            min="0"
            max="1"
            step="0.01"
            value={volume}
            onChange={(e) => setVolume(parseFloat(e.target.value))}
            className="w-24 h-1 accent-[#6f2adb] cursor-pointer"
            aria-label="Volume"
          />
        </div>
      </div>
    </div>
  );
}
