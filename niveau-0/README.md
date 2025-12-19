# Test d'entretien - Application Todo

Bienvenue ! Votre tâche consiste à corriger une application Todo simple. L'application comporte plusieurs bugs et fonctionnalités manquantes que vous devez identifier et résoudre.

## Objectifs

1.  **Corriger le bouton Supprimer** : Le bouton de suppression (icône de corbeille) apparaît lorsque vous survolez un élément todo, mais cliquer dessus ne fait actuellement rien.
2.  **Implémenter le basculement Terminé** : Cliquer sur la case à cocher devrait marquer une tâche comme terminée (texte barré), mais cela ne fonctionne pas actuellement.
3.  **Empêcher les Todos vides** : L'application permet de créer des tâches vides. Ajoutez une vérification pour empêcher l'ajout d'un todo si le champ de saisie est vide ou ne contient que des espaces.
4.  **Corriger le compteur d'éléments restants** : Le compteur en bas devrait afficher uniquement le nombre de tâches _actives_ (non terminées), mais il affiche actuellement le nombre total de tâches.
5.  **Implémenter le filtrage** : Les filtres "Tous", "Actifs" et "Terminés" ne fonctionnent pas actuellement. La liste devrait se mettre à jour en fonction du filtre sélectionné.

## Exigences

- L'application utilise React et Tailwind CSS.
- N'utilisez aucune bibliothèque externe pour la gestion d'état (tenez-vous-en aux Hooks React).
- Aucune base de données n'est requise ; conserver les données dans la session locale (état du composant) est suffisant.

## Démarrage

Tout d'abord, lancez le serveur de développement :

```bash
npm install
npm run dev
```

Ouvrez [http://localhost:3000](http://localhost:3000) avec votre navigateur pour voir le résultat.
