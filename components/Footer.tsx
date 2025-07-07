import Link from "next/link";
import { Github, Twitter, Linkedin, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";

const footerLinks = {
  product: {
    title: "Produit",
    links: [
      { name: "Carte Unik©", href: "/unik-card" },
      { name: "YaniCoin", href: "/yani-coin" },
      { name: "Programme de fidélité", href: "/loyalty" },
      { name: "API", href: "/developers" },
    ],
  },
  company: {
    title: "Entreprise",
    links: [
      { name: "À propos", href: "/about" },
      { name: "Carrières", href: "/careers" },
      { name: "Presse", href: "/press" },
      { name: "Partenaires", href: "/partnerships" },
    ],
  },
  support: {
    title: "Support",
    links: [
      { name: "Centre d'aide", href: "/help" },
      { name: "Contact", href: "/contact" },
      { name: "Statut", href: "/status" },
      { name: "Communauté", href: "/community" },
    ],
  },
  legal: {
    title: "Légal",
    links: [
      { name: "Confidentialité", href: "/privacy" },
      { name: "Conditions", href: "/terms" },
      { name: "Sécurité", href: "/security" },
      { name: "Cookies", href: "/cookies" },
    ],
  },
};

const socialLinks = [
  { name: "GitHub", href: "https://github.com/yanipay", icon: Github },
  { name: "Twitter", href: "https://twitter.com/yanipay", icon: Twitter },
  { name: "LinkedIn", href: "https://linkedin.com/company/yanipay", icon: Linkedin },
  { name: "Email", href: "mailto:contact@yanipay.com", icon: Mail },
];

export default function Footer() {
  return (
    <footer className="bg-background border-t">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8">
          {/* Brand Section */}
          <div className="lg:col-span-2">
            <Link href="/" className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">Y</span>
              </div>
              <span className="font-bold text-xl">YaniPay</span>
            </Link>
            <p className="text-muted-foreground mb-6 max-w-md">
              Révolutionnez vos paiements avec notre super-app financière. 
              Carte innovante, fidélité et crypto-monnaie en une seule plateforme.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social) => {
                const Icon = social.icon;
                return (
                  <Button
                    key={social.name}
                    variant="ghost"
                    size="icon"
                    asChild
                    className="hover:bg-primary/10 hover:text-primary"
                  >
                    <Link href={social.href} target="_blank" rel="noopener noreferrer">
                      <Icon className="h-5 w-5" />
                      <span className="sr-only">{social.name}</span>
                    </Link>
                  </Button>
                );
              })}
            </div>
          </div>

          {/* Links Sections */}
          {Object.entries(footerLinks).map(([key, section]) => (
            <div key={key}>
              <h3 className="font-semibold mb-4">{section.title}</h3>
              <ul className="space-y-3">
                {section.links.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="text-muted-foreground hover:text-foreground transition-colors"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <Separator className="my-8" />

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <div className="text-muted-foreground text-sm">
            © {new Date().getFullYear()} YaniPay. Tous droits réservés.
          </div>
          <div className="flex items-center space-x-6 text-sm text-muted-foreground">
            <span>🇫🇷 Fait en France</span>
            <span>🔒 Sécurisé par design</span>
            <span>⚡ Alimenté par l'innovation</span>
          </div>
        </div>
      </div>
    </footer>
  );
}