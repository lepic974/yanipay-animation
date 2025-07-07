"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Hero from "@/components/Hero";

export default function AnimationComponent() {
  const [showAnimation, setShowAnimation] = useState(true);
  const [animationComplete, setAnimationComplete] = useState(false);
  const router = useRouter();

  useEffect(() => {
    // Animation sequence
    const timer1 = setTimeout(() => {
      setAnimationComplete(true);
    }, 2000);

    const timer2 = setTimeout(() => {
      setShowAnimation(false);
    }, 3000);

    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
    };
  }, []);

  if (showAnimation) {
    return (
      <div className="fixed inset-0 z-50 flex items-center justify-center bg-black">
        <div className="text-center space-y-8">
          {/* Logo Animation */}
          <div className="relative">
            <div className="w-24 h-24 mx-auto bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl flex items-center justify-center transform transition-all duration-1000 hover:scale-110">
              <span className="text-white font-bold text-4xl">Y</span>
            </div>
            {animationComplete && (
              <div className="absolute -inset-4 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl opacity-20 animate-pulse" />
            )}
          </div>
          
          {/* Text Animation */}
          <div className="space-y-4">
            <h1 className="text-4xl md:text-6xl font-bold text-white animate-fadeIn">
              YaniPay
            </h1>
            <p className="text-xl text-gray-300 animate-fadeIn animation-delay-500">
              L'avenir des paiements numériques
            </p>
          </div>
          
          {/* Loading Animation */}
          <div className="flex justify-center">
            <div className="w-16 h-1 bg-gray-800 rounded-full overflow-hidden">
              <div className="h-full bg-gradient-to-r from-blue-600 to-purple-600 rounded-full animate-pulse" />
            </div>
          </div>
        </div>
      </div>
    );
  }

  return <Hero />;
}