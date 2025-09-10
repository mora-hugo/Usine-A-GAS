/**
 * Usine à GAS - Une usine à gaz fonctionnelle avec Google Apps Script
 * Gas Factory - A working gas factory with Google Apps Script
 */

/**
 * Démarre l'usine à gaz
 * Starts the gas factory
 */
function demarrerUsine() {
  console.log("🏭 Démarrage de l'Usine à GAS...");
  
  const rapportProduction = {
    timestamp: new Date(),
    statut: "OPERATIONNEL",
    production: [],
    metriques: {}
  };
  
  // Étape 1: Vérification des systèmes
  console.log("🔧 Vérification des systèmes...");
  const systemesOK = verifierSystemes();
  
  if (systemesOK) {
    // Étape 2: Production de gaz
    console.log("⚗️ Démarrage de la production de gaz...");
    const gaz = produireGaz();
    rapportProduction.production = gaz;
    
    // Étape 3: Contrôle qualité
    console.log("✅ Contrôle qualité...");
    const qualite = controlerQualite(gaz);
    rapportProduction.metriques.qualite = qualite;
    
    // Étape 4: Stockage
    console.log("📦 Stockage du gaz produit...");
    const stockage = stockerGaz(gaz);
    rapportProduction.metriques.stockage = stockage;
    
    console.log("🎉 Usine à GAS opérationnelle!");
  } else {
    console.log("❌ Échec du démarrage - systèmes défaillants");
    rapportProduction.statut = "ERREUR";
  }
  
  // Générer le rapport
  const rapport = genererRapport(rapportProduction);
  console.log("📊 Rapport de production:", rapport);
  
  return rapport;
}

/**
 * Vérifie l'état des systèmes de l'usine
 */
function verifierSystemes() {
  const systemes = [
    { nom: "Réacteur principal", statut: Math.random() > 0.1 },
    { nom: "Système de refroidissement", statut: Math.random() > 0.1 },
    { nom: "Contrôleur de pression", statut: Math.random() > 0.1 },
    { nom: "Détecteur de fuites", statut: Math.random() > 0.1 }
  ];
  
  let tousOperationnels = true;
  systemes.forEach(systeme => {
    const statusIcon = systeme.statut ? "✅" : "❌";
    console.log(`  ${statusIcon} ${systeme.nom}: ${systeme.statut ? "OK" : "DÉFAILLANT"}`);
    if (!systeme.statut) tousOperationnels = false;
  });
  
  return tousOperationnels;
}

/**
 * Produit différents types de gaz
 */
function produireGaz() {
  const typesGaz = ["Méthane", "Propane", "Butane", "Hydrogène", "Gaz Naturel"];
  const production = [];
  
  typesGaz.forEach(type => {
    const quantite = Math.floor(Math.random() * 1000) + 100;
    const purete = (Math.random() * 20 + 80).toFixed(2); // 80-100%
    
    production.push({
      type: type,
      quantite: quantite,
      unite: "m³",
      purete: `${purete}%`,
      horodatage: new Date()
    });
    
    console.log(`  ⚗️ Produit: ${quantite}m³ de ${type} (${purete}% pureté)`);
  });
  
  return production;
}

/**
 * Contrôle la qualité du gaz produit
 */
function controlerQualite(gaz) {
  console.log("  🔬 Analyse de la qualité...");
  
  let qualiteGlobale = 0;
  let gazConformes = 0;
  
  gaz.forEach(produit => {
    const purete = parseFloat(produit.purete);
    const conforme = purete >= 85;
    
    if (conforme) {
      gazConformes++;
      console.log(`  ✅ ${produit.type}: Conforme (${produit.purete})`);
    } else {
      console.log(`  ⚠️ ${produit.type}: Non conforme (${produit.purete})`);
    }
    
    qualiteGlobale += purete;
  });
  
  const moyennePurete = (qualiteGlobale / gaz.length).toFixed(2);
  const tauxConformite = ((gazConformes / gaz.length) * 100).toFixed(1);
  
  return {
    moyennePurete: `${moyennePurete}%`,
    tauxConformite: `${tauxConformite}%`,
    gazConformes: gazConformes,
    totalGaz: gaz.length
  };
}

/**
 * Stocke le gaz dans les réservoirs
 */
function stockerGaz(gaz) {
  console.log("  📦 Stockage en cours...");
  
  let volumeTotal = 0;
  let reservoirsUtilises = [];
  
  gaz.forEach((produit, index) => {
    const reservoir = `Réservoir-${String.fromCharCode(65 + index)}`; // A, B, C, etc.
    volumeTotal += produit.quantite;
    reservoirsUtilises.push({
      reservoir: reservoir,
      contenu: produit.type,
      volume: produit.quantite
    });
    
    console.log(`  📦 ${reservoir}: ${produit.quantite}m³ de ${produit.type}`);
  });
  
  return {
    volumeTotal: `${volumeTotal}m³`,
    nombreReservoirs: reservoirsUtilises.length,
    reservoirs: reservoirsUtilises
  };
}

/**
 * Génère un rapport de production
 */
function genererRapport(donnees) {
  const rapport = {
    titre: "🏭 RAPPORT DE PRODUCTION - USINE À GAS",
    horodatage: donnees.timestamp.toLocaleString(),
    statut: donnees.statut,
    resume: {
      gazProduits: donnees.production.length,
      volumeTotal: donnees.metriques.stockage?.volumeTotal || "0m³",
      qualiteMoyenne: donnees.metriques.qualite?.moyennePurete || "N/A",
      conformite: donnees.metriques.qualite?.tauxConformite || "N/A"
    },
    details: {
      production: donnees.production,
      qualite: donnees.metriques.qualite,
      stockage: donnees.metriques.stockage
    }
  };
  
  return rapport;
}

/**
 * Fonction de test pour vérifier le bon fonctionnement
 */
function testerUsine() {
  console.log("🧪 Test de l'Usine à GAS");
  console.log("========================");
  
  try {
    const resultat = demarrerUsine();
    console.log("✅ Test réussi!");
    return resultat;
  } catch (error) {
    console.log("❌ Test échoué:", error);
    return null;
  }
}

/**
 * Affiche les métriques de l'usine
 */
function afficherMetriques() {
  console.log("📊 MÉTRIQUES DE L'USINE À GAS");
  console.log("==============================");
  
  const metriques = {
    tempsDeMarche: "24h/24",
    efficacite: "97.3%",
    productionJournaliere: "15,000m³",
    consommationEnergie: "2,500 kWh/jour",
    emissions: "Faibles",
    maintenance: "Programmée"
  };
  
  Object.entries(metriques).forEach(([cle, valeur]) => {
    console.log(`  📈 ${cle}: ${valeur}`);
  });
  
  return metriques;
}