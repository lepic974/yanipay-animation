"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { CreditCard, Gift, Star, Users } from "lucide-react";
import Image from "next/image";

export default function UnikCardHeroSection() {
  const partners = [
    { name: "McDonald's", logo: "🍟" },
    { name: "Starbucks", logo: "☕" },
    { name: "Nike", logo: "👟" },
    { name: "Apple", logo: "🍎" },
    { name: "Amazon", logo: "📦" },
    { name: "Netflix", logo: "🎬" }
  ];

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-purple-50 via-pink-50 to-blue-50 dark:from-purple-950 dark:via-pink-950 dark:to-blue-950">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 25% 25%, #8b5cf6 0%, transparent 50%), radial-gradient(circle at 75% 75%, #ec4899 0%, transparent 50%)`
        }}></div>
      </div>
      
      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <div className="flex items-center space-x-2 text-purple-600 dark:text-purple-400">
                <CreditCard className="h-6 w-6" />
                <span className="font-semibold text-sm uppercase tracking-wider">UNIK CARD</span>
              </div>
              
              <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-purple-600 via-pink-500 to-blue-500 bg-clip-text text-transparent leading-tight">
                Votre Carte
                <br />
                de Fidélité
                <br />
                Universelle
              </h1>
              
              <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 max-w-2xl">
                Une seule carte pour tous vos programmes de fidélité. Collectez des points, débloquez des récompenses exclusives et profitez d'avantages chez tous vos commerçants préférés.
              </p>
            </div>

            {/* Features */}
            <div className="grid md:grid-cols-2 gap-4">
              <Card className="border-purple-200 dark:border-purple-800">
                <CardContent className="p-4">
                  <div className="flex items-center space-x-3">
                    <Gift className="h-8 w-8 text-purple-500" />
                    <div>
                      <h3 className="font-semibold">Récompenses Exclusives</h3>
                      <p className="text-sm text-gray-600 dark:text-gray-400">Débloquez des offres uniques</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
              
              <Card className="border-pink-200 dark:border-pink-800">
                <CardContent className="p-4">
                  <div className="flex items-center space-x-3">
                    <Star className="h-8 w-8 text-pink-500" />
                    <div>
                      <h3 className="font-semibold">Points Unifiés</h3>
                      <p className="text-sm text-gray-600 dark:text-gray-400">Un seul système de points</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
              
              <Card className="border-blue-200 dark:border-blue-800">
                <CardContent className="p-4">
                  <div className="flex items-center space-x-3">
                    <Users className="h-8 w-8 text-blue-500" />
                    <div>
                      <h3 className="font-semibold">Réseau Étendu</h3>
                      <p className="text-sm text-gray-600 dark:text-gray-400">Milliers de partenaires</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
              
              <Card className="border-indigo-200 dark:border-indigo-800">
                <CardContent className="p-4">
                  <div className="flex items-center space-x-3">
                    <CreditCard className="h-8 w-8 text-indigo-500" />
                    <div>
                      <h3 className="font-semibold">Sans Contact</h3>
                      <p className="text-sm text-gray-600 dark:text-gray-400">Paiement NFC intégré</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Partners */}
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-200">Nos Partenaires</h3>
              <div className="flex flex-wrap gap-4">
                {partners.map((partner, index) => (
                  <div key={index} className="flex items-center space-x-2 bg-white dark:bg-gray-800 rounded-lg px-3 py-2 shadow-sm border">
                    <span className="text-2xl">{partner.logo}</span>
                    <span className="text-sm font-medium">{partner.name}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white">
                Commander ma Carte
              </Button>
              <Button size="lg" variant="outline" className="border-purple-500 text-purple-600 hover:bg-purple-50 dark:hover:bg-purple-950">
                Découvrir les Avantages
              </Button>
            </div>
          </div>

          {/* Right Column - Card Visual */}
          <div className="relative">
            <div className="relative w-full max-w-md mx-auto">
              {/* Card Container */}
              <div className="relative perspective-1000">
                <div className="w-80 h-48 mx-auto relative transform-gpu transition-transform duration-700 hover:rotateY-12">
                  {/* Card */}
                  <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-purple-600 via-pink-500 to-blue-600 shadow-2xl transform rotate-3 hover:rotate-0 transition-transform duration-500">
                    {/* Card Content */}
                    <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-purple-600/90 via-pink-500/90 to-blue-600/90 p-6 text-white">
                      {/* Card Header */}
                      <div className="flex justify-between items-start mb-8">
                        <div>
                          <h3 className="text-xl font-bold">UNIK CARD</h3>
                          <p className="text-sm opacity-80">Fidélité Universelle</p>
                        </div>
                        <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center">
                          <CreditCard className="h-4 w-4" />
                        </div>
                      </div>
                      
                      {/* Card Number */}
                      <div className="mb-4">
                        <p className="text-lg font-mono tracking-wider">•••• •••• •••• 1234</p>
                      </div>
                      
                      {/* Card Footer */}
                      <div className="flex justify-between items-end">
                        <div>
                          <p className="text-xs opacity-60">TITULAIRE</p>
                          <p className="text-sm font-semibold">JOHN DOE</p>
                        </div>
                        <div>
                          <p className="text-xs opacity-60">EXPIRE</p>
                          <p className="text-sm font-semibold">12/28</p>
                        </div>
                      </div>
                    </div>
                    
                    {/* Holographic Effect */}
                    <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-transparent via-white/10 to-transparent transform -skew-x-12 translate-x-full animate-shimmer"></div>
                  </div>
                  
                  {/* Floating Elements */}
                  <div className="absolute -top-4 -right-4 w-6 h-6 bg-purple-400 rounded-full animate-bounce" style={{animationDelay: '0s'}}></div>
                  <div className="absolute -bottom-4 -left-4 w-4 h-4 bg-pink-400 rounded-full animate-bounce" style={{animationDelay: '1s'}}></div>
                  <div className="absolute top-1/2 -right-8 w-3 h-3 bg-blue-400 rounded-full animate-bounce" style={{animationDelay: '2s'}}></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <style jsx>{`
        .perspective-1000 {
          perspective: 1000px;
        }
        .transform-gpu {
          transform-style: preserve-3d;
        }
        .rotateY-12 {
          transform: rotateY(12deg);
        }
        @keyframes shimmer {
          0% { transform: translateX(-100%) skewX(-12deg); }
          100% { transform: translateX(200%) skewX(-12deg); }
        }
        .animate-shimmer {
          animation: shimmer 3s infinite;
        }
      `}</style>
    </section>
  );
}