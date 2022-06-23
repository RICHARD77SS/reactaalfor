import React from 'react';
import { Link } from 'react-router-dom'
import { Button} from '../button';
import { CardTitlee } from '../cardTitle'
import { CardPrices } from '../cardPrice'
import { CardImage } from '../cardImage'
import { CardContainer } from './styles';

const CardInfo = [
  {
    id: "0",
    image: "https://i.postimg.cc/Gm5hg5YY/wp9122770.jpg",
    title: "TITLE IS HER",
    price: "R$ 1,900"
  },
  {
    id: "1",
    title: "TITLE ISEwwwww",
    image: "https://wallpapercave.com/wp/wp4326748.jpg",
    price: "R$ 9,00"
  },
  {
    id: "2",
    title: "TITLE",
    image: "./images/img3.jpg",
    price: "R$ r5,00"
  },
  {
    id: "3",
    image: "./images/img1.jpg",
    title: "TITLE IS HERE",
    price: "R$ 2,900"
  },
  {
    id: "4",
    title: "TITLE ISEgggggg",
    image: "./images/img2.jpg",
    price: "R$ 9 0,00"
  },

]


export function CardRender({image, title, price}) {
    return (
        <CardContainer>
            <CardImage image={image} />
            <CardTitlee title={title} />
            <CardPrices price={price} />
        <Button buttonColor='#dd8787' buttonBorderRadius='20px' buttonSize='100px' onClick=''><Link to='/produto'>Buy</Link></Button>
        </CardContainer>
    );
}

export function CardContent() {
    
    return (
        <>
        {CardInfo.map((cardInfo) => {
          return <CardRender key={cardInfo.id} price={cardInfo.price} image={cardInfo.image} title={cardInfo.title}  >
                </CardRender>
            })}
        </>
    );
}
