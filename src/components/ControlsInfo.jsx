import React from "react";

export const ControlsInfo = () => {
  return (
    <div
      style={{
        position: "absolute",
        bottom: "10px",
        left: "10px",
        backgroundColor: "rgba(255, 255, 255, 0.8)",
        padding: "10px",
        borderRadius: "8px",
        zIndex: 1,
        fontSize: "14px",
        lineHeight: "1.5",
      }}
    >
      <h4>Game Controls</h4>
      <ul style={{ listStyle: "none", padding: 0 }}>
        <li>
          <strong>W</strong>: Move Forward
        </li>
        <li>
          <strong>S</strong>: Move Backward
        </li>
        <li>
          <strong>A</strong>: Move Left
        </li>
        <li>
          <strong>D</strong>: Move Right
        </li>
        <li>
          <strong>Space</strong>: Jump
        </li>
        <li>
          <strong>1-7</strong>: Change Textures
        </li>
        <li>
          <strong>Alt + Click</strong>: Remove Block
        </li>
        <li>
          <strong>Left Click</strong>: Add Block
        </li>
      </ul>
    </div>
  );
};
