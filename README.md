<h1 align="center">
    <img
        width="35"
        alt="bowl food solid"
        title="bowl food solid"
        src="https://raw.githubusercontent.com/LuizFelipeM/cheff-root/master/src/assets/bowl-food-solid.svg"
    />
    Cheff Recipe - Single-SPA Application
</h1>

[![Netlify Status](https://api.netlify.com/api/v1/badges/8e3ec605-3267-47ed-9fe2-32f650abe268/deploy-status)](https://app.netlify.com/sites/cheff-recipe-page/deploys)

This project was created to learn a set of [techonologies](#technologies). They are implemented just for fun in a recipes search website called Cheff.

This repository is the Single-SPA Application responsible for providing a recipe page showing informations about the selected recipe, ingredients needed and the preparation method. The recipe selected use the shared state provided by the [Utility Application](https://github.com/LuizFelipeM/cheff-utility) and the [Cheff-carousel](https://github.com/LuizFelipeM/cheff-carousel) to show sceneraios when you have multiple microfrontends being mounted and called by the same page as parcels.

## Demo

If you want to see this and the other 7 applications in action access Cheff [here](https://cheffhub.netlify.app/).

## Development process

You can see the whole development process documented on my [medium post](https://medium.com/).

## Applications

The microfrontend architechture let each application be updated and deployed independently without affecting others.

- [Cheff-root](https://github.com/LuizFelipeM/cheff-root) - Root Config Application
- [Cheff-home](https://github.com/LuizFelipeM/cheff-home) - React Application
- [Cheff-search](https://github.com/LuizFelipeM/cheff-search) - React Application
- **(This Repo)** [Cheff-recipe](https://github.com/LuizFelipeM/cheff-recipe) - Angular Application
- [Cheff-carousel](https://github.com/LuizFelipeM/cheff-carousel) - Svelte Application
- [Cheff-searchbar](https://github.com/LuizFelipeM/cheff-searchbar) - Vue Application
- [Cheff-styleguide](https://github.com/LuizFelipeM/cheff-styleguide) - Vanilla JS/Mustache Application
- [Cheff-utility](https://github.com/LuizFelipeM/cheff-utility) - Typescript Application

## Technologies

For the management of the applications I used [Single-SPA](https://single-spa.js.org/) that has proven to be a powerful tool for microfrontend development and has plenty of features right out of the box. For styling I choose to use [Bulma](https://bulma.io/) CSS framework since it's easy to use, easy to setup, and they just released the v1.0 that catch my attention of its capabilities. And last but not least [Font Awesome](https://fontawesome.com/) to get incredible icons.

All data was provided by the [Spoonacular API](https://spoonacular.com/food-api) and the [News API](https://newsapi.org/) that helped tremendously to focus only in the implementation and not in the data.

## Running locally

To run the whole application locally clone this repository and the other 7 repositories in the [applications](#applications) section.

Run the install command:
```bash
npm install
# or
yarn install
```

Run it locally using the start command:
```bash
npm serve
# or
yarn serve
```

Do the process of [Running locally](#running-locally) described in each of the [applications](#applications) and you'll have the full application up and running.

## Building for production

To ship this application to production environment first need to build it using the following command
```bash
npm run build
# or
yarn build
```
it will produce the webpack build files in the `/dist` folder.