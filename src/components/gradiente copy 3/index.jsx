import React, { useState } from 'react';

import { GradContSt, GradColorSt, GradInputSt, GradViewSt, ViewSt } from './styles'

import { Label } from '../label'
import { Input } from '../input'


export const ViewGradient = ( props ) => (
  
  <ViewSt
    color={props.color}>
    oooaaa
  </ViewSt>
)

export const GradientGenerator = () =>{
    const [Red, setRed] = useState('')
    const [Blue, setBlue] = useState('')
    const [Green, setGreen] = useState('')
    const [Transparent, setTransparent] = useState('')
  
  
  const color1 = 'rgba(' + Red + ',' + Blue + ',' + Green + ',' + Transparent + ')';
  console.log(color1)
  
  return (
  <GradContSt>
    <GradColorSt>
      <GradInputSt>
        <Label>Red</Label>
          <Input
            min={0}
            max={255}
            type='range'
            inputSize='200px'
            placeholder=' '
            onChange={(e) => setRed(e.target.value)}
          /><p>{Red}</p>
        <Label>Green</Label>
          <Input
            min={0}
            max={255}
            type='range'
            inputSize='200px'
            placeholder=' '
            onChange={(e) => setGreen(e.target.value)}
          /><p>{Green}</p>
        <Label>Blue</Label>
          <Input
            min={0}
            max={255}
            type='range'
            inputSize='200px'
            placeholder=' '
            onChange={(e) => setBlue(e.target.value)}
          /><p>{Blue}</p>
        <Label>Transparent</Label>
          <Input
            min={0}
            max={1}
            step={0.1}
            type='range'
            inputSize='200px'
            placeholder=' '
            onChange={(e) => setTransparent(e.target.value)}
          /><p>{Transparent}</p>
      </GradInputSt>
        <GradViewSt>
          <ViewGradient color={color1}>
          </ViewGradient>
      </GradViewSt>
    </GradColorSt>
  </GradContSt>
)}