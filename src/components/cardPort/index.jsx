 import React from 'react';

 import { CardTitlee } from '../cardTitle'
 import { CardPrices } from '../cardPrice'
 import { CardImage } from '../cardImage'
 import { CardContainer } from './styles';




const image = "/images/img1.jpg"
const title ="TITLE IS HERddd"
const price = "R$ 1,900"



 function Car({image, title, price}) {
     return (
         <CardContainer>
             <CardImage image={image} />
             <CardTitlee title={title} />
             <CardPrices price={price} />
         </CardContainer>
     );
 }

 export function CardContent() {
      
     return (
         <>
          <Car price={price} image={image} title={title}  >
          </Car>
         </>
     );
 }
