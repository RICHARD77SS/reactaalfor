import React, { useState } from 'react';

import { GradContSt, ConteinerGrad, GradInputSt, GradViewSt, ViewSt } from './styles'


import { Input } from '../input'
import { Title } from '../title'


export const ViewGradient = (props) => (

  <ViewSt
    color={props.color}>
  </ViewSt>
)


export const GradientGenerator = () => {
  const [color1, setColor1] = useState('20,255,255,1')
  const [Color2, setColor2] = useState('110,30,250,1')
  const [multiColor, setMultiColor] = useState('rgba(20,255,25,1),rgba(110,30,250,1),rgba(20,25,255,1)')

  const color = 'rgba(' + color1 + ')';
  const colorb = 'rgba(' + Color2 + ')';
  const GradDirection = ['to bottom right', 'to bottom left ', 'to bottom ', 'to left', 'to right', 'to top', 'to top right', 'to top left'];
  const [Direction, setDirection] = useState('0');


  const GradType = ['linear-gradient ', 'radial-gradient ', 'conic-gradient '];
  const [Type, setType] = useState('0');


  const Grad = 'linear-gradient(' + GradDirection[Direction] + ',' + color + ',' + colorb + ')';

  const GradMulti = 'linear-gradient(' + GradDirection[Direction] + ',' + multiColor + ')';


  return (
    <GradContSt>
      <ConteinerGrad >
        <GradInputSt>
          <Title>1</Title>
          <Input
            type='string'
            inputSize='150px'
            placeholder=' Color1'
            onChange={(e) => setColor1(e.target.value)}
          />
          <br />
          <Title>{color}</Title>
          <ViewGradient color={color}>
          </ViewGradient>
        </GradInputSt>

        <GradInputSt>
          <Title>2</Title>
          <Input
            type='string'
            inputSize='150px'
            placeholder=' Color2'
            onChange={(e) => setColor2(e.target.value)}
          />
          <br />
          <Title>{colorb}</Title>
          <ViewGradient color={colorb}>
          </ViewGradient>
        </GradInputSt>
        <GradInputSt>
          <Title>Direção</Title>
          <Input
            min={0}
            max={7}
            step={1}
            type='number'
            inputSize='150px'
            placeholder=' direction'
            onChange={(e) => setDirection(e.target.value)}
          />
          <br />
          <Title>{GradDirection[Direction]}</Title>
          <ViewGradient color={Grad}></ViewGradient>
        </GradInputSt>
      </ConteinerGrad>
      <GradViewSt>
        <Title fontSize='1rem'>Resultado:<br /><br /> {Grad}</Title>
        <ViewGradient color={Grad}></ViewGradient>
      </GradViewSt>
      <GradViewSt>
        <br />
        <Title>Multicolor</Title>
        <Input
          type='string'
          inputSize='400px'
          placeholder=' rgba(20,255,255,1),rgba(110,30,250,1),rgba(20,255,255,1)'
          onChange={(e) => setMultiColor(e.target.value)}
        />
        <br />
        <Title>{GradMulti}</Title>
        <br />
        <ViewGradient width='200px' color={GradMulti}></ViewGradient>
      </GradViewSt>
      <br />
      <GradInputSt>
        <p>Type</p>
        <Input
          min={0}
          max={2}
          step={1}
          type='number'
          inputSize='70px'
          placeholder=' Type'
          onChange={(e) => setType(e.target.value)}
        />
        <Title>{GradType[Type]}</Title>

      </GradInputSt>
    </GradContSt>
  )
}