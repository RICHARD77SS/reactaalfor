import styled from 'styled-components';

export const DivFlexStyle = styled.div`
  width: fit-content;
  height: auto;
  display: flex;
  align-items: center;
  justify-content: space-around;
  font-size: 1rem;
  Input { 
    border: 2px solid #000;
    border-right: none;
    border-radius: 10px;
    border-bottom-right-radius: 0;
    border-top-right-radius: 0;
  };
  Input:hover {
    width: 100px;
          };
  Input:focus {
    width: 100px;
          };
  Input::placeholder {
    font-size: .7rem;
          };
  Button {
    border-left: none;
    border-bottom-left-radius: 0;
    border-top-left-radius: 0;
  }

`