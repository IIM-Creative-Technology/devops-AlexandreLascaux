# Explication de la CI/CD du projet

Dans un premier temps, je tiens à préciser que ce projet contient deux parties :

- le backend : API en Express.js contenant une base de données en MySql

- le frontend: application en Angular 8, totalement indépendante du backend

## La CI/CD du backend

Elle se décompose en deux fichiers :

- Le premier comprenant une CI/CD complête avec un déploiement sur Heroku (deployBack.yml)
- Le second comprenant juste une CI lors d'une pull request (prBack.yml)

Dans le premier ficher, cela, installe en premier, les dépendaces nécessaires, construit l'application, vérifie le code et déploie le tout sur Heroku.

Dans le second fichier, cela reproduit les mêmes étapes sans déployer sur Heroku.

## La CI/CD du frontend

Elle se décompoese également en deux fichiers :

- Le premier comprenant une CI/CD complête avec un déploiement sur Heroku (deployFront.yml)

- Le second comprenant juste une CI lors d'une pull request (prFront.yml)

Dans le premier ficher, cela installe, en premier, les dépendaces nécessaires, vérifie le code, exécute les scripts de testes, construit l'application et déploie le tout sur Heroku.

Dans le second fichier, cela reproduit les mêmes étapes sans déployer sur Heroku.

___

1. *Il y a une erreur lors du build sur Heroku, certainement dû au buildpack mais ne trouvant pas le buildpack nécessaire, je préviens*

2. *Le rendu étant sur un seul repository, je me permets de mettre les liens de deux repository distincts, [celui du back](https://github.com/AlexandreLascaux/dataviz-back) et [celui du front](https://github.com/AlexandreLascaux/dataviz-front), afin de montrer les deux worflows disctincts des deux parties avec les branches master (= prod) et pre-prod*
