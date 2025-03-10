"use client";

import { useState, useRef } from "react";
import { Play } from "lucide-react";

const BackgroundVideo = () => {
  const [isPlayingWithSound, setIsPlayingWithSound] = useState(false);
  const [isPlaying, setIsPlaying] = useState(true);
  const videoRef = useRef(null);

  const handlePlayWithSound = () => {
    if (videoRef.current) {
      videoRef.current.muted = false;
      videoRef.current.play();
      setIsPlayingWithSound(true);
      setIsPlaying(true);
    }
  };

  const handleVideoClick = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play().catch((error) => console.error("Play interrupted:", error));
      }
      setIsPlaying(!isPlaying);
    }
  };
  

  return (
    <div className="relative w-full h-screen overflow-hidden">
      {/* Background Video */}
      <video
        ref={videoRef}
        className="absolute top-0 left-0 w-full h-full object-cover"
        autoPlay
        loop
        muted
        playsInline
        onClick={handleVideoClick}
      >
        <source src="/video2.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Play Button */}
      {!isPlayingWithSound && (
        <div className="absolute inset-0 flex items-center justify-center">
          <button
            onClick={handlePlayWithSound}
            className="bg-white text-black px-6 py-3 text-lg rounded-full shadow-lg hover:bg-gray-200 transition flex items-center"
          >
            <Play className="mr-2" /> Play with Sound
          </button>
        </div>
      )}
    </div>
  );
};

export default BackgroundVideo;