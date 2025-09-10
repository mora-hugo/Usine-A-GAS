/**
 * Utilitaires pour l'Usine à GAS
 * Utilities for the Gas Factory
 */

/**
 * Surveillance en temps réel de l'usine
 */
function surveillanceTempsReel() {
  console.log("👀 SURVEILLANCE TEMPS RÉEL");
  console.log("===========================");
  
  const capteurs = {
    temperature: Math.floor(Math.random() * 50) + 20, // 20-70°C
    pression: (Math.random() * 5 + 1).toFixed(2), // 1-6 bar
    debit: Math.floor(Math.random() * 500) + 100, // 100-600 L/min
    niveau: Math.floor(Math.random() * 100), // 0-100%
    vibrations: (Math.random() * 10).toFixed(2) // 0-10 Hz
  };
  
  console.log(`🌡️ Température: ${capteurs.temperature}°C`);
  console.log(`⚡ Pression: ${capteurs.pression} bar`);
  console.log(`💧 Débit: ${capteurs.debit} L/min`);
  console.log(`📊 Niveau réservoir: ${capteurs.niveau}%`);
  console.log(`〰️ Vibrations: ${capteurs.vibrations} Hz`);
  
  // Alertes
  const alertes = [];
  if (capteurs.temperature > 60) alertes.push("🔥 Température élevée!");
  if (capteurs.pression > 5) alertes.push("⚠️ Surpression détectée!");
  if (capteurs.niveau < 20) alertes.push("📉 Niveau bas!");
  if (capteurs.vibrations > 8) alertes.push("🔔 Vibrations anormales!");
  
  if (alertes.length > 0) {
    console.log("\n🚨 ALERTES:");
    alertes.forEach(alerte => console.log(`  ${alerte}`));
  } else {
    console.log("\n✅ Tous les paramètres sont normaux");
  }
  
  return { capteurs, alertes };
}

/**
 * Optimise les paramètres de production
 */
function optimiserProduction() {
  console.log("⚙️ OPTIMISATION DE LA PRODUCTION");
  console.log("=================================");
  
  const parametres = {
    rendement: (Math.random() * 15 + 85).toFixed(1), // 85-100%
    consommationEnergie: Math.floor(Math.random() * 500) + 2000, // 2000-2500 kWh
    efficaciteThermique: (Math.random() * 10 + 90).toFixed(1), // 90-100%
    tempsProduction: Math.floor(Math.random() * 2) + 22 // 22-24h
  };
  
  console.log(`📈 Rendement actuel: ${parametres.rendement}%`);
  console.log(`⚡ Consommation: ${parametres.consommationEnergie} kWh/jour`);
  console.log(`🔥 Efficacité thermique: ${parametres.efficaciteThermique}%`);
  console.log(`⏰ Temps de production: ${parametres.tempsProduction}h/jour`);
  
  // Suggestions d'optimisation
  const suggestions = [];
  if (parseFloat(parametres.rendement) < 90) {
    suggestions.push("🔧 Ajuster les paramètres de combustion");
  }
  if (parametres.consommationEnergie > 2300) {
    suggestions.push("💡 Optimiser l'isolation thermique");
  }
  if (parseFloat(parametres.efficaciteThermique) < 95) {
    suggestions.push("🌡️ Vérifier les échangeurs de chaleur");
  }
  
  if (suggestions.length > 0) {
    console.log("\n💡 SUGGESTIONS D'OPTIMISATION:");
    suggestions.forEach(suggestion => console.log(`  ${suggestion}`));
  } else {
    console.log("\n🎯 Production déjà optimale!");
  }
  
  return { parametres, suggestions };
}

/**
 * Gestion de la maintenance préventive
 */
