"use client";

import { useState, useEffect, useRef } from "react";

const STREAM_URL = "https://stream-150.zeno.fm/g325adzcrm0uv?zs=_3XiPiDZTtOeiQYzXN2qZQ";
const METADATA_URL = "https://api.zeno.fm/mounts/metadata/subscribe/g325adzcrm0uv";

export default function AudioPlayer() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [volume, setVolume] = useState(0.7);
  const [nowPlaying, setNowPlaying] = useState("");
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const eventSourceRef = useRef<EventSource | null>(null);

  useEffect(() => {
    const eventSource = new EventSource(METADATA_URL);
    eventSourceRef.current = eventSource;

    eventSource.addEventListener("message", (event) => {
      try {
        const data = JSON.parse(event.data);
        if (data.streamTitle) {
          setNowPlaying(data.streamTitle);
        }
      } catch {}
    });

    return () => {
      eventSource.close();
    };
  }, []);

  useEffect(() => {
    const audio = new Audio(STREAM_URL);
    audio.preload = "auto";
    audio.volume = volume;
    audioRef.current = audio;

    audio.play()
      .then(() => setIsPlaying(true))
      .catch(() => {});

    return () => {
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
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      // Reconnect stream on play
      audioRef.current.src = STREAM_URL;
      audioRef.current.load();
      audioRef.current.play().catch(() => {});
    }
    setIsPlaying(!isPlaying);
  };

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 md:bottom-4 md:left-64 md:right-64 md:rounded-xl md:border md:border-purple-500/30 bg-[#1a0a2e]/80 backdrop-blur-md border-t border-purple-500/30 shadow-[0_0_10px_rgba(111,42,219,0.15)]">
      <div className="flex items-center justify-between relative px-4 py-3 md:py-4">
        {/* Now Playing - Far left */}
        <div className="flex items-center gap-2 text-gray-400 text-sm min-w-0">
          <span className={`inline-block w-2 h-2 rounded-full flex-shrink-0 ${isPlaying ? "bg-green-400 animate-pulse" : "bg-gray-600"}`} />
          <p className="text-white text-sm truncate">
            {nowPlaying || "Loading..."}
          </p>
        </div>

        {/* Play/Pause Button - Absolute center */}
        <button
          onClick={togglePlay}
          className="absolute left-1/2 -translate-x-1/2 flex items-center justify-center w-10 h-10 rounded-full bg-[#6f2adb] hover:bg-[#8245e2] text-white transition-colors"
          aria-label={isPlaying ? "Pause" : "Play"}
        >
          {isPlaying ? (
            <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
              <rect x="6" y="4" width="4" height="16" rx="1" />
              <rect x="14" y="4" width="4" height="16" rx="1" />
            </svg>
          ) : (
            <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
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
