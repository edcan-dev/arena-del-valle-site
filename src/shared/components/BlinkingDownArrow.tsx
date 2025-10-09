'use client';

import React from "react";
import { FiChevronDown } from "react-icons/fi";

/**
 * BlinkingDownArrow
 * A small, customizable React component that renders a downward arrow with
 * optional blinking (pulse) and/or bouncing animation using Tailwind CSS.
 *
 * Props:
 *  - size: number | string (defaults to 28)
 *  - color: string (Tailwind color classes or hex, defaults to 'currentColor')
 *  - blink: boolean (apply a subtle pulse - "blinking")
 *  - bounce: boolean (apply a gentle bounce)
 *  - className: additional classes to apply to the wrapper
 *  - label: accessible label for screen readers (defaults to 'Scroll down')
 *
 * Usage:
 *  import BlinkingDownArrow from './BlinkingDownArrow';
 *  <BlinkingDownArrow blink bounce size={36} color="#0ea5e9" />
 */

export default function BlinkingDownArrow({
  size = 28,
  color = "currentColor",
  blink = false,
  bounce = false,
  className = "",
  label = "Scroll down",
}) {
  // build animation classes
  const animClasses = [
    blink ? "animate-pulse" : "",
    bounce ? "animate-bounce" : "",
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <div
      role="img"
      aria-label={label}
      className={`inline-flex items-center justify-center ${className}`}
      onClick={() => {
        window.scrollBy({ top: window.innerHeight - 80, behavior: "smooth" });
      }}
    >
      {/* Icon wrapper to control size and color */}
      <span
        className={`inline-block ${animClasses} text-[${typeof size === 'number' ? `${size}px` : size}]`}
        style={{ lineHeight: 0 }}
      >
        {/* Using react-icons for crisp SVG */}
        <FiChevronDown size={size} color={color} aria-hidden="true" />
      </span>
    </div>
  );
}
