import React from "react";
import { useStore } from "../hooks/useStore.js";

export const Menu = () => {
  const saveWorld = useStore((state) => state.saveWorld);

  return (
    <div
      style={{
        position: "absolute",
        top: "10px",
        left: "10px",
        backgroundColor: "rgba(255, 255, 255, 0.8)",
        padding: "10px",
        borderRadius: "8px",
        zIndex: 1,
      }}
    >
      <button
        onClick={saveWorld}
        style={{
          padding: "10px",
          fontWeight: "bold",
          cursor: "pointer",
          border: "none",
          borderRadius: "4px",
          backgroundColor: "#007bff",
          color: "white",
        }}
      >
        Save World
      </button>
    </div>
  );
};
