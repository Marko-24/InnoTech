import React from 'react';
import './infiniteLogos.css';
import Image from "next/image";

const logos = new Array(10).fill('/logo/logo-no-background.png');

const InfiniteMovingLogos = () => {
  const handlePause = () => {
    const track = document.getElementById('logo-track');
    track?.classList.add('paused');
  };

  const handlePlay = () => {
    const track = document.getElementById('logo-track');
    track?.classList.remove('paused');
  };

  return (
    <div className="relative overflow-hidden group w-full mask-fade" onMouseOver={handlePause} onMouseOut={handlePlay}>
      <div id="logo-track" className="flex animate-scroll gap-8 w-max" style={{ animation: 'scroll 100s linear infinite'}}>
        {logos.map((src, i) => (
          <Image key={i}
                 src={src}
                 alt={`Logo ${i}`}
                 width={10000}
                 height={10000}
                 className="w-40 h-auto"
          />
        ))}
        {logos.map((src, i) => (
          <Image key={`dup-${i}`}
                 src={src}
                 alt={`Logo duplicate ${i}`}
                 width={10000}
                 height={10000}
                 className="w-40 h-auto"
          />
        ))}
      </div>
    </div>
  );
};

export default InfiniteMovingLogos;