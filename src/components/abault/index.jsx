import React from 'react';

import { AbaultConteinerStyle, AbaultContentStyle, DevImageConteinerStyle, DevDescriptionConteinerStyle, TextAbaultMeConteiner, TextHabilidadesConteiner } from './styles';
import { Title } from '../title';

const Abault = () => {
  return (
    <AbaultConteinerStyle>
      <Title fontSize='2rem' fontColor={props => props.theme.colors.text} >Abault</Title>
      <>
        <AbaultContentStyle>
          <DevImageConteinerStyle>
            <img src="https://www.linkpicture.com/q/meuAvatar.png" alt="" />
          </DevImageConteinerStyle>
          <DevDescriptionConteinerStyle>
            <Title fontSize='2rem'>Abault me!!!</Title>
            <TextAbaultMeConteiner>
              Me chamo Richard, tenho 22 anos.<br/>
              Eu conheci programação no ano de 2020, dois meses após o anuncio da pandemia no brasil.<br/>
              No inicio eu possuia apenas uma televisao e um celular, ambos com acesso a internet, eu praticava HTML e CSS pelo celular com paginas simples<br />
              eu comecei sem saber nenehum conceito a respeito da area, tinha um conhecimento basico a respeito das funções de um compuador,<br />
              Como dessde o comeco eu estava por conta propria ao longo do caminho eu desanimei algumas veses por nao conseguir praticar por um computador,<br />
              e por não saber se estava no caminho certo, entao demorei até saber como estudar... <br/>
              entao fiquei ate o fim do ano de 2021, pra entender o que era Http, Dns, html, css, etc.<br />
              No inicio de 2022 eu comprei um computador com a ajuda da minha familia,<br />
              entao a partir desse dia e comecei a praticar os conceitos que aprendi,<br />
              e com eles fui aprendendo novos conceitos...<br />
              <br />
            </TextAbaultMeConteiner>
            <Title>Habilidades</Title>
            <TextHabilidadesConteiner>

            </TextHabilidadesConteiner>
          </DevDescriptionConteinerStyle>
        </AbaultContentStyle>
      </>
    </AbaultConteinerStyle>
  );
}

export default Abault;