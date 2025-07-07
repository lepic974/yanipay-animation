"use client";

import { Button } from "@/components/ui/button";
import { ArrowRight, Play } from "lucide-react";
import Link from "next/link";
import { FlickeringGridDemo } from "@/components/ui/flickering-grid-demo";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Animation */}
      <div className="absolute inset-0 z-0">
        <FlickeringGridDemo />
      </div>
      
      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center">
        <div className="max-w-4xl mx-auto space-y-8">
          {/* Badge */}
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium border border-primary/20">
            🚀 Révolutionnez vos paiements avec YaniPay
          </div>
          
          {/* Main Heading */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight">
            L'avenir des
            <span className="block bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent">
              paiements numériques
            </span>
          </h1>
          
          {/* Description */}
          <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Découvrez YaniPay, la super-app qui combine carte de paiement innovante, 
            programme de fidélité révolutionnaire et crypto-monnaie YaniCoin pour 
            transformer votre expérience financière.
          </p>
          
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link href="/auth/signup">
              <Button size="lg" className="text-lg px-8 py-6 rounded-full group">
                Commencer maintenant
                <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Button>
            </Link>
            <Button 
              variant="outline" 
              size="lg" 
              className="text-lg px-8 py-6 rounded-full group"
            >
              <Play className="mr-2 h-5 w-5" />
              Voir la démo
            </Button>
          </div>
          
          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16 pt-16 border-t border-border/50">
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-primary mb-2">10K+</div>
              <div className="text-muted-foreground">Utilisateurs actifs</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-primary mb-2">500+</div>
              <div className="text-muted-foreground">Partenaires commerciaux</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-primary mb-2">99.9%</div>
              <div className="text-muted-foreground">Disponibilité</div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent z-5" />
    </section>
  );
}