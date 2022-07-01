import styled from 'styled-components';

interface Props {
  fontSize: string;
  fontWeight?: string;
}

export const TitleSt = styled.div<Props>`
  font-size: ${props => props.fontSize};
  font-weight: ${props => props.fontWeight};
  width: fit-content;
  height: fit-content;
  margin: 4px;
  color: ${props => props.theme.colors.text};

`