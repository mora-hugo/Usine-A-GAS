/**
 * Exemple d'utilisation de l'Usine à GAS
 * Example usage of the Gas Factory
 */

/**
 * Fonction principale pour demonstrer l'utilisation
 */
function exempleComplet() {
  console.log("🚀 DÉMONSTRATION COMPLÈTE DE L'USINE À GAS");
  console.log("==========================================");
  
  // 1. Test de l'usine
  console.log("\n1️⃣ Test initial de l'usine:");
  const testResult = testerUsine();
  
  // 2. Démarrage complet
  console.log("\n2️⃣ Démarrage complet de l'usine:");
  const rapport = demarrerUsine();
  
  // 3. Surveillance
  console.log("\n3️⃣ Surveillance temps réel:");
  const surveillance = surveillanceTempsReel();
  
  // 4. Tableau de bord
  console.log("\n4️⃣ Tableau de bord:");
  const dashboard = tableauDeBord();
  
  // 5. Métriques
  console.log("\n5️⃣ Métriques de performance:");
  const metriques = afficherMetriques();
  
  console.log("\n" + "=".repeat(50));
  console.log("✅ DÉMONSTRATION TERMINÉE");
  console.log("L'Usine à GAS fonctionne parfaitement! 🎉");
  
  return {
    test: testResult,
    rapport: rapport,
    surveillance: surveillance,
    dashboard: dashboard,
    metriques: metriques
  };
}

/**
 * Démonstration rapide pour les tests
 */
function demoRapide() {
  console.log("⚡ DÉMO RAPIDE");
  console.log("==============");
  
  // Juste le démarrage et les métriques
  const rapport = demarrerUsine();
  const metriques = afficherMetriques();
  
  console.log("\n🎯 RÉSUMÉ:");
  console.log(`📊 Statut: ${rapport.statut}`);
  console.log(`⚗️ Gaz produits: ${rapport.resume.gazProduits} types`);
  console.log(`📦 Volume total: ${rapport.resume.volumeTotal}`);
  console.log(`✅ Qualité moyenne: ${rapport.resume.qualiteMoyenne}`);
  
  return { rapport, metriques };
}

/**
 * Simulation d'une journée de production
 */
function simulerJournee() {
  console.log("📅 SIMULATION D'UNE JOURNÉE DE PRODUCTION");
  console.log("==========================================");
  
  const heures = [6, 10, 14, 18, 22]; // 5 contrôles par jour
  const resultats = [];
  
  heures.forEach((heure, index) => {
    console.log(`\n⏰ ${heure}h00 - Contrôle ${index + 1}/5`);
    console.log("-".repeat(30));
    
    const rapport = demarrerUsine();
    const surveillance = surveillanceTempsReel();
    
    resultats.push({
      heure: `${heure}h00`,
      production: rapport.resume.volumeTotal,
      qualite: rapport.resume.qualiteMoyenne,
      alertes: surveillance.alertes.length,
      statut: surveillance.alertes.length === 0 ? "OK" : "ATTENTION"
    });
    
    console.log(`📊 Production: ${rapport.resume.volumeTotal}`);
    console.log(`✅ Qualité: ${rapport.resume.qualiteMoyenne}`);
    console.log(`🚨 Alertes: ${surveillance.alertes.length}`);
  });
  
  console.log("\n" + "=".repeat(50));
  console.log("📈 BILAN DE LA JOURNÉE:");
  resultats.forEach(r => {
    const statusIcon = r.statut === "OK" ? "✅" : "⚠️";
    console.log(`  ${statusIcon} ${r.heure}: ${r.production} - ${r.qualite} - ${r.alertes} alerte(s)`);
  });
  
  return resultats;
}

/**
 * Fonction d'aide pour les nouveaux utilisateurs
 */
function aide() {
  console.log("❓ AIDE - USINE À GAS");
  console.log("=====================");
  console.log("");
  console.log("🚀 FONCTIONS PRINCIPALES:");
  console.log("  • demarrerUsine()     - Lance la production complète");
  console.log("  • testerUsine()       - Test de fonctionnement");
  console.log("  • afficherMetriques() - Affiche les métriques");
  console.log("");
  console.log("📊 SURVEILLANCE:");
  console.log("  • surveillanceTempsReel() - Monitoring des capteurs");
  console.log("  • tableauDeBord()         - Vue d'ensemble complète");
  console.log("  • optimiserProduction()   - Suggestions d'optimisation");
  console.log("  • maintenancePreventive() - Planning de maintenance");
  console.log("");
  console.log("💰 GESTION:");
  console.log("  • analyserCouts() - Analyse des coûts de production");
  console.log("");
  console.log("🎯 EXEMPLES:");
  console.log("  • exempleComplet() - Démonstration complète");
  console.log("  • demoRapide()     - Démo rapide");
  console.log("  • simulerJournee() - Simulation d'une journée");
  console.log("");
  console.log("Pour commencer, tapez: demarrerUsine()");
  
  return "Aide affichée! Bon usage de l'Usine à GAS! 🏭";
}