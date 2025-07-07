"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Coins, TrendingUp, Shield, Zap } from "lucide-react";
import { FlickeringGridDemo } from "@/components/flickering-grid-demo";

export default function YaniCoinHeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-yellow-50 via-orange-50 to-red-50 dark:from-yellow-950 dark:via-orange-950 dark:to-red-950">
      {/* Background Animation */}
      <div className="absolute inset-0 opacity-30">
        <FlickeringGridDemo />
      </div>
      
      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <div className="flex items-center space-x-2 text-yellow-600 dark:text-yellow-400">
                <Coins className="h-6 w-6" />
                <span className="font-semibold text-sm uppercase tracking-wider">YANI COIN</span>
              </div>
              
              <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-yellow-600 via-orange-500 to-red-500 bg-clip-text text-transparent leading-tight">
                La Crypto-monnaie
                <br />
                du Futur
              </h1>
              
              <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 max-w-2xl">
                Découvrez YANI Coin, la crypto-monnaie révolutionnaire qui transforme vos achats quotidiens en opportunités d'investissement. Gagnez, échangez et investissez en toute sécurité.
              </p>
            </div>

            {/* Features */}
            <div className="grid md:grid-cols-3 gap-4">
              <Card className="border-yellow-200 dark:border-yellow-800">
                <CardContent className="p-4 text-center">
                  <TrendingUp className="h-8 w-8 text-yellow-500 mx-auto mb-2" />
                  <h3 className="font-semibold text-sm">Croissance</h3>
                  <p className="text-xs text-gray-600 dark:text-gray-400">Potentiel de valorisation</p>
                </CardContent>
              </Card>
              
              <Card className="border-orange-200 dark:border-orange-800">
                <CardContent className="p-4 text-center">
                  <Shield className="h-8 w-8 text-orange-500 mx-auto mb-2" />
                  <h3 className="font-semibold text-sm">Sécurité</h3>
                  <p className="text-xs text-gray-600 dark:text-gray-400">Blockchain sécurisée</p>
                </CardContent>
              </Card>
              
              <Card className="border-red-200 dark:border-red-800">
                <CardContent className="p-4 text-center">
                  <Zap className="h-8 w-8 text-red-500 mx-auto mb-2" />
                  <h3 className="font-semibold text-sm">Rapidité</h3>
                  <p className="text-xs text-gray-600 dark:text-gray-400">Transactions instantanées</p>
                </CardContent>
              </Card>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="bg-gradient-to-r from-yellow-500 to-orange-500 hover:from-yellow-600 hover:to-orange-600 text-white">
                Acheter YANI Coin
              </Button>
              <Button size="lg" variant="outline" className="border-yellow-500 text-yellow-600 hover:bg-yellow-50 dark:hover:bg-yellow-950">
                En savoir plus
              </Button>
            </div>
          </div>

          {/* Right Column - Visual */}
          <div className="relative">
            <div className="relative w-full max-w-md mx-auto">
              {/* Coin Animation */}
              <div className="relative">
                <div className="w-80 h-80 mx-auto relative">
                  {/* Outer Ring */}
                  <div className="absolute inset-0 rounded-full border-4 border-yellow-300 dark:border-yellow-600 animate-spin" style={{animationDuration: '20s'}}></div>
                  
                  {/* Middle Ring */}
                  <div className="absolute inset-4 rounded-full border-2 border-orange-300 dark:border-orange-600 animate-spin" style={{animationDuration: '15s', animationDirection: 'reverse'}}></div>
                  
                  {/* Inner Coin */}
                  <div className="absolute inset-8 rounded-full bg-gradient-to-br from-yellow-400 via-orange-500 to-red-500 shadow-2xl flex items-center justify-center animate-pulse">
                    <div className="text-white text-4xl font-bold">YC</div>
                  </div>
                  
                  {/* Floating Elements */}
                  <div className="absolute -top-4 -right-4 w-8 h-8 bg-yellow-400 rounded-full animate-bounce" style={{animationDelay: '0s'}}></div>
                  <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-orange-400 rounded-full animate-bounce" style={{animationDelay: '1s'}}></div>
                  <div className="absolute top-1/2 -left-8 w-4 h-4 bg-red-400 rounded-full animate-bounce" style={{animationDelay: '2s'}}></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}