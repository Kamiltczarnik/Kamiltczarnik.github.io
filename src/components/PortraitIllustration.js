import React from "react";

function PortraitIllustration() {
  return (
    <div className="portrait-illustration" aria-hidden="true">
      <svg viewBox="0 0 420 360" role="presentation">
        <defs>
          <linearGradient id="portrait-bg" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#111827" />
            <stop offset="100%" stopColor="#0b1020" />
          </linearGradient>
          <linearGradient id="portrait-jacket" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#9ca3af" />
            <stop offset="100%" stopColor="#4b5563" />
          </linearGradient>
          <linearGradient id="portrait-tie" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#f472b6" />
            <stop offset="100%" stopColor="#2563eb" />
          </linearGradient>
        </defs>

        <rect x="0" y="0" width="420" height="360" rx="36" fill="url(#portrait-bg)" />

        <circle cx="95" cy="84" r="78" fill="rgba(59,130,246,0.18)" />
        <circle cx="340" cy="280" r="90" fill="rgba(249,115,22,0.14)" />
        <path
          d="M24 238C132 204 242 212 394 156"
          fill="none"
          stroke="rgba(249,115,22,0.88)"
          strokeWidth="10"
          strokeLinecap="round"
        />
        <path
          d="M16 260C120 220 270 228 404 178"
          fill="none"
          stroke="rgba(37,99,235,0.56)"
          strokeWidth="48"
          strokeLinecap="round"
        />

        <g transform="translate(70 46)">
          <ellipse cx="138" cy="94" rx="76" ry="90" fill="#f6d3c6" />
          <path
            d="M74 80C84 24 128 6 174 14C212 22 233 56 226 92C206 64 188 54 162 50C132 44 99 52 74 80Z"
            fill="#60311e"
          />
          <path
            d="M64 84C66 40 92 10 144 8C182 6 224 28 234 70C210 42 188 34 160 34C128 34 96 48 64 84Z"
            fill="#7b4027"
          />
          <ellipse cx="112" cy="102" rx="10" ry="6" fill="#6b3c2b" />
          <ellipse cx="166" cy="102" rx="10" ry="6" fill="#6b3c2b" />
          <circle cx="112" cy="103" r="3.5" fill="#7dd3fc" />
          <circle cx="166" cy="103" r="3.5" fill="#86efac" />
          <path
            d="M121 144C136 152 146 152 159 144"
            fill="none"
            stroke="#a04f4f"
            strokeWidth="5"
            strokeLinecap="round"
          />
          <path
            d="M136 122C137 130 139 135 141 142"
            fill="none"
            stroke="#e5b8a7"
            strokeWidth="4"
            strokeLinecap="round"
          />
          <path
            d="M72 170C96 152 118 146 138 146C158 146 182 152 204 170V206H72V170Z"
            fill="#d6dce4"
          />
          <path
            d="M36 312L74 190C90 174 108 166 138 166C170 166 188 174 204 190L242 312H36Z"
            fill="url(#portrait-jacket)"
          />
          <path d="M112 190L138 160L166 190L150 312H126L112 190Z" fill="url(#portrait-tie)" />
          <path d="M78 194L134 248L118 312H36L78 194Z" fill="#7b8794" opacity="0.74" />
          <path d="M198 194L142 248L158 312H242L198 194Z" fill="#6b7280" opacity="0.82" />
        </g>
      </svg>
    </div>
  );
}

export default PortraitIllustration;
