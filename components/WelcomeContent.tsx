"use client";

import { useEffect } from "react";
import AnimationComponent from "@/components/AnimationComponent";

export default function WelcomeContent() {
  useEffect(() => {
    // Set body background color for the welcome page
    document.body.style.backgroundColor = "#000000";
    
    // Cleanup function to reset background when component unmounts
    return () => {
      document.body.style.backgroundColor = "";
    };
  }, []);

  return (
    <div className="min-h-screen w-full">
      <AnimationComponent />
    </div>
  );
}