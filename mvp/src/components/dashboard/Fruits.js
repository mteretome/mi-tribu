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
        
    else if (fruit=='blueberry'){
        return (<Bluberry width="200%" height="200%" style={{position:'absolute',top:-10,left:-40}}/>); }

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
        //************************************************************* */
    else if (fruit=='chards'){
        return (<Chards width="200%" height="200%" style={{position:'absolute',top:-22,left:-40}} />); }

    else if (fruit=='cherimoya'){
        return (<Cherimoya width="200%" height="200%"  style={{position:'absolute',top:-34,left:-48}}/>); }

    else if (fruit=='chocolate chip'){
        return (<ChocolateChip width="400%" height="400%" style={{position:'absolute',top:-110,left:-220}}/>); }
    else if (fruit=='clementine'){
        return (<Clementine width="200%" height="200%" style={{position:'absolute',top:-30,left:-50}}/>); }

    else if (fruit=='corn'){
        return (<Corn width="300%" height="300%" style={{position:'absolute',top:-70,left:-90}}/>); }

    else if (fruit=='cucumber'){
        return (<Cucumber width="400%" height="400%" style={{position:'absolute',top:-100,left:-170}}/>); }
        
    else if (fruit=='eggplant'){
        return (<Eggplant width="200%" height="200%" style={{position:'absolute',top:-32,left:-40}}/>); }

    else if (fruit=='grapes'){
        return (<Grapes width="300%" height="300%" style={{position:'absolute',top:-66,left:-100}} />); }

    else if (fruit=='lettuce'){
        return (<Lettuce width="350%" height="350%" style={{position:'absolute',top:-72,right:-200}}/>); }
        
    else if (fruit=='kale'){
        return (<Kale width="380%" height="380%" style={{position:'absolute',top:-95,left:-140}}/>); }

    else if (fruit=='lemon'){
        return (<Lemon width="150%" height="150%" style={{position:'absolute',top:-10,left:-12}}/>); }
        
    else if (fruit=='lentil'){
        return (<Lentil width="150%" height="150%" style={{position:'absolute',top:-10,left:-15}}/>); }

    else if (fruit=='lime'){
        return (<Lime width="350%" height="350%" style={{position:'absolute',top:-85,left:-120}}/>); }

    else if (fruit=='mango'){
        return (<Mango width="200%" height="200%" style={{position:'absolute',top:-30,left:-45}}/>); }

    else if (fruit=='melon'){
        return (<Melon width="200%" height="200%" style={{position:'absolute',top:-30,left:-40}}/>); }
        
    else if (fruit=='olive'){
        return (<Olive width="300%" height="300%" style={{position:'absolute',top:-70,left:-95}}/>); }

    else if (fruit=='onion'){
        return (<Onion width="140%" height="140%" style={{position:'absolute',top:-5,left:-10}}/>); }

    else if (fruit=='peach'){
        return (<Peach width="150%" height="150%" style={{position:'absolute',top:-15,left:-15}}/>); }
        
    else if (fruit=='pineapple'){
        return (<Pineapple width="120%" height="120%" style={{position:'absolute',top:0,left:-5}}/>); }

     else if (fruit=='pumpkin'){
        return (<Pumpkin width="150%" height="150%" style={{position:'absolute',top:-10,left:-20}}/>); }
        
    else if (fruit=='raspberry'){
        return (<Raspberry width="300%" height="300%" style={{position:'absolute',top:-70,left:-100}}/>); }

    else if (fruit=='scallion'){
        return (<Scallion width="120%" height="120%" style={{position:'absolute',top:0,left:0}}/>); }

    else if (fruit=='spinach'){
        return (<Spinach width="180%" height="180%" style={{position:'absolute',top:-20,left:-45}}/>); }
        
    else if (fruit=='strawberry'){
        return (<Strawberry width="330%" height="330%" style={{position:'absolute',top:-80,left:-135}}/>); }

    else if (fruit=='watermelon'){
        return (<Watermelon width="330%" height="330%" style={{position:'absolute',top:-80,left:-145}}/>); }

    return (<Apple width="200%" height="200%" style={{position:'absolute',top:-12,left:-50}}/>);
};

export default Fruit;