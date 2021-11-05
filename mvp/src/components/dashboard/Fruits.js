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


{/* <SvgUri
width="100%"
height="100%"
uri="http://thenewcode.com/assets/images/thumbnails/homer-simpson.svg"
/> */}


const Fruit = ({fruit}) => {
    if (fruit=="alcachofa"){
	return (<Artichoke width="150%" height="150%" style={{position:'absolute',left:-15,}}/>); }

    else if (fruit=="Manzana"){
        return (<Apple width="200%" height="250%" style={{position:'absolute',top:-15,left:-45}}/>); }

    else if (fruit=='espárrago'){
        return (<Asparagus width="200%" height="200%" style={{position:'absolute',top:-15,left:-45}}/>); }

    else if (fruit=='palta'){
        return (<Avocado width="100%" height="100%" style={{position:'absolute',top:15,left:5}}/>); }

    else if (fruit=='plátano'){
        return (<Banana width="200%" height="200%" style={{position:'absolute',top:-20,left:-30}}/>); }
        
    else if (fruit=='arándano'){
        return (<Bluberry width="200%" height="200%" style={{position:'absolute',top:-20,left:-40}}/>); }

    else if (fruit=='repollo'){
        return (<Cabbage width="250%" height="250%" style={{position:'absolute',bottom:-5,right:-20}}/>); }

    else if (fruit=='capsicum'){
        return (<Capsicum width="250%" height="250%" style={{position:'absolute',bottom:-15,right:-35}}/>); }
        
    else if (fruit=='zanahoria'){
        return (<Carrot width="110%" height="110%" style={{position:'absolute',bottom:-15,left:15}}/>); } 

    else if (fruit=='coliflor'){
        return (<Cauliflower width="150%" height="150%" style={{position:'absolute',bottom:-25,left:-15}}/>); }

    else if (fruit=='apio'){
        return (<Celery width="200%" height="200%" style={{position:'absolute',top:-15,left:-35}}/>); }
        
    else if (fruit=='acelga'){
        return (<Chards width="200%" height="200%" />); }

    else if (fruit=='cherimoya'){
        return (<Cherimoya width="200%" height="200%"/>); }

    else if (fruit=='chip de chocolate'){
        return (<ChocolateChip width="200%" height="200%"/>); }
        
    else if (fruit=='clementine'){
        return (<Clementine width="200%" height="200%"/>); }

    else if (fruit=='choclo'){
        return (<Corn width="200%" height="200%"/>); }

    else if (fruit=='pepino alaska'){
        return (<Cucumber width="200%" height="200%"/>); }
        
    else if (fruit=='berenjena'){
        return (<Eggplant width="200%" height="200%"/>); }

    else if (fruit=='racimo de uvas'){
        return (<Grapes width="200%" height="200%"/>); }

    else if (fruit=='lechuga'){
        return (<Lettuce width="200%" height="200%"/>); }
        
    else if (fruit=='kale'){
        return (<Kale width="200%" height="200%"/>); }

    else if (fruit=='limón'){
        return (<Lemon width="200%" height="200%"/>); }
        
    else if (fruit=='lenteja'){
        return (<Lentil width="200%" height="200%" style={{position:'absolute',top:-25,left:-35}}/>); }

    else if (fruit=='Limón sutil'){
        return (<Lime width="200%" height="200%"/>); }

    else if (fruit=='mango'){
        return (<Mango width="200%" height="200%"/>); }

    else if (fruit=='melón'){
        return (<Melon width="200%" height="200%"/>); }
        
    else if (fruit=='aceituna'){
        return (<Olive width="200%" height="200%"/>); }

    else if (fruit=='cebolla'){
        return (<Onion width="200%" height="200%"/>); }

    else if (fruit=='durazno'){
        return (<Peach width="200%" height="200%"/>); }
        
    else if (fruit=='piña'){
        return (<Pineapple width="200%" height="200%"/>); }

     else if (fruit=='zapallo'){
        return (<Pumpkin width="200%" height="200%"/>); }
        
    else if (fruit=='frambuesa'){
        return (<Raspberry width="200%" height="200%"/>); }

    else if (fruit=='cebollín'){
        return (<Scallion width="200%" height="200%"/>); }

    else if (fruit=='espinaca'){
        return (<Spinach width="200%" height="200%"/>); }
        
    else if (fruit=='Frutilla'){
        return (<Strawberry width="200%" height="200%"/>); }

    else if (fruit=='sandía'){
        return (<Watermelon width="200%" height="200%"/>); }

    return (<Apple width="200%" height="200%"/>);
};

export default Fruit;