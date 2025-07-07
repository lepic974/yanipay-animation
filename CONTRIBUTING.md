# Guide de Contribution - YaniPay

Merci de votre intérêt pour contribuer à YaniPay ! Ce guide vous aidera à démarrer.

## 🚀 Démarrage Rapide

### Prérequis
- Node.js 18+ 
- PostgreSQL 14+
- Git

### Installation

1. **Cloner le projet**
```bash
git clone https://github.com/lepic974/yanipay-animation.git
cd yanipay-animation
```

2. **Installer les dépendances**
```bash
npm install
```

3. **Configuration de l'environnement**
```bash
cp .env.example .env.local
# Éditer .env.local avec vos configurations
```

4. **Base de données**
```bash
# Générer le client Prisma
npx prisma generate

# Appliquer les migrations
npx prisma db push

# (Optionnel) Seed avec des données de test
npx prisma db seed
```

5. **Lancer le serveur de développement**
```bash
npm run dev
```

## 📋 Standards de Code

### Structure des Commits
Nous utilisons [Conventional Commits](https://www.conventionalcommits.org/):

```
type(scope): description

feat(auth): add Google OAuth integration
fix(wallet): resolve balance calculation bug
docs(readme): update installation instructions
style(ui): improve button hover animations
refactor(api): optimize transaction queries
test(wallet): add unit tests for transfers
```

### Types de Commits
- `feat`: Nouvelle fonctionnalité
- `fix`: Correction de bug
- `docs`: Documentation
- `style`: Formatage, style (pas de changement de code)
- `refactor`: Refactoring de code
- `test`: Ajout ou modification de tests
- `chore`: Tâches de maintenance

### Standards TypeScript
- Utiliser TypeScript strict
- Interfaces pour les types de données
- Nommage en camelCase pour les variables/fonctions
- Nommage en PascalCase pour les composants/classes

### Standards React
- Composants fonctionnels avec hooks
- Props typées avec TypeScript
- Utiliser `"use client"` pour les composants interactifs
- Préférer les composants réutilisables

## 🏗️ Architecture

### Structure des Dossiers
```
app/                 # App Router (Next.js 13+)
├── auth/           # Pages d'authentification
├── dashboard/      # Interface utilisateur connecté
└── globals.css     # Styles globaux

components/         # Composants React
├── ui/            # Composants UI de base (shadcn/ui)
├── yani-coin/     # Composants spécifiques YaniCoin
└── unik-card/     # Composants spécifiques UnikCard

lib/               # Utilitaires et configuration
├── prisma.ts      # Client base de données
├── utils.ts       # Fonctions utilitaires
└── vertex-ai.ts   # Intégration IA

hooks/             # Hooks React personnalisés
prisma/            # Schéma et migrations DB
types/             # Définitions TypeScript
```

### Composants UI
Nous utilisons [shadcn/ui](https://ui.shadcn.com/) pour les composants de base :
- Installation via CLI : `npx shadcn-ui@latest add [component]`
- Personnalisation dans `components/ui/`
- Thème configuré dans `tailwind.config.js`

## 🔄 Workflow de Contribution

### 1. Créer une Branche
```bash
git checkout -b feature/nom-de-la-fonctionnalite
# ou
git checkout -b fix/description-du-bug
```

### 2. Développer
- Écrire du code propre et documenté
- Ajouter des tests si nécessaire
- Respecter les standards de code

### 3. Tester
```bash
# Linter
npm run lint

# Tests (quand disponibles)
npm run test

# Build
npm run build
```

### 4. Commit et Push
```bash
git add .
git commit -m "feat(scope): description de la fonctionnalité"
git push origin feature/nom-de-la-fonctionnalite
```

### 5. Pull Request
- Créer une PR avec une description claire
- Lier les issues concernées
- Demander une review

## 🧪 Tests

### Types de Tests
- **Unit Tests**: Fonctions utilitaires, hooks
- **Integration Tests**: API routes, base de données
- **E2E Tests**: Parcours utilisateur complets

### Outils
- Jest pour les tests unitaires
- Cypress pour les tests E2E
- Testing Library pour les composants React

## 📚 Ressources

### Documentation Technique
- [Next.js 15](https://nextjs.org/docs)
- [Prisma](https://www.prisma.io/docs)
- [NextAuth.js](https://next-auth.js.org/)
- [Tailwind CSS](https://tailwindcss.com/docs)
- [shadcn/ui](https://ui.shadcn.com/)

### Design System
- Palette de couleurs dans `tailwind.config.js`
- Composants dans `components/ui/`
- Animations avec Framer Motion

## 🐛 Signaler un Bug

1. Vérifier que le bug n'est pas déjà signalé
2. Créer une issue avec :
   - Description claire du problème
   - Étapes pour reproduire
   - Environnement (OS, navigateur, version)
   - Screenshots si pertinent

## 💡 Proposer une Fonctionnalité

1. Créer une issue "Feature Request"
2. Décrire le besoin et la solution proposée
3. Discuter avec l'équipe avant de développer

## 🤝 Code de Conduite

- Respecter tous les contributeurs
- Être constructif dans les reviews
- Partager les connaissances
- Maintenir un environnement inclusif

## 📞 Support

- **Issues GitHub**: Pour les bugs et fonctionnalités
- **Discussions**: Pour les questions générales
- **Email**: contact@yanipay.com

---

Merci de contribuer à YaniPay ! 🚀