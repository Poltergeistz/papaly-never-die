# Papaly never die 
___ 

### Pré-requis :
- Fork-me
- installer `vue-cli@3`
- installer `vuejs`
- installer `vue-routeur`

### Objectif :

En vous inspirant du site [papaly](https://papaly.com), vous allez créer une application qui va permettre à vos utilisateurs de sauvegarder leurs liens favoris, dans des boards et les classés dans des catégories ou des sous-catégories.

![Bonne Chance](https://media.giphy.com/media/pDgHg2Lcju3Ty/giphy.gif)

### User Stories :

**Espace utilisateur :**

- En tant qu'utilisateur je veux pouvoir créer, éditer, supprimer un/des nouveau.x board.s.
- En tant qu'utilisateur je veux pouvoir créer, éditer, supprimer une/des nouvelle.s catégorie.s 
- En tant qu'utilisateur je veux pouvoir créer, éditer, supprimer une/des nouvelle.s sous-catégorie.s
- En tant qu'utilisateur je veux pouvoir ajouter, éditer, supprimer un/des liens dans mes catégories | sous-catégories.
- En tant qu'utilisateur je veux pouvoir rendre mes boards privé ou public
- En tant qu'utilisateur je veux pouvoir m'abonner à d'autre board.

**Espaces visiteur:**

- En tant que visiteur je veux pouvoir m'inscrire.
- En tant que visiteur je veux pouvoir me connecter.
- En tant que visiteur je veux pouvoir pouvoir voir les boards public.

___

**⚠ Restitution ⚠**

> Faite le plus possible, en groupe ou seul.
> Enjoy ! 

Dans votre Readme.md :

- Planning poker
- Kanban (Trello, Taiga, Kanban flow...)
- Carnet bord suivie (PPP dans un Google doc par ex) 

Sur Simplonline :
- Liens du site héberger (heroku, surge.sh)
- Repository Github.

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Run your tests
```
npm run test
```

### Lints and fixes files
```
npm run lint
```

### Firebase backend
Create a firebaseConfig.js file and populate it with the firebase creds
/!\ Remember to not push this file

```
export default {
    apiKey: <API KEY>,
    authDomain: <AUTH DOMAIN>,
    databaseURL: <DATABASE URL>,
    projectId: <PROJECT ID>,
    storageBucket: <STORAGE BUCKET>,
    messagingSenderId: <MESSAGING SENDER ID>
}
```

### Firestore setup 

Make sure you are in test mode to allow interaction with the database

```
service cloud.firestore {
  match /databases/{database}/documents {
    match /{document=**} {
      allow read, write;
    }
  }
}
```

You can switch mode at any moment in your database > Rules