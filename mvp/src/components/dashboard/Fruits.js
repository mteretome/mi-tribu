import React from 'react';

import { SvgUri } from 'react-native-svg'; 

import Apple from '../../assets/images/FruitsSVG/apple.svg';
import Artichoke from '../../assets/images/FruitsSVG/artichoke.svg';
import Asparagus from '../../assets/images/FruitsSVG/asparagus.svg';
import Avocado from '../../assets/images/FruitsSVG/avocado.svg';
import Banana from '../../assets/images/FruitsSVG/banana.svg';
import Bluberry from '../../assets/images/FruitsSVG/blueberry.svg';
import Cabbage from '../../assets/images/FruitsSVG/cabbage.svg';
import Capsicum from '../../assets/images/FruitsSVG/capsicum.svg';
import Carrot from '../../assets/images/FruitsSVG/carrot.svg';
import Cauliflower from '../../assets/images/FruitsSVG/cauliflower.svg';
import Celery from '../../assets/images/FruitsSVG/celery.svg';
import Chards from '../../assets/images/FruitsSVG/chards.svg';
import Cherimoya from '../../assets/images/FruitsSVG/cherimoya.svg';
import ChocolateChip from '../../assets/images/FruitsSVG/chocolate-chip.svg';
import Clementine from '../../assets/images/FruitsSVG/clementine.svg';
import Corn from '../../assets/images/FruitsSVG/corn.svg';
import Cucumber from '../../assets/images/FruitsSVG/cucumber.svg';
import Eggplant from '../../assets/images/FruitsSVG/eggplant.svg';
import Grapes from '../../assets/images/FruitsSVG/grapes.svg';
import Lettuce from '../../assets/images/FruitsSVG/iceberg-lettuce.svg';
import Kale from '../../assets/images/FruitsSVG/kale.svg';
import Lemon from '../../assets/images/FruitsSVG/lemon.svg';
import Lentil from '../../assets/images/FruitsSVG/lentil.svg';
import Lime from '../../assets/images/FruitsSVG/lime.svg';
import Mango from '../../assets/images/FruitsSVG/mango.svg';
import Melon from '../../assets/images/FruitsSVG/melon.svg';
import Olive from '../../assets/images/FruitsSVG/olive.svg';
import Onion from '../../assets/images/FruitsSVG/onion.svg';
import Peach from '../../assets/images/FruitsSVG/peach.svg';
import Pineapple from '../../assets/images/FruitsSVG/pineapple.svg';
import Pumpkin from '../../assets/images/FruitsSVG/pumpkin.svg';
import Raspberry from '../../assets/images/FruitsSVG/raspberry.svg';
import Scallion from '../../assets/images/FruitsSVG/scallion.svg';
import Spinach from '../../assets/images/FruitsSVG/spinach.svg';
import Strawberry from '../../assets/images/FruitsSVG/strawberry.svg';
import Watermelon from '../../assets/images/FruitsSVG/watermelon.svg';



