import React from 'react';

export interface YouTubePlayerProps {
  src: string;
  title?: string;
  width?: number;
  height?: number;
}

export default function YouTubePlayer({width, height, src, title}: YouTubePlayerProps) {
  return (
    <div className="flex">
      <iframe
        className="m-auto"
        width={width ?? 560}
        height={height ?? 315}
        src={src}
        title={title}
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen>
      </iframe>
    </div>
  );
}
