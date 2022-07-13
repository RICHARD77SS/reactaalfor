import React, { useState } from 'react';

import { GradContSt, GradColorSt, GradInputSt, GradViewSt, ViewSt, GradInputLabelSt } from './styles'


import { Input } from '../input'
import { Title } from '../title'
import { Button } from '../button'

export const ViewGradient = (props) => (

  <ViewSt
    colorss={props.colorss}
    color={props.color}>
    oooaaa
  </ViewSt>
)


export const GradientGenerator = () => {
  const [Red, setRed] = useState('20')
  const [Blue, setBlue] = useState('70')
  const [Green, setGreen] = useState('50')
  const [Transparent, setTransparent] = useState('1')

  const [Red2, setRed2] = useState('110')
  const [Blue2, setBlue2] = useState('210')
  const [Green2, setGreen2] = useState('0')
  const [Transparent2, setTransparent2] = useState('1')

  const [Direction, setDirection] = useState('0')
  const [Type, setType] = useState('0')


  const color1 = 'rgba(' + Red + ',' + Blue + ',' + Green + ',' + Transparent + ')';


  const color2 = 'rgba(' + Red2 + ',' + Blue2 + ',' + Green2 + ',' + Transparent2 + ')';

  const GradDirection = ['to bottom right', 'to bottom left ', 'to bottom ', 'to left', 'to right', 'to top', 'to top right', 'to top left'];

  const GradType = ['linear-gradient ', 'Radial Gradients ', 'Conic Gradients '];

  const Grad = 'linear-gradient(' + color1 + ',' + color2 + ')';

  const GradMix = 'linear-gradient(' + GradDirection[Direction] + ',' + color1 + ',' + color2 + ')';



  return (
    <GradContSt>
      <GradColorSt>
        <GradInputSt>

          <Title>1</Title>
          <GradInputLabelSt>
            <Input
              min={0}
              max={255}
              step={1}
              type='number'
              inputSize='70px'
              placeholder=' Red'
              onChange={(e) => setRed(e.target.value)}
            /><p>{Red}</p>
            <Input
              min={0}
              max={255}
              step={1}
              type='number'
              inputSize='70px'
              placeholder=' Green'
              onChange={(e) => setGreen(e.target.value)}
            /><p>{Green}</p>
            <Input
              min={0}
              max={255}
              step={1}
              type='number'
              inputSize='70px'
              placeholder=' Blue'
              onChange={(e) => setBlue(e.target.value)}
            /><p>{Blue}</p>
            <Input
              min={0}
              max={1}
              step={0.1}
              type='number'
              inputSize='70px'
              placeholder=' Transparent'
              onChange={(e) => setTransparent(e.target.value)}
            /><p>{Transparent}</p>
          </GradInputLabelSt>
          <Title>{color1}</Title>
        </GradInputSt>

        <GradInputSt>
          <Title>2</Title>
          <GradInputLabelSt>
            <Input
              min={0}
              max={255}
              step={1}
              type='number'
              inputSize='70px'
              placeholder=' Red'
              onChange={(e) => setRed2(e.target.value)}
            /><p>{Red2}</p>
            <Input
              min={0}
              max={255}
              step={1}
              type='number'
              inputSize='70px'
              placeholder=' Green'
              onChange={(e) => setGreen2(e.target.value)}
            /><p>{Green2}</p>
            <Input
              min={0}
              max={255}
              step={1}
              type='number'
              inputSize='70px'
              placeholder=' Blue'
              onChange={(e) => setBlue2(e.target.value)}
            /><p>{Blue2}</p>
            <Input
              min={0}
              max={1}
              step={0.1}
              type='number'
              inputSize='70px'
              placeholder=' Transparent'
              onChange={(e) => setTransparent2(e.target.value)}
            /><p>{Transparent2}</p>
          </GradInputLabelSt>
          <Title>{color2}</Title>
        </GradInputSt>
        <Input
          min={0}
          max={7}
          step={1}
          type='number'
          inputSize='70px'
          placeholder=' direction'
          onChange={(e) => setDirection(e.target.value)}
        />
        <Input
          min={0}
          max={7}
          step={1}
          type='number'
          inputSize='70px'
          placeholder=' Type'
          onChange={(e) => setType(e.target.value)}
        />
        <Title>{GradDirection[Direction]}</Title>
        <Title>{GradType[Type]}</Title>
        <Button width='100px' type='button' onclick='AddColor'>Add Color</Button>
        <Button width='100px' type='button'>Remove Color</Button>
        <GradViewSt>
          <ViewGradient color={color1}>
          </ViewGradient>
          <ViewGradient color={color2}>
          </ViewGradient>
          <Title>Gradiente: {Grad}</Title>
          <ViewGradient color={Grad}>
          </ViewGradient>
          <Title>Gradiente: {GradMix}</Title>
          <ViewGradient color={GradMix}>
          </ViewGradient>
        </GradViewSt>
      </GradColorSt>
    </GradContSt>
  )
}