function maintenancePreventive() {
  console.log("🔧 MAINTENANCE PRÉVENTIVE");
  console.log("=========================");
  
  const equipements = [
    { nom: "Compresseur principal", prochaineMaintenance: 15, priorite: "haute" },
    { nom: "Système de filtration", prochaineMaintenance: 7, priorite: "moyenne" },
    { nom: "Vannes de sécurité", prochaineMaintenance: 30, priorite: "basse" },
    { nom: "Échangeur thermique", prochaineMaintenance: 3, priorite: "critique" },
    { nom: "Capteurs de pression", prochaineMaintenance: 45, priorite: "basse" }
  ];
  
  // Trier par priorité et échéance
  equipements.sort((a, b) => {
    const priorites = { "critique": 0, "haute": 1, "moyenne": 2, "basse": 3 };
    return priorites[a.priorite] - priorites[b.priorite] || a.prochaineMaintenance - b.prochaineMaintenance;
  });
  
  console.log("📋 PLANNING DE MAINTENANCE:");
  equipements.forEach(eq => {
    const icon = eq.priorite === "critique" ? "🚨" : 
                 eq.priorite === "haute" ? "⚠️" : 
                 eq.priorite === "moyenne" ? "⚡" : "📅";
    console.log(`  ${icon} ${eq.nom}: ${eq.prochaineMaintenance} jours (${eq.priorite})`);
  });
  
  // Maintenance urgente
  const urgent = equipements.filter(eq => eq.prochaineMaintenance <= 7);
  if (urgent.length > 0) {
    console.log("\n🚨 MAINTENANCE URGENTE REQUISE:");
    urgent.forEach(eq => console.log(`  ⚠️ ${eq.nom}: ${eq.prochaineMaintenance} jours`));
  }
  
  return { equipements, urgent };
}

/**
 * Analyse des coûts de production
 */
function analyserCouts() {
  console.log("💰 ANALYSE DES COÛTS");
  console.log("====================");
  
  const couts = {
    matieresPremiere: Math.floor(Math.random() * 1000) + 500, // 500-1500€
    energie: Math.floor(Math.random() * 800) + 200, // 200-1000€
    personnel: Math.floor(Math.random() * 2000) + 3000, // 3000-5000€
    maintenance: Math.floor(Math.random() * 500) + 100, // 100-600€
    transport: Math.floor(Math.random() * 300) + 50 // 50-350€
  };
  
  const total = Object.values(couts).reduce((sum, cout) => sum + cout, 0);
  
  console.log("📊 RÉPARTITION DES COÛTS (journaliers):");
  Object.entries(couts).forEach(([categorie, montant]) => {
    const pourcentage = ((montant / total) * 100).toFixed(1);
    console.log(`  💵 ${categorie}: ${montant}€ (${pourcentage}%)`);
  });
  
  console.log(`\n💰 COÛT TOTAL: ${total}€/jour`);
  
  // Calcul du coût par m³
  const volumeProduction = Math.floor(Math.random() * 5000) + 10000; // 10000-15000 m³
  const coutParM3 = (total / volumeProduction).toFixed(3);
  console.log(`📐 Coût par m³: ${coutParM3}€`);
  
  return { couts, total, volumeProduction, coutParM3 };
}

/**
 * Tableau de bord complet
 */
function tableauDeBord() {
  console.log("📊 TABLEAU DE BORD - USINE À GAS");
  console.log("=================================");
  
  const surveillance = surveillanceTempsReel();
  console.log("\n");
  
  const optimisation = optimiserProduction();
  console.log("\n");
  
  const maintenance = maintenancePreventive();
  console.log("\n");
  
  const couts = analyserCouts();
  
  const resume = {
    statut: surveillance.alertes.length === 0 ? "OPÉRATIONNEL" : "ATTENTION",
    rendement: optimisation.parametres.rendement,
    maintenanceUrgente: maintenance.urgent.length,
    coutJournalier: couts.total,
    horodatage: new Date().toLocaleString()
  };
  
  console.log("\n" + "=".repeat(50));
  console.log("📋 RÉSUMÉ EXÉCUTIF:");
  console.log(`🏭 Statut: ${resume.statut}`);
  console.log(`📈 Rendement: ${resume.rendement}%`);
  console.log(`🔧 Maintenance urgente: ${resume.maintenanceUrgente} équipement(s)`);
  console.log(`💰 Coût journalier: ${resume.coutJournalier}€`);
  console.log(`⏰ Dernière mise à jour: ${resume.horodatage}`);
  
  return {
    surveillance,
    optimisation,
    maintenance,
    couts,
    resume
  };
}