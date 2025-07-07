"use client";

import { cn } from "@/lib/utils";
import { useEffect, useState } from "react";

interface FlickeringGridProps {
  className?: string;
  squareSize?: number;
  gridGap?: number;
  flickerChance?: number;
  color?: string;
  maxOpacity?: number;
  width?: number;
  height?: number;
}

export function FlickeringGridDemo({
  className,
  squareSize = 4,
  gridGap = 6,
  flickerChance = 0.3,
  color = "rgb(59, 130, 246)", // blue-500
  maxOpacity = 0.3,
  width,
  height,
}: FlickeringGridProps = {}) {
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });
  const [grid, setGrid] = useState<number[][]>([]);

  useEffect(() => {
    const updateDimensions = () => {
      setDimensions({
        width: width || window.innerWidth,
        height: height || window.innerHeight,
      });
    };

    updateDimensions();
    window.addEventListener("resize", updateDimensions);

    return () => window.removeEventListener("resize", updateDimensions);
  }, [width, height]);

  useEffect(() => {
    const cols = Math.floor(dimensions.width / (squareSize + gridGap));
    const rows = Math.floor(dimensions.height / (squareSize + gridGap));

    const newGrid = Array.from({ length: rows }, () =>
      Array.from({ length: cols }, () => Math.random())
    );

    setGrid(newGrid);
  }, [dimensions, squareSize, gridGap]);

  useEffect(() => {
    const interval = setInterval(() => {
      setGrid((prevGrid) =>
        prevGrid.map((row) =>
          row.map((cell) =>
            Math.random() < flickerChance ? Math.random() : cell
          )
        )
      );
    }, 100);

    return () => clearInterval(interval);
  }, [flickerChance]);

  return (
    <div
      className={cn(
        "absolute inset-0 overflow-hidden",
        className
      )}
      style={{
        width: dimensions.width,
        height: dimensions.height,
      }}
    >
      <svg
        width="100%"
        height="100%"
        xmlns="http://www.w3.org/2000/svg"
      >
        {grid.map((row, rowIndex) =>
          row.map((opacity, colIndex) => (
            <rect
              key={`${rowIndex}-${colIndex}`}
              x={colIndex * (squareSize + gridGap)}
              y={rowIndex * (squareSize + gridGap)}
              width={squareSize}
              height={squareSize}
              fill={color}
              opacity={opacity * maxOpacity}
            />
          ))
        )}
      </svg>
    </div>
  );
}