const Fruit = ({fruit}) => {
    if (fruit=="una alcachofa"){
	return (<Artichoke width="50%" height="50%" style={{flexShrink:1}}/>); }

    else if (fruit=="una manzana"){
        return (<Apple width="40%" height="50%" style={{flexShrink:1}}/>); }

    else if (fruit=='un espárrago'){
        return (<Asparagus width="50%" height="55%" style={{flexShrink:1}}/>); }

    else if (fruit=='una palta'){
        return (<Avocado width="50%" height="50%" style={{flexShrink:1}}/>); }

    else if (fruit=='un plátano'){
        return (<Banana width="45%" height="50%" style={{flexShrink:1}}/>); }
        
    else if (fruit=='un arándano'){
        return (<Bluberry  width="50%" height="50%" style={{flexShrink:1}}/>); }

    else if (fruit=='un repollo'){
        return (<Cabbage width="50%" height="50%" style={{flexShrink:1}}/>); }

    else if (fruit=='un pimentón'){
        return (<Capsicum width="40%" height="50%" style={{flexShrink:1}}/>); }
        
    else if (fruit=='una zanahoria'){
        return (<Carrot width="40%" height="50%" style={{flexShrink:1}}/>); }

    else if (fruit=='un coliflor'){
        return (<Cauliflower width="50%" height="50%" style={{flexShrink:1}}/>); }

    else if (fruit=='un apio'){
        return (<Celery width="40%" height="055%" style={{flexShrink:1}}/>); }
        
    else if (fruit=='una acelga'){
        return (<Chards width="50%" height="50%" style={{flexShrink:1}}/>); }

    else if (fruit=='una chirimoya'){
        return (<Cherimoya width="50%" height="50%" style={{flexShrink:1}}/>); }

    else if (fruit=='un chip de chocolate'){
        return (<ChocolateChip  width="50%" height="50%" style={{flexShrink:1}}/>); }
        
    else if (fruit=='una mandarina'){
        return (<Clementine width="50%" height="50%" style={{flexShrink:1}}/>); }

    else if (fruit=='un choclo'){
        return (<Corn width="50%" height="50%" style={{flexShrink:1}}/>); }

    else if (fruit=='un pepino'){
        return (<Cucumber width="50%" height="50%" style={{flexShrink:1}}/>); }
        
    else if (fruit=='una berenjena'){
        return (<Eggplant width="55%" height="50%" style={{flexShrink:1}}/>); }

    else if (fruit=='un racimo de uvas'){
        return (<Grapes width="40%" height="40%" style={{flexShrink:1}}/>); }

    else if (fruit=='una lechuga'){
        return (<Lettuce width="40%" height="50%" style={{flexShrink:1}}/>); }
        
    else if (fruit=='un kale'){
        return (<Kale width="40%" height="50%" style={{flexShrink:1}}/>); }

    else if (fruit=='un limón'){
        return (<Lemon width="40%" height="50%" style={{flexShrink:1}}/>); }
        
    else if (fruit=='una lenteja'){
        return (<Lentil  width="50%" height="50%" style={{flexShrink:1}}/>); }

    else if (fruit=='un limón sutil'){
        return (<Lime  width="40%" height="50%" style={{flexShrink:1}}/>); }

    else if (fruit=='un mango'){
        return (<Mango width="50%" height="50%" style={{flexShrink:1}}/>); }

    else if (fruit=='un melón'){
        return (<Melon width="60%" height="50%" style={{flexShrink:1}}/>); }        
    else if (fruit=='una aceituna'){
        return (<Olive width="50%" height="50%" style={{flexShrink:1}}/>); }

    else if (fruit=='una cebolla'){
        return (<Onion width="32%" height="50%" style={{flexShrink:1}}/>); }

    else if (fruit=='un durazno'){
        return (<Peach width="40%" height="50%" style={{flexShrink:1}}/>); }
        
    else if (fruit=='una piña'){
        return (<Pineapple width="56%" height="50%" style={{flexShrink:1}}/>); }

     else if (fruit=='un zapallo'){
        return (<Pumpkin width="50%" height="50%" style={{flexShrink:1}}/>); }
        
    else if (fruit=='una frambuesa'){ 
        return (<Raspberry width="40%" height="50%" style={{flexShrink:1}}/>); }

    else if (fruit=='un cebollín'){
        return (<Scallion width="45%" height="50%" style={{flexShrink:1}}/>); }

    else if (fruit=='una espinaca'){
        return (<Spinach width="45%" height="50%" style={{flexShrink:1}}/>); }
        
    else if (fruit=='una frutilla'){
        return (<Strawberry width="40%" height="50%" style={{flexShrink:1}}/>); }

    else if (fruit=='una sandía'){
        return (<Watermelon width="50%" height="50%" style={{flexShrink:1}}/>); }

    return (<Apple width="50%" height="50%" style={{flexShrink:1}}/>); 
};

export default Fruit;