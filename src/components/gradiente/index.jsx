import React, { useState } from 'react';

import { GradContSt, GradColorSt, GradInputSt, GradViewSt, ViewSt, GradInputLabelSt } from './styles'

import { Label } from '../label'
import { Input } from '../input'
import { Title } from '../title'
import { Button } from '../button'

export const ViewGradient = ( props ) => (
  
  <ViewSt
    colorss={props.colorss}
    color={props.color}>
    oooaaa
  </ViewSt>
)

export const GradientGenerator = () =>{
    const [Red, setRed] = useState('20')
    const [Blue, setBlue] = useState('70')
    const [Green, setGreen] = useState('50')
  const [Transparent, setTransparent] = useState('1')
  
    const [Red2, setRed2] = useState('110')
    const [Blue2, setBlue2] = useState('210')
    const [Green2, setGreen2] = useState('0')
    const [Transparent2, setTransparent2] = useState('1')
  
  
  const color1 = 'rgba(' + Red + ',' + Blue + ',' + Green + ',' + Transparent + ')';
  console.log(color1)

  const color2 = 'rgba(' + Red2 + ',' + Blue2 + ',' + Green2 + ',' + Transparent2 + ')';
  const Grad = 'linear-gradient(' + color1 + ',' + color2 + ')'
  console.log(Grad)
  return (
  <GradContSt>
      <GradColorSt>
        <GradInputSt>

          <Title>Color1</Title>
          <GradInputLabelSt>
            <Label>Red</Label>
              <Input
                min={0}
                max={255}
                step={1}
                type='number'
                inputSize='70px'
                placeholder=' '
                onChange={(e) => setRed(e.target.value)}
              /><p>{Red}</p>
          </GradInputLabelSt>
          <GradInputLabelSt>
          <Label>Green</Label>
          <Input
            min={0}
            max={255}
            step={1}
            type='number'
            inputSize='70px'
            placeholder=' '
            onChange={(e) => setGreen(e.target.value)}
          /><p>{Green}</p>
          </GradInputLabelSt>
          <GradInputLabelSt>
            <Label>Blue</Label>
            <Input
              min={0}
              max={255}
              step={1}
              type='number'
              inputSize='70px'
              placeholder=' '
              onChange={(e) => setBlue(e.target.value)}
            /><p>{Blue}</p>
          </GradInputLabelSt>
          <GradInputLabelSt>
            <Label>Transparent</Label>
            <Input
              min={0}
              max={1}
              step={0.1}
              type='number'
              inputSize='70px'
              placeholder=' '
              onChange={(e) => setTransparent(e.target.value)}
            /><p>{Transparent}</p>
          </GradInputLabelSt>
          <Title>{color1}</Title>
        </GradInputSt>

        <GradInputSt>
          <Title>Color2</Title>
          <GradInputLabelSt>
            <Label>Red</Label>
              <Input
                min={0}
                max={255}
                step={1}
                type='number'
                inputSize='70px'
                placeholder=' '
                onChange={(e) => setRed2(e.target.value)}
              /><p>{Red2}</p>
          </GradInputLabelSt>
          <GradInputLabelSt>
            <Label>Green</Label>
            <Input
                min={0}
                max={255}
                step={1}
                type='number'
                inputSize='70px'
                placeholder=' '
                onChange={(e) => setGreen2(e.target.value)}
              /><p>{Green2}</p>
          </GradInputLabelSt>
          <GradInputLabelSt>
            <Label>Blue</Label>
            <Input
              min={0}
              max={255}
              step={1}
              type='number'
              inputSize='70px'
              placeholder='Blue'
              onChange={(e) => setBlue2(e.target.value)}
            /><p>{Blue2}</p>
          </GradInputLabelSt>
          <GradInputLabelSt>
            <Label>Transparent</Label>
            <Input
              min={0}
              max={1}
              step={0.1}
              type='number'
              inputSize='70px'
              placeholder=' '
              onChange={(e) => setTransparent2(e.target.value)}
            /><p>{Transparent2}</p>
          </GradInputLabelSt>
          <Title>{color2}</Title>
        </GradInputSt>
        <Title>Gradiente {Grad}</Title>
        <Button type='button'>Add Color</Button>
        <Button type='button'>Remove Color</Button>
      <GradViewSt>
          <ViewGradient color={color1}>
          </ViewGradient>
          <ViewGradient color={color2}>
          </ViewGradient>
          <ViewGradient color={Grad}>
          </ViewGradient>
      </GradViewSt>
    </GradColorSt>
  </GradContSt>
)}