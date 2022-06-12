import React from 'react';

import { CardContainer } from './styles';
import CardTitlep from '../cardTitle'
import CardPrices from '../cardPrice'
import CardImagem from '../produto'

const Card: React.FC = () => {

    return (
        <CardContainer>
            <CardImagem/>
            <CardTitlep/>
            <CardPrices/>
        </CardContainer>
    );
};

export default Card;