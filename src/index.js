'use strict';

import getData from "./modules/getData";
import renderCards from "./modules/renderCards";
import renderCatalog from "./modules/renderCatalog";
import toggleCheakbox from "./modules/toggleCheakbox";
import toggleCart from "./modules/toggleCart";
import actionPage from "./modules/actionPage";
import openCart from "./modules/openCart";



getData().then((data) => {
    renderCards(data);
    renderCatalog();
    toggleCheakbox();
    toggleCart();
    actionPage();
    openCart();
    
});