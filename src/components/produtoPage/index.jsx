import React from 'react';

import { ProdutoContent } from '../produtoContent'
import {
  ProdutoPageContainerSt,
  MaisProdutosSt,
  MaisProdutosSlideSt

} from './styles'
import { Title } from '../title'

import Box from '@mui/material/Box';
import Rating from '@mui/material/Rating';
import Typography from '@mui/material/Typography';
import { ProdutoDescription } from '../produtoDescription'
import {Prod} from '../produtoSlide'

export function BasicRating() {
  const [value, setValue] = React.useState(4)
  return (
    <Box
      sx={{
        '& > legend': { mt: 2 },
      }}
    >
      <Typography component="legend">Controlled</Typography>
      <Rating
        name="simple-controlled"
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
      />
      <Typography component="legend">Read only</Typography>
      <Rating name="read-only" value={value} readOnly />
      <Typography component="legend">Disabled</Typography>
      <Rating name="disabled" value={value} disabled />
      <Typography component="legend">No rating given</Typography>
      <Rating name="no-value" value={null} />
    </Box>
  );
}

export const ProdutoPage = () => {
  
  return (
    <ProdutoPageContainerSt>
      <ProdutoContent />
      <ProdutoDescription />
      <MaisProdutosSt>
        <Title fontSize="1.5rem" fontColor={props => props.theme.colors.text}>Mais produtos</Title>
        <MaisProdutosSlideSt>
          <Prod />
        </MaisProdutosSlideSt>
        <Title fontSize="1.5rem" fontColor={props => props.theme.colors.text}>Mais produtos</Title>
        <MaisProdutosSlideSt>
        </MaisProdutosSlideSt>
      </MaisProdutosSt>
    </ProdutoPageContainerSt>
  )
}