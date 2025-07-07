# YaniPay - Super-App Financière Innovante

![YaniPay Logo](https://github.com/lepic974/yanipay-animation/blob/master/public/logo-128.png)

## 🚀 À Propos

YaniPay est une super-app financière révolutionnaire qui combine :
- 💳 **Carte de paiement intelligente** avec programme de fidélité
- 🪙 **YaniCoin** - Notre crypto-monnaie native
- 🏪 **Marketplace** de services financiers
- 🤖 **IA intégrée** pour la gestion financière
- 🌐 **Écosystème multi-devises** (EUR, BTC, YaniCoin)

## ✨ Fonctionnalités

### 🎯 Pour les Particuliers
- Carte de paiement avec cashback en YaniCoin
- Wallet multi-devises (EUR, BTC, YaniCoin)
- Programme de fidélité unifié
- Conseiller IA personnel
- Transferts instantanés

### 🏢 Pour les Professionnels
- Solutions de paiement B2B
- API d'intégration
- Tableau de bord analytics
- Gestion des employés
- Programme de fidélité personnalisé

### 🏭 Pour les Entreprises
- Plateforme complète de gestion
- Intégrations ERP/CRM
- Reporting avancé
- Multi-entités
- Conformité réglementaire

## 🛠 Stack Technique

### Frontend
- **Next.js 15** avec App Router
- **TypeScript** pour la sécurité des types
- **Tailwind CSS** + **Radix UI** pour l'interface
- **Framer Motion** + **Three.js** pour les animations
- **React Hook Form** + **Zod** pour les formulaires

### Backend
- **Prisma ORM** avec **PostgreSQL**
- **NextAuth.js** pour l'authentification
- **Vertex AI** pour l'intelligence artificielle
- **Treezor/Swan** pour les services bancaires

### DevOps
- **Vercel** pour le déploiement
- **GitHub Actions** pour CI/CD
- **Sentry** pour le monitoring
- **Mixpanel** pour l'analytics

## 🚀 Installation

### Prérequis
- Node.js 18+
- PostgreSQL
- pnpm (recommandé)

### Configuration

1. **Cloner le repository**
```bash
git clone https://github.com/lepic974/yanipay-animation.git
cd yanipay-animation
```

2. **Installer les dépendances**
```bash
pnpm install
```

3. **Configuration de l'environnement**
```bash
cp .env.example .env.local
```

Configurer les variables d'environnement :
```env
# Database
DATABASE_URL="postgresql://..."

# NextAuth
NEXTAUTH_SECRET="your-secret"
NEXTAUTH_URL="http://localhost:3000"

# OAuth Providers
GITHUB_ID="your-github-id"
GITHUB_SECRET="your-github-secret"
GOOGLE_CLIENT_ID="your-google-id"
GOOGLE_CLIENT_SECRET="your-google-secret"

# AI
VERTEX_AI_PROJECT_ID="your-project-id"
```

4. **Base de données**
```bash
pnpm prisma generate
pnpm prisma db push
pnpm prisma db seed
```

5. **Lancer le serveur de développement**
```bash
pnpm dev
```

Ouvrir [http://localhost:3000](http://localhost:3000)

## 📱 Pages Principales

- **/** - Page d'accueil avec animation 3D
- **/accueil** - Landing page principale
- **/dashboard** - Tableau de bord utilisateur
- **/yani-coin** - Présentation de la crypto-monnaie
- **/unik-card** - Carte de paiement intelligente
- **/unik-platform** - Solutions entreprises
- **/chat** - Assistant IA

## 🏗 Architecture

```
yanipay-animation/
├── app/                    # Pages Next.js App Router
│   ├── api/               # API Routes
│   ├── auth/              # Pages d'authentification
│   ├── dashboard/         # Tableau de bord
│   └── [features]/        # Pages fonctionnelles
├── components/            # Composants React
│   ├── ui/               # Composants UI de base
│   ├── sections/         # Sections de pages
│   ├── charts/           # Graphiques et analytics
│   └── [features]/       # Composants métier
├── lib/                  # Utilitaires et configuration
├── hooks/                # Hooks React personnalisés
├── prisma/               # Schéma et migrations DB
└── public/               # Assets statiques
```

## 🔐 Sécurité

- **Authentification multi-facteurs** (2FA)
- **Chiffrement** des données sensibles
- **Audit logs** complets
- **Rate limiting** et protection DDoS
- **Conformité RGPD**

## 🌍 Roadmap

### Phase 1 - MVP (Q1 2024)
- [x] Interface utilisateur moderne
- [x] Système d'authentification
- [x] Wallet de base
- [ ] Intégration bancaire
- [ ] Programme de fidélité

### Phase 2 - Expansion (Q2 2024)
- [ ] Application mobile (PWA)
- [ ] API publique
- [ ] Marketplace partenaires
- [ ] Support multi-langues

### Phase 3 - Innovation (Q3-Q4 2024)
- [ ] DeFi et staking
- [ ] NFT rewards
- [ ] IA avancée
- [ ] Expansion européenne

## 🤝 Contribution

Nous accueillons les contributions ! Voir [CONTRIBUTING.md](CONTRIBUTING.md)

### Développement

1. Fork le projet
2. Créer une branche feature (`git checkout -b feature/AmazingFeature`)
3. Commit les changements (`git commit -m 'Add AmazingFeature'`)
4. Push vers la branche (`git push origin feature/AmazingFeature`)
5. Ouvrir une Pull Request

## 📄 Licence

Ce projet est sous licence MIT. Voir [LICENSE](LICENSE) pour plus de détails.

## 📞 Contact

- **Email**: contact@yanipay.com
- **Website**: [yanipay.com](https://yanipay.com)
- **Twitter**: [@YaniPay](https://twitter.com/yanipay)
- **LinkedIn**: [YaniPay](https://linkedin.com/company/yanipay)

## 🙏 Remerciements

- [Next.js](https://nextjs.org/) pour le framework
- [Vercel](https://vercel.com/) pour l'hébergement
- [Radix UI](https://radix-ui.com/) pour les composants
- [Tailwind CSS](https://tailwindcss.com/) pour le styling
- [Prisma](https://prisma.io/) pour l'ORM

---

**YaniPay** - *Révolutionner l'expérience financière digitale* 🚀