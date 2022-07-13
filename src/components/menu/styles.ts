import styled from 'styled-components';

export const MenuItems = styled.div`
  width: fit-content;
  height: 400px;
  border-radius: 10px;
  background-color: ${props => props.theme.colors.primary};
  position: absolute;
  z-index: 999;
  box-shadow: inset 0 0 1rem rgba(0,0,0,0.4);
  transform: translateX(-10%);
  @media (max-width: 1300px){
    transform: translateX(-20%);
  }
  @media (max-width: 1200px){
    transform: translateX(-30%);
  }
  @media (max-width: 1000px){
    transform: translateX(-40%);
  }
  @media (max-width: 900px){
    transform: translateX(-50%);
  }
  @media (max-width: 800px){
    transform: translateX(-65%);
  }
  @media (max-width: 610px){
    transform: translateX(-85%);
  }
`;
export const MenuIcon = styled.div`
  margin-top: 1rem;
  margin-left: 16px;
  position: relative;
  height: auto;
  width: fit-content;
  cursor: pointer;
  .icon {
  width: 20px;
  height: 20px;
};
.icon.iconActive {
  width: 20px;
  height: 20px;
};

;
.menuItems li {
  list-style-type: none;
}
.menuClose {
  display: none;
};
.menu.menuOpen {
  position: absolute; 
  display: block;
};

.icoon {
  position: absolute;
  width: 30px;
  height: 8px;
  background: #000;
  border: 1px solid #ccc;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);
  transition: 0.1s;
}
.icoon::before {
  top: -13px;
  left: -1px;
  content: '';
  position: absolute;
  width: 20px;
  height: 6px;
  background: #000;
  border: 1px solid #ccc;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);
  transition: 0.5s;
  }
  
.icoon::after {
  top: 10px;
  left: -1px;
  content: '';
  position: absolute;
  width: 37px;
  height: 6px;
  background: #000;
  border: 1px solid #ccc;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);
  transition: 0.5s;
  }
.icoon.icoonActive {
  background: transparent;
  border: none;
  box-shadow: none;
  
}
.icoon.icoonActive::before {
  width: 37px;
  height: 6px;
  top: 0;
  background: #000;
  transform: rotate(225deg);
  position: absolute;
}
.icoon.icoonActive::after {
  width: 37px;
  height: 6px;
  top: 0;
  background: #000;
  transform: rotate(135deg);
  position: absolute;
}
`;

