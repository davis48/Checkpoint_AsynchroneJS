// -----------------------------------------------------------------
// Tâche 01 : Itérer avec Async/Await
// Cette fonction reçoit un tableau de valeurs et les affiche
// avec un délai d'une seconde entre chaque affichage.
// -----------------------------------------------------------------
async function iterateWithAsyncAwait(values) {
    for (const value of values) {
      console.log(value);
      // Attendre 1 seconde avant de passer à la valeur suivante
      await new Promise(resolve => setTimeout(resolve, 1000));
    }
  }
  
  // -----------------------------------------------------------------
  // Tâche 02 et Tâche 03 : Attendre un appel et gérer les erreurs
  // Nous simulons ici un appel à une API avec la fonction fakeApiCall.
  // La fonction awaitCall attend la réponse et gère les erreurs éventuelles.
  // -----------------------------------------------------------------
  function fakeApiCall() {
    // Simuler un appel API qui prend 1 seconde et qui a 70% de chances de réussir.
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (Math.random() < 0.7) {
          resolve({ result: "Succès", data: [1, 2, 3] });
        } else {
          reject(new Error("L'appel à l'API a échoué"));
        }
      }, 1000);
    });
  }
  
  async function awaitCall() {
    try {
      const data = await fakeApiCall();
      console.log("Données reçues :", data);
    } catch (error) {
      console.error("Erreur lors de l'appel à l'API :", error.message);
    }
  }
  
  // -----------------------------------------------------------------
  // Chaîner Async/Await : Appeler trois fonctions asynchrones séquentiellement
  // Chaque fonction simule une opération qui se termine après 1 seconde.
  // -----------------------------------------------------------------
  async function asyncFunction1() {
    await new Promise(resolve => setTimeout(resolve, 1000));
    console.log("Fonction 1 terminée");
  }
  
  async function asyncFunction2() {
    await new Promise(resolve => setTimeout(resolve, 1000));
    console.log("Fonction 2 terminée");
  }
  
  async function asyncFunction3() {
    await new Promise(resolve => setTimeout(resolve, 1000));
    console.log("Fonction 3 terminée");
  }
  
  async function chainedAsyncFunctions() {
    await asyncFunction1();
    await asyncFunction2();
    await asyncFunction3();
  }
  
  // -----------------------------------------------------------------
  // Tâche 04 : Attente de requêtes simultanées
  // Ici, nous effectuons deux appels API (en utilisant fakeApiCall) en
  // parallèle grâce à Promise.all(), puis nous affichons les résultats combinés.
  // -----------------------------------------------------------------
  async function concurrentRequests() {
    try {
      const [data1, data2] = await Promise.all([fakeApiCall(), fakeApiCall()]);
      console.log("Résultats combinés :", { data1, data2 });
    } catch (error) {
      console.error("Erreur lors des requêtes simultanées :", error.message);
    }
  }
  
  // -----------------------------------------------------------------
  // Tâche 05 : Attente des appels parallèles
  // Cette fonction prend un tableau d'URLs et récupère les données de
  // chacune d'elles en parallèle en utilisant Promise.all().
  // Pour cet exemple, nous utilisons fetch pour récupérer des données JSON.
  // -----------------------------------------------------------------
  async function parallelCalls(urls) {
    try {
      const responses = await Promise.all(
        urls.map(async (url) => {
          const response = await fetch(url);
          return response.json();
        })
      );
      console.log("Réponses :", responses);
    } catch (error) {
      console.error("Erreur lors des appels parallèles :", error.message);
    }
  }
  