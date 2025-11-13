# GT Switzerland 🚗

Site web officiel de **GT Switzerland** - Organisateur de roadtrips d'exception à travers l'Europe depuis 2021.

![GT Switzerland](Site/images/switzerland/SwitzerlandTour_Alps5.png)

## 📋 À propos

GT Switzerland organise des roadtrips exceptionnels à travers les plus belles routes d'Europe. Nous créons des expériences inoubliables pour les passionnés d'automobiles, combinant conduite sportive, découvertes culturelles et gastronomie locale.

### Nos Tours Passés

- **2025** - Tour de Sardaigne 🇮🇹
- **2024** - Tour des Pyrénées 🇫🇷🇪🇸
- **2023** - Tour de Corse 🇫🇷
- **2022** - Tour de la Toscane (Édition Mille Miglia) 🇮🇹
- **2021** - Tour de Suisse (Notre Premier Roadtrip) 🇨🇭

## 🌐 Site Web

Le site web est disponible en **3 langues** :
- 🇫🇷 Français
- 🇩🇪 Allemand
- 🇬🇧 Anglais

### Pages disponibles

- **Accueil** - Présentation de GT Switzerland
- **Nos Expériences** - Historique de nos roadtrips passés
- **Roadtrip 2026** - Informations et réservation pour la prochaine édition
- **Infos** - Informations pratiques
- **FAQ** - Questions fréquentes
- **Contact** - Formulaire de contact

## 🚀 Démarrage Rapide

### Prérequis

Aucun serveur web n'est requis pour le développement local. Le site est entièrement statique (HTML/CSS/JavaScript).

### Installation

1. Clonez le dépôt :
```bash
git clone https://github.com/Zweikow/GTSwitzerland.git
cd GTSwitzerland
```

2. Ouvrez le site :
```bash
cd Site
# Ouvrez accueil.html dans votre navigateur
```

Ou utilisez un serveur local (optionnel) :
```bash
# Avec Python
python -m http.server 8000

# Avec Node.js
npx http-server

# Avec PHP
php -S localhost:8000
```

Puis accédez à `http://localhost:8000/Site/accueil.html`

## 📁 Structure du Projet

```
GTSwitzerland/
├── Site/                           # Site web principal
│   ├── accueil.html               # Page d'accueil
│   ├── experiences.html           # Historique des roadtrips
│   ├── voyages.html              # Roadtrip 2026
│   ├── infos.html                # Informations pratiques
│   ├── faq.html                  # Questions fréquentes
│   ├── contact.html              # Formulaire de contact
│   ├── style.css                 # Feuille de style principale
│   ├── script.js                 # Scripts et traductions
│   ├── images/                   # Images du site
│   │   ├── switzerland/          # Photos Tour de Suisse
│   │   ├── corse/                # Photos Tour de Corse
│   │   ├── pyrenees/             # Photos Tour des Pyrénées
│   │   ├── toscane/              # Photos Tour de Toscane
│   │   └── logo/                 # Logos GT Switzerland
│   ├── LICENSE                   # Licence MIT
│   └── .gitignore               # Fichiers ignorés par Git
│
├── Switzerland Tour - Alps/       # Photos originales Suisse
├── Tour de Corse - France/       # Photos originales Corse
├── Pyrénées Tour - France_Espagne/ # Photos originales Pyrénées
├── Mille Miglia Tour - Toscane/  # Photos originales Toscane
├── Logo/                         # Logos originaux
├── Administration - planning/     # Documents administratifs
├── Concurrents/                  # Analyse concurrentielle
└── README.md                     # Ce fichier

```

## 🎨 Fonctionnalités

### ✨ Design
- Interface moderne et responsive
- Design adaptatif pour mobile, tablette et desktop
- Animations fluides au scroll
- Palette de couleurs élégante (rouge #C41E3A, noir, gris)

### 🌍 Multilingue
- Système de traduction dynamique JavaScript
- Changement de langue en temps réel
- Sauvegarde de la préférence linguistique
- Traductions complètes pour toutes les pages

### 📸 Images
- Photos authentiques de nos roadtrips
- Images optimisées pour le web
- Organisation par destination

### 📱 Responsive
- Compatible mobile, tablette et desktop
- Navigation adaptative
- Images optimisées pour chaque appareil

### 📋 Formulaires
- Formulaire de contact
- Formulaire de pré-réservation Roadtrip 2026
- Validation côté client
- Messages de confirmation

## 🛠️ Technologies Utilisées

- **HTML5** - Structure sémantique
- **CSS3** - Styles modernes et animations
- **JavaScript (Vanilla)** - Interactions et traductions
- **Git** - Gestion de version
- **GitHub** - Hébergement du code

## 🌐 Déploiement

Le site peut être déployé sur n'importe quelle plateforme d'hébergement statique :

### GitHub Pages
```bash
# Activer GitHub Pages dans les paramètres du dépôt
# Source: main branch / Site folder
```

### Netlify
```bash
# Connecter le dépôt GitHub
# Build command: (vide)
# Publish directory: Site
```

### Vercel
```bash
# Importer le projet depuis GitHub
# Framework Preset: Other
# Root Directory: Site
```

## 📝 Traductions

Les traductions sont gérées dans `Site/script.js` via l'objet `translations`. Pour ajouter une nouvelle traduction :

```javascript
const translations = {
    fr: {
        nouvelle_cle: "Texte en français"
    },
    de: {
        nouvelle_cle: "Text auf Deutsch"
    },
    en: {
        nouvelle_cle: "Text in English"
    }
};
```

Puis ajouter l'attribut `data-i18n` dans le HTML :
```html
<p data-i18n="nouvelle_cle">Texte en français</p>
```

## 📧 Contact

Pour toute question ou demande d'information :

- **Email** : contact@gtswitzerland.com
- **Site Web** : [GT Switzerland](https://github.com/Zweikow/GTSwitzerland)

## 📅 Roadmap 2026

- [ ] Finaliser la destination du Roadtrip 2026
- [ ] Ouvrir les inscriptions
- [ ] Ajouter une galerie photos interactive
- [ ] Intégrer un système de paiement en ligne
- [ ] Créer une section témoignages avec vidéos
- [ ] Développer une application mobile compagnon

## 👥 Contributeurs

- **Équipe GT Switzerland** - Organisation et développement

## 📄 Licence

Ce projet est sous licence MIT. Voir le fichier [LICENSE](Site/LICENSE) pour plus de détails.

## 🙏 Remerciements

Merci à tous nos participants qui ont fait de chaque roadtrip une aventure inoubliable depuis 2021 !

---

**GT Switzerland** - *Roadtrips d'exception à travers l'Europe* 🏔️🚗

© 2025 GT Switzerland. Tous droits réservés.
