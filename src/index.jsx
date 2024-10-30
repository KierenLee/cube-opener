
import React from 'react';
import { createRoot } from "react-dom/client";
import App from "./App.jsx";

// 添加全局样式
const style = document.createElement('style');
style.textContent = `
  @keyframes fadeIn {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }

  @keyframes transformToCube {
    from {
      transform: scale(1) rotateX(0) rotateY(0);
      background-color: #3b82f6;
    }
    to {
      transform: scale(1) rotateX(-30deg) rotateY(-45deg);
      background-color: #93c5fd;
    }
  }

  @keyframes floatAndRotate {
    0% {
      transform: translate3d(0, 0, 0) rotateX(-30deg) rotateY(0deg);
    }
    25% {
      transform: translate3d(0, -10px, 0) rotateX(-30deg) rotateY(90deg);
    }
    50% {
      transform: translate3d(0, 0, 0) rotateX(-30deg) rotateY(180deg);
    }
    75% {
      transform: translate3d(0, -10px, 0) rotateX(-30deg) rotateY(270deg);
    }
    100% {
      transform: translate3d(0, 0, 0) rotateX(-30deg) rotateY(360deg);
    }
  }

  .cube-wrapper {
    width: 150px;
    height: 150px;
    perspective: 1000px;
  }

  .transform-cube {
    width: 100%;
    height: 100%;
    position: relative;
    transform-style: preserve-3d;
    animation: floatAndRotate 8s ease-in-out infinite;
  }

  .cube-face {
    position: absolute;
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 16px;
    font-weight: bold;
    color: #3b82f6;
    background: rgba(255, 255, 255, 0.95);
    border: 2px solid #3b82f6;
    box-shadow: 0 0 10px rgba(59, 130, 246, 0.2);
    backface-visibility: visible;
    transition: all 0.3s;
  }

  .cube-face.front { transform: translateZ(75px); }
  .cube-face.back { transform: rotateY(180deg) translateZ(75px); }
  .cube-face.right { transform: rotateY(90deg) translateZ(75px); }
  .cube-face.left { transform: rotateY(-90deg) translateZ(75px); }
  .cube-face.top { transform: rotateX(90deg) translateZ(75px); }
  .cube-face.bottom { transform: rotateX(-90deg) translateZ(75px); }

  .cube-face:hover {
    background: rgba(59, 130, 246, 0.1);
    box-shadow: 0 0 20px rgba(59, 130, 246, 0.4);
  }

  .cube-content {
    position: relative;
    width: 80%;
    height: 80%;
    border: 2px solid currentColor;
    border-radius: 8px;
    display: flex;
    align-items: center;
    justify-content: center;
    background: rgba(59, 130, 246, 0.05);
    text-transform: uppercase;
    font-size: 14px;
    letter-spacing: 1px;
  }

  .grid-cell {
    transition: transform 0.3s ease-out, opacity 0.3s ease-out;
  }

  .grid-cell.fade-out {
    transform: scale(0.8);
    opacity: 0;
  }

  @keyframes gradient {
    0% { background-position: 0% 50%; }
    50% { background-position: 100% 50%; }
    100% { background-position: 0% 50%; }
  }

  .success-title {
    background: linear-gradient(90deg, #3b82f6, #60a5fa, #93c5fd, #60a5fa, #3b82f6);
    background-size: 200% auto;
    color: transparent;
    -webkit-background-clip: text;
    background-clip: text;
    animation: gradient 3s linear infinite;
  }
`;
document.head.appendChild(style);

createRoot(document.getElementById("root")).render(<App />);
