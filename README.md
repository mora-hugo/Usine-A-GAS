# 🏭 Usine-A-GAS

Une usine à gaz fonctionnelle construite avec Google Apps Script (GAS) !

## Description

Ce projet implémente une "usine à gaz" complète en utilisant Google Apps Script. L'usine simule un processus de production de gaz avec toutes les étapes industrielles : vérification des systèmes, production, contrôle qualité, et stockage.

## Fonctionnalités

🔧 **Vérification des systèmes** - Contrôle de l'état opérationnel des équipements
⚗️ **Production de gaz** - Génération de différents types de gaz (Méthane, Propane, Butane, etc.)
✅ **Contrôle qualité** - Analyse de la pureté et conformité des produits
📦 **Stockage** - Gestion des réservoirs et inventaire
📊 **Rapports** - Génération de rapports de production détaillés

## Installation

1. Créez un nouveau projet Google Apps Script
2. Copiez le contenu de `Code.gs` dans l'éditeur
3. Configurez le projet avec les paramètres de `appsscript.json`
4. Sauvegardez et testez

## Utilisation

### Fonctions principales

```javascript
// Démarre l'usine complète
demarrerUsine()

// Test de fonctionnement
testerUsine()

// Affichage des métriques
afficherMetriques()
```

### Exemple d'exécution

```javascript
function main() {
  console.log("🏭 Démarrage de l'Usine à GAS");
  const rapport = demarrerUsine();
  console.log("Rapport:", rapport);
}
```

## Structure du projet

```
Usine-A-GAS/
├── Code.gs          # Code principal de l'usine
├── appsscript.json  # Configuration du projet GAS
├── README.md        # Documentation
└── LICENSE          # Licence MIT
```

## Fonctions disponibles

- `demarrerUsine()` - Lance le processus complet de production
- `verifierSystemes()` - Vérifie l'état des équipements
- `produireGaz()` - Génère la production de gaz
- `controlerQualite()` - Analyse la qualité des produits
- `stockerGaz()` - Gère le stockage en réservoirs
- `genererRapport()` - Crée un rapport de production
- `testerUsine()` - Lance un test complet
- `afficherMetriques()` - Affiche les métriques opérationnelles

## Exemple de sortie

```
🏭 Démarrage de l'Usine à GAS...
🔧 Vérification des systèmes...
  ✅ Réacteur principal: OK
  ✅ Système de refroidissement: OK
  ✅ Contrôleur de pression: OK
  ✅ Détecteur de fuites: OK
⚗️ Démarrage de la production de gaz...
  ⚗️ Produit: 567m³ de Méthane (92.45% pureté)
  ⚗️ Produit: 834m³ de Propane (88.12% pureté)
  [...]
✅ Contrôle qualité...
📦 Stockage du gaz produit...
🎉 Usine à GAS opérationnelle!
```

## Contribuer

Les contributions sont les bienvenues ! N'hésitez pas à :
- Signaler des bugs
- Proposer des améliorations
- Ajouter de nouvelles fonctionnalités

## Licence

Ce projet est sous licence MIT. Voir le fichier [LICENSE](LICENSE) pour plus de détails.

---

*Projet créé avec ❤️ et Google Apps Script*