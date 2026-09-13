"use client";

import { useEffect, useRef, useState } from "react";
import { Volume2, VolumeX, Sparkles, Wind } from "lucide-react";

export default function AmbienceAudio({ isPlaying, onToggle }) {
  const audioCtxRef = useRef(null);
  const gainNodeRef = useRef(null);
  const noiseSourceRef = useRef(null);

  useEffect(() => {
    if (isPlaying) {
      try {
        const AudioContext = window.AudioContext || window.webkitAudioContext;
        if (!AudioContext) return;

        const ctx = new AudioContext();
        audioCtxRef.current = ctx;

        // Create pink noise buffer for realistic rain & mountain wind
        const bufferSize = ctx.sampleRate * 2;
        const noiseBuffer = ctx.createBuffer(1, bufferSize, ctx.sampleRate);
        const output = noiseBuffer.getChannelData(0);
        let b0 = 0, b1 = 0, b2 = 0, b3 = 0, b4 = 0, b5 = 0, b6 = 0;
        for (let i = 0; i < bufferSize; i++) {
          const white = Math.random() * 2 - 1;
          b0 = 0.99886 * b0 + white * 0.0555179;
          b1 = 0.99332 * b1 + white * 0.0750759;
          b2 = 0.96900 * b2 + white * 0.1538520;
          b3 = 0.86650 * b3 + white * 0.3104856;
          b4 = 0.55000 * b4 + white * 0.5329522;
          b5 = -0.7616 * b5 - white * 0.0168980;
          output[i] = b0 + b1 + b2 + b3 + b4 + b5 + b6 + white * 0.5362;
          output[i] *= 0.035; // quiet ambient level
          b6 = white * 0.115926;
        }

        const whiteNoise = ctx.createBufferSource();
        whiteNoise.buffer = noiseBuffer;
        whiteNoise.loop = true;
        noiseSourceRef.current = whiteNoise;

        // Lowpass filter for warm highland breeze
        const filter = ctx.createBiquadFilter();
        filter.type = "lowpass";
        filter.frequency.setValueAtTime(320, ctx.currentTime);

        const gainNode = ctx.createGain();
        gainNode.gain.setValueAtTime(0.01, ctx.currentTime);
        gainNode.gain.exponentialRampToValueAtTime(0.18, ctx.currentTime + 1.5);
        gainNodeRef.current = gainNode;

        whiteNoise.connect(filter);
        filter.connect(gainNode);
        gainNode.connect(ctx.destination);

        whiteNoise.start();
      } catch (e) {
        console.error("Ambience audio failed to start", e);
      }
    } else {
      if (audioCtxRef.current) {
        try {
          if (gainNodeRef.current) {
            gainNodeRef.current.gain.exponentialRampToValueAtTime(
              0.0001,
              audioCtxRef.current.currentTime + 0.8
            );
          }
          setTimeout(() => {
            if (audioCtxRef.current && audioCtxRef.current.state !== "closed") {
              audioCtxRef.current.close();
            }
          }, 850);
        } catch (e) {
          // ignore
        }
      }
    }

    return () => {
      if (audioCtxRef.current && audioCtxRef.current.state !== "closed") {
        try {
          audioCtxRef.current.close();
        } catch (e) {}
      }
    };
  }, [isPlaying]);

  return (
    <aside aria-label="Audio controls" className="fixed bottom-6 right-6 z-40">
      <button
        type="button"
        onClick={onToggle}
        className={`flex items-center gap-3 px-4 py-2.5 rounded-full border transition-all duration-300 backdrop-blur-md shadow-lg ${
          isPlaying
            ? "bg-[#223b1e] border-[#334d2e] text-[#fbf9f4] shadow-[#223b1e]/20"
            : "bg-[#fbf9f4]/95 border-[rgba(34,59,30,0.15)] text-[#434840] hover:text-[#223b1e] hover:border-[#223b1e]/30"
        }`}
      >
        <div className="flex items-center gap-1.5">
          {isPlaying ? (
            <div className="flex items-end gap-[3px] h-3.5">
              <span className="w-[2px] bg-[#ccebc1] animate-[pulse_1s_ease-in-out_infinite] h-full" />
              <span className="w-[2px] bg-[#ccebc1] animate-[pulse_0.7s_ease-in-out_infinite] h-2/3" />
              <span className="w-[2px] bg-[#ccebc1] animate-[pulse_1.2s_ease-in-out_infinite] h-4/5" />
            </div>
          ) : (
            <Wind className="w-4 h-4 text-[#54634a]" />
          )}
        </div>
        <div className="flex flex-col text-left">
          <span className="text-[11px] font-serif tracking-wider leading-none">
            {isPlaying ? "Highland Breeze Playing" : "Listen to Highlands"}
          </span>
          <span className="label-caps text-[8px] opacity-70 mt-0.5">
            {isPlaying ? "Atmospheric Soundscape" : "Audio Ambience"}
          </span>
        </div>
      </button>
    </aside>
  );
}
